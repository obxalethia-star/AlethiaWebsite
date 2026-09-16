export type BlogBlock = { type: 'p'; text: string } | { type: 'h2'; text: string } | { type: 'list'; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-three-way-matching-first',
    title: 'Why we started with three-way matching, not the whole chamber',
    dek: 'The chamber has a lot to prove eventually. We picked the one workflow a CFO can watch happen in real time.',
    date: '2026-02-11',
    readingTime: '6 min read',
    blocks: [
      {
        type: 'p',
        text: 'Every institutional software pitch eventually says some version of "we replace fragmented, manual processes with a single governed system." It is true often enough to be a cliché, and vague enough to mean nothing on its own. We built the smart contract chamber to eventually do a great deal — deal containers, escrow, an agent mesh, a full ERP surface. But none of that is what we shipped first, on purpose.'
      },
      {
        type: 'p',
        text: 'We shipped three-way matching: the check a finance team runs before paying a vendor invoice, comparing it against the purchase order that authorized the spend and the goods receipt confirming delivery. It is unglamorous. It is also the one workflow where a CFO does not need us to explain what "chain-attested evidence" means before they can tell whether the product works.'
      },
      { type: 'h2', text: 'The cost nobody puts in the pitch deck' },
      {
        type: 'p',
        text: 'At most mid-sized institutions, three-way matching still runs through email threads, spreadsheets, and a queue of PDFs waiting on someone in finance. It typically takes one to three weeks per invoice batch, and the manual review time runs to roughly R6,000 an hour once you account for the reviewer’s loaded cost. Settlement then lags a further two to five business days behind approval. None of that friction is a technology limitation in the interesting sense — it is queueing, re-keying, and waiting on the next person to open their inbox.'
      },
      {
        type: 'p',
        text: 'On the chamber, the same reconciliation is a smart contract comparing three documents’ quantities and prices the moment the third one arrives. When they agree, payment releases immediately. When they do not — a shortfall on the goods receipt, a price that drifted from the purchase order — the contract holds the cash and raises a flagged exception instead of quietly paying out and hoping someone notices later.'
      },
      { type: 'h2', text: 'Why this, and not the more ambitious thing' },
      {
        type: 'p',
        text: 'Deal containers, milestone escrow, and the agent mesh are all real parts of the roadmap. But they are also the kind of abstraction that is easy to describe and hard to verify from a demo. "A permissioned digital chamber for institutional deal execution" is a sentence a CFO nods along to and forgets by lunch. A live walkthrough where a mismatched delivery gets caught before cash moves is something they remember, because it is something they already have a broken version of.'
      },
      {
        type: 'p',
        text: 'Starting narrow also forces honesty about what is real. It would be easy to build a slide with twelve ERP modules and call the whole thing an MVP. It is much harder — and more useful to a prospective customer — to point at one workflow and say: this part is live, this part settles on-chain today, and everything past it is roadmap, labeled as roadmap.'
      },
      { type: 'h2', text: 'What comes after the proof' },
      {
        type: 'p',
        text: 'Three-way matching is deliberately the first rung, not the whole ladder. The same chamber logic extends naturally to milestone escrow — release conditions instead of match conditions — and from there to the deal container model that holds an entire transaction’s documents, approvals, and evidence. We are building toward that. We are just not asking anyone to take our word for it before they have seen the first piece work.'
      }
    ]
  },
  {
    slug: 'fsca-fsp-casp-licensing-path',
    title: 'The FSCA path: what an FSP and CASP licence actually requires',
    dek: 'On-chain settlement in South Africa means two licences, not one, and a timeline measured in years, not quarters.',
    date: '2026-03-04',
    readingTime: '7 min read',
    blocks: [
      {
        type: 'p',
        text: 'We say "FSP and CASP by 2030" often enough on this site that it is worth explaining what those two licences actually are, why we need both, and why the date is 2030 rather than next year.'
      },
      { type: 'h2', text: 'Two different regulators’-eye views of the same business' },
      {
        type: 'p',
        text: 'The Financial Sector Conduct Authority (FSCA) is South Africa’s market conduct regulator. An FSP licence — Financial Services Provider — authorizes a business to provide financial services or advice under the Financial Advisory and Intermediary Services Act. It is the licence that governs how we can talk to institutional customers about capital structuring, escrow terms, and settlement products without straying into unlicensed advice.'
      },
      {
        type: 'p',
        text: 'A CASP licence — Crypto Asset Service Provider — is newer, and covers a different question: not what you say about a financial product, but what you do with a crypto asset on someone else’s behalf. Custody, exchange, and transfer of crypto assets all fall under this category. Since the chamber’s settlement rails and the planned Alethia Coin both involve holding and moving crypto assets for institutional counterparties, CASP registration is not optional — it is the licence that makes settlement legal at all, not just advisable.'
      },
      { type: 'h2', text: 'Why neither licence exists yet' },
      {
        type: 'p',
        text: 'Both licences require a functioning, auditable business behind the application — documented processes, fit-and-proper checks on key individuals, capital adequacy evidence, and in CASP’s case, demonstrable custody and security controls. You do not get a FSP or CASP licence for an idea; you get it for an operation the regulator can inspect. That is precisely why the roadmap puts licensing after the MVP and deal container stages, not before them: the chamber needs a real operating history before an application is credible.'
      },
      { type: 'h2', text: 'What we are doing in the meantime' },
      {
        type: 'list',
        items: [
          'Building three-way matching and the deal container model on testnet and in pilot use, generating the operating evidence a licence application needs',
          'Designing custody and governance controls (multi-sig, hardware-key signing, human approval gates) to the standard CASP applicants are expected to meet, not the minimum the current MVP requires',
          'Keeping every settlement claim on this site scoped to "testnet" or "sandbox" until it is genuinely production and licensed',
          'Engaging South African regulatory counsel early rather than treating licensing as a late-stage formality'
        ]
      },
      {
        type: 'p',
        text: 'None of this is a promise that 2030 is guaranteed — regulatory timelines are, definitionally, not ours to control. It is the honest version of the plan: build the operating history first, apply once there is something real to inspect, and say so clearly everywhere else on this site in the meantime.'
      }
    ]
  },
  {
    slug: 'why-asset-heavy-sectors-stall',
    title: 'Why asset-heavy sectors stall — and what actually unblocks them',
    dek: 'Mining, agriculture, and real estate deals do not fail for lack of capital. They fail for lack of a shared record everyone trusts.',
    date: '2026-03-22',
    readingTime: '6 min read',
    blocks: [
      {
        type: 'p',
        text: 'Capital-intensive sectors — mining, agriculture, commercial real estate, project finance — share a pattern that looks like a funding problem but is usually an administration problem. The capital exists. What stalls the deal is getting five or six parties who do not fully trust each other to agree on a single, current version of the facts.'
      },
      { type: 'h2', text: 'The five-to-seven-vendor problem' },
      {
        type: 'p',
        text: 'A mid-sized mining finance deal routinely touches a law firm for contracts, a separate escrow agent for conditional capital release, an auditor for compliance evidence, a data room vendor for diligence documents, a bank for settlement, and often a specialist consultant for environmental or regulatory sign-off. Each of these keeps its own records. None of them is wrong to. But every handoff between them is a place where a document goes stale, a signature gets chased by email, or someone re-keys a number that was already correct three systems ago.'
      },
      {
        type: 'p',
        text: 'None of these vendors is the bottleneck individually. The bottleneck is the seams between them — the fact that "current status" is a question you have to ask six different people to answer, and by the time you have asked all six, the answer has changed again.'
      },
      { type: 'h2', text: 'Why asset-heavy sectors feel this more than most' },
      {
        type: 'p',
        text: 'A software company’s cap table has a handful of stakeholders and largely digital assets. A mining project has physical collateral, environmental obligations, offtake agreements, royalty structures, and a capital stack that can include equity, debt, and government participation simultaneously — each with its own reporting cadence and its own idea of what "done" means for a milestone. Agriculture adds a harvest calendar that does not negotiate with anyone’s deal timeline. Real estate adds title chains that predate most of the parties in the room. The administrative surface area is simply larger, and every additional party is another place a shared fact can drift out of sync.'
      },
      { type: 'h2', text: 'What actually unblocks it' },
      {
        type: 'p',
        text: 'Not more capital, and not another point solution for one part of the workflow. What unblocks these deals is one governed record that every permissioned party reads from and writes to, with approvals, evidence, and milestones tracked in the same place they happened — so "current status" stops being a question and starts being a page. That is the specific bet behind the deal container model: pre-built logic for the sectors where this friction is worst, rather than a generic workspace that treats a mining royalty split the same way it treats a SaaS contract renewal.'
      },
      {
        type: 'p',
        text: 'Three-way matching is the narrow, provable version of this idea. The deal container is the general one. Both start from the same premise: the parties were never short on capital or intent. They were short on a record they could all trust at the same time.'
      }
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
