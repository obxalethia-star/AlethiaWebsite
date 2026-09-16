export type RoadmapStage = {
  stage: string;
  title: string;
  detail: string;
  status: 'live' | 'next' | 'later' | 'horizon';
};

export const roadmap: RoadmapStage[] = [
  {
    stage: 'Now',
    title: 'Three-way matching for purchase orders',
    detail: 'The MVP: purchase order, goods receipt, and vendor invoice reconciled automatically and settled on-chain.',
    status: 'live'
  },
  {
    stage: 'Next',
    title: 'Deal containers, milestone escrow, evidence vaults',
    detail: 'The permissioned chamber widens beyond matching into full transaction lifecycle support.',
    status: 'next'
  },
  {
    stage: 'Then',
    title: 'The five-agent mesh and digital board rooms',
    detail: 'Assistive agents prepare work across legal, risk, settlement, reporting, and governance.',
    status: 'later'
  },
  {
    stage: 'Then',
    title: 'The full ERP module suite',
    detail: 'Accounting, HR, investment management, insurance, and reporting modules connect to the chamber record.',
    status: 'later'
  },
  {
    stage: 'Horizon',
    title: 'Alethia Coin settlement, FSP + CASP licence by 2030',
    detail: 'Regulated on-chain settlement once FSCA registration is in place.',
    status: 'horizon'
  }
];

export const licensingRoadmap: { year: string; milestone: string }[] = [
  { year: '2026–27', milestone: 'MVP validation: three-way matching live with pilot institutions in South Africa.' },
  { year: '2027–28', milestone: 'FSP application prepared alongside deal container and escrow rollout.' },
  { year: '2028–29', milestone: 'CASP registration process begins as settlement rails move toward production.' },
  { year: '2029–30', milestone: 'Target: FSP and CASP licences in place, Alethia Coin settlement enabled under FSCA oversight.' }
];

export const sandboxMetrics: { label: string; value: string }[] = [
  { label: 'Testnet demo target', value: '$12.4B simulated flow' },
  { label: 'Institution prospects mapped', value: '150' },
  { label: 'MVP agent mesh', value: '5 agents' },
  { label: 'Licence target', value: 'FSP + CASP by 2030' }
];
