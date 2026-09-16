-- Briefing / contact requests captured from the website.
-- Insert-only from the app: the API route is the sole writer, using a
-- role that is granted INSERT but explicitly denied SELECT/UPDATE/DELETE,
-- so a leaked connection string can add spam rows but never read or
-- tamper with existing submissions.

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT NOT NULL,
  role TEXT NOT NULL,
  focus TEXT NOT NULL DEFAULT '',
  interest TEXT NOT NULL DEFAULT 'briefing' CHECK (interest IN ('briefing', 'whitepaper', 'descriptor'))
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions (created_at DESC);

-- Application role used by the Next.js server function (set DATABASE_URL
-- to a connection string authenticated as this role, not a superuser).
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'app_contact_writer') THEN
    CREATE ROLE app_contact_writer LOGIN PASSWORD 'change-me';
  END IF;
END
$$;

GRANT INSERT ON contact_submissions TO app_contact_writer;
REVOKE SELECT, UPDATE, DELETE ON contact_submissions FROM app_contact_writer;
