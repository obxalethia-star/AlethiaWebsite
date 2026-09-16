export type Agent = {
  slug: string;
  name: string;
  focus: string;
  forWhom: string;
  description: string;
  runbook: string[];
};

export const agents: Agent[] = [
  {
    slug: 'capital-strategist',
    name: 'Capital Strategist',
    focus: 'Capital structure and covenant design',
    forWhom: 'For deal leads structuring the raise',
    description:
      'Drafts capital structures, covenant logic, and board-ready summaries for complex institutional transactions, so the first draft in front of counsel is already shaped around real terms.',
    runbook: ['Model capital stack', 'Draft covenant logic', 'Prepare board summary']
  },
  {
    slug: 'risk-sentinel',
    name: 'Risk Sentinel',
    focus: 'Regtech monitoring',
    forWhom: 'For compliance and risk officers',
    description:
      'Maintains a continuous view of KYC/AML status, jurisdictional checks, counterparty exposure, and audit evidence, flagging what has drifted since the last review instead of waiting for one.',
    runbook: ['Track KYC/AML status', 'Watch counterparty exposure', 'Surface audit evidence gaps']
  },
  {
    slug: 'settlement-orchestrator',
    name: 'Settlement Orchestrator',
    focus: 'Escrow and settlement logic',
    forWhom: 'For treasury and settlement teams',
    description:
      'Maps escrow milestones, multi-signature approval routes, release conditions, and settlement steps, keeping the chamber and the ledger in agreement at every release event.',
    runbook: ['Map escrow milestones', 'Route multi-sig approvals', 'Confirm release conditions']
  },
  {
    slug: 'insights-compiler',
    name: 'Insights Compiler',
    focus: 'Reporting and operating intelligence',
    forWhom: 'For investors, boards, and operators',
    description:
      'Turns deal activity, treasury movement, and module status into investor updates, board packs, and operator dashboards, drawn straight from the chamber record rather than a slide someone assembled by hand.',
    runbook: ['Compile deal activity', 'Draft board pack', 'Publish investor update']
  },
  {
    slug: 'boardroom-steward',
    name: 'Boardroom Steward',
    focus: 'Human-in-the-loop governance',
    forWhom: 'For boards and signing authorities',
    description:
      'Keeps human approval gates explicit by preparing resolutions, vote records, and decision timelines, so every sensitive action still needs a named person to say yes.',
    runbook: ['Prepare resolution', 'Log vote record', 'Track decision timeline']
  }
];

export const operatingPrinciples: string[] = [
  'Agents prepare and route work; executives approve sensitive actions.',
  'Every recommendation attaches context, evidence, and workflow state — nothing arrives unexplained.',
  'Legal, compliance, and settlement steps stay auditable inside the deal container.',
  'The MVP begins with five focused agents before expanding module coverage.'
];
