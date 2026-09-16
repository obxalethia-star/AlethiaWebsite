import { z } from 'zod';

export const briefingRequestSchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name').max(200),
  email: z.string().trim().email('Enter a work email').max(320),
  organization: z.string().trim().min(2, 'Enter your organization').max(200),
  role: z.string().trim().min(2, 'Enter your role or title').max(200),
  focus: z.string().trim().max(4000).optional().default(''),
  interest: z.enum(['briefing', 'whitepaper', 'descriptor']).default('briefing'),
  // honeypot field: real users never fill this in
  company_website: z.string().max(0).optional().default('')
});

export type BriefingRequest = z.infer<typeof briefingRequestSchema>;
