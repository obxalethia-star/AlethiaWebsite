import { NextRequest, NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { briefingRequestSchema } from '@/lib/validation';

export const runtime = 'nodejs';

const submissionsByIp = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = briefingRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Please check the form and try again.' },
      { status: 400 }
    );
  }

  // Honeypot tripped: pretend success, drop the submission.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  if (!process.env.DATABASE_URL) {
    console.error('contact submission received but DATABASE_URL is not configured');
    return NextResponse.json({ error: 'Briefing requests are temporarily unavailable.' }, { status: 503 });
  }

  try {
    const pool = getPool();
    await pool.query(
      `INSERT INTO contact_submissions (name, email, organization, role, focus, interest)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [parsed.data.name, parsed.data.email, parsed.data.organization, parsed.data.role, parsed.data.focus, parsed.data.interest]
    );
  } catch (error) {
    console.error('failed to store contact submission', error);
    return NextResponse.json({ error: 'Could not save your request. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
