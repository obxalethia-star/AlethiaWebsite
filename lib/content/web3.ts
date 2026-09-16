export type Pillar = {
  slug: string;
  title: string;
  status: 'MVP live' | 'Building next' | 'Roadmap';
  description: string;
};

export const pillars: Pillar[] = [
  {
    slug: 'smart-contract-chamber',
    title: 'Smart Contract Chamber',
    status: 'MVP live',
    description:
      'The core runtime for deal containers, execution states, permissions, signatures, escrow events, and evidence records. Three-way matching is the first workflow running on it.'
  },
  {
    slug: 'tokenization-engine',
    title: 'Tokenization Engine',
    status: 'Building next',
    description:
      'Asset record concepts for ownership, lifecycle events, fractionalization models, and future Alethia Coin utility flows.'
  },
  {
    slug: 'custody-governance',
    title: 'Custody & Governance',
    status: 'Building next',
    description:
      'Multi-sig planning, hardware wallet links, delegated signing policies, board resolutions, and human approval gates.'
  },
  {
    slug: 'settlement-rails',
    title: 'Settlement Rails',
    status: 'Building next',
    description:
      'Milestone escrow, programmable release criteria, cross-chain route planning, and event indexing for audit-ready flows.'
  }
];

export const guardrails: string[] = [
  'Use Web3 where it improves execution, auditability, and settlement clarity — not as decoration.',
  'Keep corporate users shielded from unnecessary crypto volatility.',
  'Preserve human authority for approvals, signatures, and governance.',
  'Build toward regulated deployment after sandbox and testnet validation.'
];

export const settlementWorkflows: string[] = [
  'Tokenized infrastructure and real-world asset programs',
  'Programmable escrow for conditional settlement',
  'Royalty and revenue-share distribution',
  'Institutional treasury approvals and reporting',
  'Chain-attested logs for governed decisions',
  'ERP data feeds for finance, legal, risk, and investors'
];

export const alethiaCoin = {
  status: 'Horizon — not yet live',
  description:
    'Alethia Coin is the planned settlement token for the chamber: a unit for instant, on-chain release once escrow conditions clear, denominated against South African rand for institutional users so day-to-day balances stay predictable. It launches after custody, governance, and settlement rails are proven in testnet — not before.',
  principles: [
    'No production issuance before FSP and CASP registration progress',
    'Settlement-first utility, not a speculative trading instrument',
    'Multi-asset support from day one: rand-referenced balances alongside other approved rails'
  ]
};

export const multiAssetSupport: string[] = [
  'South African rand-referenced settlement balances',
  'Major custody-grade digital assets for cross-border counterparties',
  'Tokenized real-world assets issued through the chamber',
  'Stablecoin treasury controls for institutional spend policies'
];
