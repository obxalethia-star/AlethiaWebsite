export type Capability = {
  slug: string;
  order: string;
  title: string;
  audience: string;
  detail: string;
  outcomes: string[];
  nextStep: { label: string; href: string };
};

// Ordered deepest-first: the capability closest to working software leads,
// the least concrete trails, each ending in a next step rather than a dead end.
export const capabilities: Capability[] = [
  {
    slug: 'deal-containers',
    order: '01',
    title: 'Deal Containers',
    audience: 'Institutional transactions, project finance, private markets, mining, agriculture, real estate',
    detail:
      'Permissioned digital chambers where counterparties, documents, approvals, signatures, milestones, and audit trails live in one governed workspace. This is the runtime the three-way matching MVP already runs inside.',
    outcomes: ['Counterparty roles and permissions', 'Document and evidence vaults', 'Board-ready activity history'],
    nextStep: { label: 'See the chamber runtime', href: '/web3#smart-contract-chamber' }
  },
  {
    slug: 'ai-contract-generation',
    order: '02',
    title: 'AI Contract Generation',
    audience: 'Legal teams, founders, advisors, boards, and specialist counsel',
    detail:
      'AI-assisted contract drafting and clause preparation for attorney review, connected directly to the deal container and its approval record — a faster first draft, never an unreviewed final one.',
    outcomes: ['Clause drafts from transaction context', 'Human review before execution', 'Structured contract evidence'],
    nextStep: { label: 'Meet the Capital Strategist agent', href: '/agents#capital-strategist' }
  },
  {
    slug: 'escrow-arbitration',
    order: '03',
    title: 'Escrow & Arbitration',
    audience: 'Multi-party agreements with conditional capital release or dispute paths',
    detail:
      'Milestone escrow, release conditions, dispute evidence, arbitration workflow concepts, and settlement visibility for complex institutional deals — the next stage after three-way matching on the roadmap.',
    outcomes: ['Milestone release rules', 'Dispute record and evidence trail', 'Multi-sig approval planning'],
    nextStep: { label: 'See settlement rails', href: '/web3#settlement-rails' }
  },
  {
    slug: 'revenue-automation',
    order: '04',
    title: 'Revenue Automation',
    audience: 'Asset owners, platforms, funds, IP holders, and project operators',
    detail:
      'Waterfall logic, royalties, stakeholder distributions, subscription rules, and reporting surfaces connected to contract activity, with on-chain settlement hooks planned for a later stage.',
    outcomes: ['Transparent distribution rules', 'Stakeholder reporting', 'Future on-chain settlement hooks'],
    nextStep: { label: 'Talk to us about a pilot', href: '/about#briefing' }
  }
];

export type ErpModule = {
  title: string;
  category: string;
  description: string;
  primaryActions: string[];
};

export const erpModuleGroups: { category: string; modules: ErpModule[] }[] = [
  {
    category: 'Finance',
    modules: [
      {
        title: 'Accounting & Core Ledger',
        category: 'Finance',
        description: 'Triple-entry ledger planning, reconciliations, asset matching, and audit evidence per deal container.',
        primaryActions: ['Map ledger', 'Reconcile flow', 'Export evidence']
      },
      {
        title: 'Financial Management',
        category: 'Finance',
        description: 'Liquidity forecasts, capital allocation logic, spend rules, and treasury approval gates.',
        primaryActions: ['Forecast liquidity', 'Set spend rule', 'Approve transfer']
      }
    ]
  },
  {
    category: 'Legal & risk',
    modules: [
      {
        title: 'Legal & Lifecycle',
        category: 'Legal',
        description: 'Contract configuration, signature coordination, arbitration paths, and secure evidence vaults.',
        primaryActions: ['Draft clauses', 'Request signature', 'Open dispute']
      },
      {
        title: 'Insurance & Claims',
        category: 'Risk',
        description: 'Policy registries, risk logs, coverage checks, and parametric claim workflow concepts for asset-heavy sectors.',
        primaryActions: ['Review policy', 'Log claim', 'Track risk']
      },
      {
        title: 'Regulatory Status',
        category: 'Regtech',
        description: 'KYC/AML status, Travel Rule readiness, FSCA evidence trails, and cross-jurisdiction monitoring.',
        primaryActions: ['View status', 'Resolve alert', 'Export report']
      }
    ]
  },
  {
    category: 'Investments & assets',
    modules: [
      {
        title: 'Investment Management',
        category: 'Investments',
        description: 'Portfolio construction, allocation controls, on-chain settlement preparation, and compliance tracking.',
        primaryActions: ['Set allocation', 'Review risk', 'Approve trade']
      },
      {
        title: 'Asset Management Gateway',
        category: 'Assets',
        description: 'Tokenized asset oversight, custody controls, and future rebalancing surfaces for institutional operators.',
        primaryActions: ['Monitor assets', 'Rebalance strategy', 'Approve custody']
      },
      {
        title: 'Smart Contract Deployment Workspace',
        category: 'Contracts',
        description: 'Sandbox deployment cockpit for multi-sig parameters, gas planning, and compliance gating before production.',
        primaryActions: ['Configure deploy', 'Validate compliance', 'Launch contract']
      }
    ]
  },
  {
    category: 'People & reporting',
    modules: [
      {
        title: 'Human Resources',
        category: 'People',
        description: 'Talent workflows, tokenized payroll concepts, permissioning, and approval trails for project teams.',
        primaryActions: ['Create profile', 'Assign role', 'Review payroll']
      },
      {
        title: 'Automated Reporting',
        category: 'Reporting',
        description: 'Scheduled board packs, investor updates, regulatory summaries, and operator dashboards from container data.',
        primaryActions: ['Schedule pack', 'View history', 'Share update']
      },
      {
        title: 'Document Manager',
        category: 'Operations',
        description: 'Contracts, diligence, governance artifacts, access policies, and evidence exports in one secure workspace.',
        primaryActions: ['Upload file', 'Manage access', 'Request signature']
      },
      {
        title: 'Decision Support',
        category: 'Strategy',
        description: 'Scenario scoring, board votes, approval queues, and explainable recommendations for human decision-makers.',
        primaryActions: ['Run scenario', 'Score options', 'Approve decision']
      }
    ]
  }
];

export const sectorBlueprints: { sector: string; blurb: string }[] = [
  { sector: 'Mining & energy', blurb: 'Royalty splits, environmental evidence, and cross-border settlement.' },
  { sector: 'Agriculture & wine', blurb: 'Harvest-linked escrow, provenance records, export compliance.' },
  { sector: 'Commercial real estate', blurb: 'Lease cash-flow reporting, title evidence, staged settlement.' },
  { sector: 'Private equity', blurb: 'Capital call automation, LP reporting, waterfall distributions.' },
  { sector: 'Investment banking', blurb: 'Deal room workflows, syndication records, diligence evidence.' },
  { sector: 'Art & culture', blurb: 'Provenance checks, auction escrow, collector permissions.' },
  { sector: 'Education', blurb: 'Endowment governance, grant milestones, institutional reporting.' }
];

export const legacyVsAlethia: [string, string][] = [
  ['5–7 disconnected vendors', 'One permissioned Deal Container'],
  ['Manual drafting and retrospective audit trails', 'AI-prepared drafts with live evidence capture'],
  ['Siloed KYC/AML checks per party', 'Continuous regtech status inside the chamber'],
  ['T+2 to T+5 settlement friction', 'Escrow logic and on-chain settlement paths']
];
