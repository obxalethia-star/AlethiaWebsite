export const contractTemplates = [
  {
    name: "Deal Container Setup",
    category: "Core Chamber",
    complexity: "High",
    deployCost: "Sandbox",
    avgTime: "3-5 min",
    compliance: ["Permissions", "Counterparty Roles", "Evidence Vault"]
  },
  {
    name: "AI Contract Draft",
    category: "Legal Layer",
    complexity: "Medium",
    deployCost: "Sandbox",
    avgTime: "2-3 min",
    compliance: ["Clause Library", "Attorney Review", "Audit Trail"]
  },
  {
    name: "Milestone Escrow",
    category: "Settlement",
    complexity: "Medium",
    deployCost: "Sandbox",
    avgTime: "2-4 min",
    compliance: ["Release Rules", "Dispute Path", "Multi-Sig"]
  },
  {
    name: "Revenue Waterfall",
    category: "Finance",
    complexity: "High",
    deployCost: "Sandbox",
    avgTime: "4-6 min",
    compliance: ["Royalty Logic", "Stakeholder Ledger", "Reports"]
  },
  {
    name: "Board Resolution Log",
    category: "Governance",
    complexity: "Low",
    deployCost: "Sandbox",
    avgTime: "1-2 min",
    compliance: ["Vote Record", "Signatures", "Chain Attestation"]
  },
  {
    name: "Tokenized Asset Record",
    category: "Web3 Registry",
    complexity: "Medium",
    deployCost: "Sandbox",
    avgTime: "2-3 min",
    compliance: ["Ownership", "Lifecycle Events", "KYC/AML"]
  }
];

export const activeContracts = [
  {
    name: "Mining Rights Finance Demo",
    type: "Mining & Energy",
    status: "Prototype",
    parties: ["Sponsor", "Operator", "Counsel"],
    progress: 75,
    deployedAt: "MVP track",
    txHash: "0xSANDBOX742d35"
  },
  {
    name: "Agricultural Futures Demo",
    type: "Agriculture",
    status: "Designing",
    parties: ["Producer", "Buyer", "Escrow Admin"],
    progress: 45,
    deployedAt: "Testnet next",
    txHash: "0xSANDBOX8ba1f1"
  },
  {
    name: "Tokenized Artwork Escrow",
    type: "Art & Culture",
    status: "Prototype",
    parties: ["Collector", "Gallery", "Custodian"],
    progress: 90,
    deployedAt: "Demo-ready",
    txHash: "0xSANDBOX1c8aff"
  }
];

export const deploymentHighlights = [
  {
    label: "Month 1",
    value: "MVP initialization",
    description: "Token mapping, sandbox setup, and UI prototype hardening"
  },
  {
    label: "Months 2-3",
    value: "Core chamber",
    description: "Smart contract chamber, basic multi-sig links, and escrow flows"
  },
  {
    label: "Months 4-9",
    value: "Version 1 build",
    description: "Commercial modules, audits, node infrastructure, and compliance frameworks"
  }
];
