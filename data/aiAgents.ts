export const aiAgents = [
  {
    name: "Capital Strategist",
    description:
      "Drafts capital structures, covenant logic, and board-ready summaries for complex institutional transactions.",
    integrations: ["Deal Container", "Scenario Model", "Approval Queue"],
    focus: "Capital structure and covenant design"
  },
  {
    name: "Risk Sentinel",
    description:
      "Maintains a continuous view of KYC, AML, jurisdictional checks, counterparty exposure, and audit evidence.",
    integrations: ["KYC/AML", "Evidence Vault", "Risk Register"],
    focus: "Regtech monitoring"
  },
  {
    name: "Settlement Orchestrator",
    description:
      "Maps escrow milestones, multi-sig approvals, release conditions, and cross-chain settlement steps.",
    integrations: ["Escrow Template", "Multi-Sig", "Event Indexer"],
    focus: "Escrow and settlement logic"
  },
  {
    name: "Insights Compiler",
    description:
      "Turns deal activity, treasury movement, and module status into investor, board, and operator reporting.",
    integrations: ["ERP Workspace", "Dashboard", "Board Pack"],
    focus: "Reporting and operating intelligence"
  },
  {
    name: "Boardroom Steward",
    description:
      "Keeps human approval gates explicit by preparing resolutions, vote records, and decision timelines.",
    integrations: ["Digital Board Room", "Resolution Log", "Signature Flow"],
    focus: "Human-in-the-loop governance"
  }
];
