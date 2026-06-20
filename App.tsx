'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Diamond,
  GraduationCap,
  Gavel,
  Landmark,
  Layers3,
  LineChart,
  Lock,
  Pickaxe,
  ShieldCheck,
  Sparkles,
  Wallet,
  Wheat
} from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CapitalDeploymentChart, SectorAllocationChart } from './components/DashboardCharts';
import { InteractionProvider } from './components/interaction/InteractionProvider';
import { LiquidScene } from './components/scene/LiquidScene';
import { MagneticCard } from './components/ui/MagneticCard';
import { ParallaxLayer } from './components/ui/ParallaxLayer';
import { AnimatedHeading } from './components/ui/AnimatedHeading';
import { SiteHeader } from './components/SiteHeader';
import { generateDealSimulation } from './services/geminiService';
import { aiAgents } from './data/aiAgents';
import { activeContracts, contractTemplates, deploymentHighlights } from './data/contractManager';
import { enterpriseIntegrations, enterpriseModules } from './data/enterpriseModules';
import { industryCoverage, infrastructureFeatures } from './data/infrastructureFeatures';
import { Industry, SimulationResult } from './types';
import { activateAgentForIndustry, AgentProfile } from './services/agentRouter';

gsap.registerPlugin(ScrollTrigger);

const foundationCards = [
  {
    title: 'Digital Contract Chamber',
    description: 'Permissioned deal rooms for documents, approvals, signatures, escrow logic, and audit history.',
    icon: <Layers3 className="h-5 w-5 text-violet-300" />
  },
  {
    title: 'Decentralized Settlement',
    description: 'Milestone escrows, revenue waterfalls, and future cross-chain settlement routes for institutional assets.',
    icon: <LineChart className="h-5 w-5 text-emerald-300" />
  },
  {
    title: 'Agentic ERP Layer',
    description: 'A five-agent operating mesh that prepares workflows while human approvals stay in control.',
    icon: <Bot className="h-5 w-5 text-violet-300" />
  }
];

const trustSignals = [
  { label: 'Pre-seed MVP', icon: <Sparkles className="h-4 w-4 text-violet-300" /> },
  { label: 'Human approval gates', icon: <ShieldCheck className="h-4 w-4 text-emerald-300" /> },
  { label: 'MEASA + Sub-Saharan focus', icon: <Landmark className="h-4 w-4 text-zinc-300" /> }
];

const heroStats = [
  { label: 'Stage', value: 'Pre-seed MVP' },
  { label: 'Testnet demo target', value: '$12.4B simulated flow' },
  { label: 'Institution targets', value: '150 mapped prospects' },
  { label: 'License target', value: 'FSP + CASP 2030' }
];

const chamberLayers = [
  { label: 'Deal containers', icon: <Layers3 className="h-4 w-4 text-violet-300" /> },
  { label: 'Chain-attested logs', icon: <Lock className="h-4 w-4 text-emerald-300" /> },
  { label: 'Treasury controls', icon: <Wallet className="h-4 w-4 text-zinc-300" /> }
];

const mvpFocus = [
  'Legal + contract layer',
  'Finance + settlement',
  'AI agent mesh',
  'ERP intelligence modules',
  'Regtech evidence trails',
  'Hardware wallet concepts'
];

function App() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(Industry.FINANCE);
  const [dealDescription, setDealDescription] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [simulationError, setSimulationError] = useState<string | null>(null);
  const [activeAgent, setActiveAgent] = useState<AgentProfile | null>(null);

  const hasApiKey = Boolean(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

  const industries = [
    { id: Industry.ART, icon: <Diamond className="h-4 w-4" />, label: 'Art & Culture' },
    { id: Industry.FINANCE, icon: <Landmark className="h-4 w-4" />, label: 'Capital Markets' },
    { id: Industry.REAL_ESTATE, icon: <Gavel className="h-4 w-4" />, label: 'Real Estate' },
    { id: Industry.MINING, icon: <Pickaxe className="h-4 w-4" />, label: 'Mining' },
    { id: Industry.EDUCATION, icon: <GraduationCap className="h-4 w-4" />, label: 'Education' },
    { id: Industry.AGRICULTURE, icon: <Wheat className="h-4 w-4" />, label: 'Agriculture' }
  ];

  const quickPrompts = [
    {
      industry: Industry.MINING,
      label: 'Lithium Mine',
      prompt:
        'Model a lithium mine financing with institutional equity, milestone escrow, environmental evidence, and cross-border settlement requirements.'
    },
    {
      industry: Industry.REAL_ESTATE,
      label: 'Tokenized Tower',
      prompt:
        'Tokenize a commercial tower with lease cash-flow reporting, title evidence, investor permissions, and staged settlement.'
    },
    {
      industry: Industry.ART,
      label: 'Auction Escrow',
      prompt:
        'Structure an art auction escrow with provenance checks, AML review, collector permissions, and revenue split logic.'
    }
  ];

  const handleSimulation = async () => {
    if (!dealDescription.trim()) return;
    setIsSimulating(true);
    setSimulationResult(null);
    setSimulationError(null);
    setActiveAgent(activateAgentForIndustry(selectedIndustry));

    const start = Date.now();

    try {
      const result = await generateDealSimulation(dealDescription, selectedIndustry);
      const elapsed = Date.now() - start;
      const minDelay = 1200;

      if (elapsed < minDelay) {
        await new Promise((resolve) => setTimeout(resolve, minDelay - elapsed));
      }
      setSimulationResult(result);
    } catch (error) {
      console.error(error);
      setSimulationError('The sandbox planner could not complete this run. Try a shorter transaction brief.');
    } finally {
      setIsSimulating(false);
    }
  };

  useLayoutEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-fly',
        { y: 40, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.1, stagger: 0.15, ease: 'power3.out' }
      );

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const depth = Number(element.dataset.parallax ?? 20);
        gsap.to(element, {
          y: depth,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            scrub: true
          }
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <InteractionProvider>
      <div className="min-h-screen bg-black text-zinc-100 font-sans">
        <LiquidScene />
        <SiteHeader />
        <div ref={pageRef} className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.75),rgba(0,0,0,0.92)_34%,rgba(0,0,0,1))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

          <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-18 pt-12 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24 lg:pt-20">
            <div>
              <p className="hero-fly mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-violet-100">
                <Sparkles className="h-4 w-4" />
                OBXAlethia pre-seed MVP
              </p>
              <AnimatedHeading className="hero-fly max-w-4xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
                A digital contract chamber for institutional capital.
              </AnimatedHeading>
              <p className="hero-fly mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                OBXAlethia is building a Web3 agentic ERP where institutions can coordinate complex deal flow,
                contract execution, escrow, treasury controls, and compliance evidence from one permissioned workspace.
              </p>
              <div className="hero-fly mt-8 flex flex-wrap gap-4">
                <Link
                  href="/solutions"
                  className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
                >
                  Explore the chamber <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/web3"
                  className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-white"
                >
                  View Web3 stack
                </Link>
              </div>
            </div>

            <ParallaxLayer depth={16} className="relative">
              <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-violet-950/30 backdrop-blur-xl md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">MVP build map</p>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    In build
                  </span>
                </div>
                <div className="mt-6 grid gap-3">
                  {heroStats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-black/50 p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">{item.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 via-black/30 to-emerald-400/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Core thesis</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">
                    Bring legal, finance, settlement, and ERP operations into one secure chamber before scaling into
                    regulated commercial deployment.
                  </p>
                </div>
              </div>
            </ParallaxLayer>
          </section>

          <section className="relative mx-auto grid max-w-7xl gap-5 px-5 pb-16 md:grid-cols-3 md:px-8" data-parallax="24">
            {foundationCards.map((item) => (
              <MagneticCard key={item.title} className="group border-white/10 bg-zinc-950/65">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    {item.icon}
                  </span>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{item.description}</p>
              </MagneticCard>
            ))}
          </section>

          <section className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8">
            <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
              <MagneticCard className="group border-white/10 bg-zinc-950/70">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Capital intelligence</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Capital Utilisation</p>
                    <div className="mt-3 h-36 overflow-hidden">
                      <CapitalDeploymentChart />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/55 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Sector Allocation</p>
                    <div className="mt-3 h-36 overflow-hidden">
                      <SectorAllocationChart />
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-emerald-400/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">MVP access model</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">
                    Launch private workspaces, invite institutional stakeholders, and map permissions to on-chain roles
                    before any production capital movement.
                  </p>
                </div>
              </MagneticCard>

              <div className="rounded-3xl border border-white/10 bg-black/65 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Secure infrastructure</p>
                <div className="mt-5 grid gap-3">
                  {chamberLayers.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/75 p-3 text-sm text-zinc-200"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.04]">
                        {item.icon}
                      </span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto grid max-w-7xl gap-6 px-5 pb-20 lg:grid-cols-[1.1fr_0.9fr] md:px-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950/95 via-black to-violet-950/25 p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                <Sparkles className="h-4 w-4 text-violet-300" /> Deal simulation workspace
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white">Anticipatory planning engine</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                Feed a transaction brief into the sandbox and generate a structured plan for deal containers, escrow
                conditions, compliance evidence, and agent handoffs.
              </p>
              <div className="mt-6 grid gap-3 lg:grid-cols-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition ${selectedIndustry === industry.id
                        ? 'border-violet-400/60 bg-violet-400/10 text-white'
                        : 'border-white/10 bg-black/55 text-zinc-300 hover:border-emerald-300/40'
                      }`}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.04]">
                      {industry.icon}
                    </span>
                    {industry.label}
                  </button>
                ))}
              </div>
              <textarea
                value={dealDescription}
                onChange={(event) => setDealDescription(event.target.value)}
                placeholder="Describe the deal, capital structure, stakeholders, compliance checks, and settlement conditions..."
                className="mt-6 h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-violet-400/70"
              />
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs leading-5 text-zinc-600">
                  Prototype output for planning only. Human review and legal counsel remain required.
                </p>
                <button
                  onClick={handleSimulation}
                  disabled={isSimulating || !dealDescription}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${isSimulating || !dealDescription
                      ? 'bg-zinc-900 text-zinc-600'
                      : 'bg-violet-500 text-white shadow-lg shadow-violet-500/25 hover:bg-violet-400'
                    }`}
                >
                  {isSimulating ? 'Planning' : 'Run sandbox plan'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {quickPrompts.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setSelectedIndustry(item.industry);
                      setDealDescription(item.prompt);
                    }}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-400 transition hover:border-violet-400/40 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {simulationError && (
                <div className="mt-4 rounded-2xl border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
                  {simulationError}
                </div>
              )}
              {simulationResult && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-zinc-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Sandbox output</p>
                  <p className="mt-3 leading-6 text-zinc-200">{simulationResult.strategicInsight}</p>
                  <div className="mt-4 grid gap-2 text-xs text-zinc-400">
                    {simulationResult.complianceChecklist.map((step, index) => (
                      <div key={`${step}-${index}`} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" />
                        <span>
                          {index + 1}. {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeAgent && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-sm text-zinc-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Agent selected</p>
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                      Sandbox
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{activeAgent.name}</p>
                  <p className="mt-1 text-xs text-zinc-400">{activeAgent.role}</p>
                  <p className="mt-3 text-xs leading-5 text-zinc-300">{activeAgent.focus}</p>
                  <div className="mt-3 grid gap-2 text-[11px] text-zinc-500">
                    {activeAgent.runbook.map((step) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-black/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">MVP telemetry</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Execution roadmap</h2>
                <div className="mt-6 space-y-4">
                  {deploymentHighlights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-xs leading-5 text-zinc-400">{item.description}</p>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
                    <p className="text-sm font-semibold text-white">Funding ask</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-300">
                      The immediate pre-seed ask is the first-month allocation for MVP infrastructure, technical
                      standards guidance, and revenue model support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/70 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">Engine status</h3>
                  <span
                    className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${hasApiKey
                        ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200'
                        : 'border-violet-300/30 bg-violet-300/10 text-violet-200'
                      }`}
                  >
                    {hasApiKey ? 'LLM connected' : 'Local sandbox'}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-5 text-zinc-400">
                  {hasApiKey
                    ? 'Live structured outputs are enabled for sandbox planning.'
                    : 'The local planner is available without external AI credentials.'}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Sandbox contracts</p>
                <div className="mt-4 space-y-4">
                  {activeContracts.map((contract) => (
                    <div key={contract.name} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-white">{contract.name}</p>
                        <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                          {contract.status}
                        </span>
                      </div>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{contract.type}</p>
                      <p className="mt-2 text-xs text-zinc-400">Parties: {contract.parties.join(', ')}</p>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-900">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-300"
                          style={{ width: `${contract.progress}%` }}
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-zinc-600">
                        <span>{contract.deployedAt}</span>
                        <span>{contract.txHash}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8">
            <div className="rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">AI agents</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">Operational agent mesh</h2>
                </div>
                <Link href="/agents" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-white">
                  See agent page <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                The MVP agent layer is assistive by design: agents prepare, monitor, and route work, while institutions
                keep final authority through explicit approvals.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {aiAgents.map((agent) => (
                  <div key={agent.name} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                    <p className="text-sm font-semibold text-white">{agent.name}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{agent.focus}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{agent.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-zinc-500">
                      {agent.integrations.map((tool) => (
                        <span key={tool} className="rounded-full border border-white/10 px-2 py-1">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8">
            <div className="rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Enterprise modules</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">ERP intelligence workspace</h2>
                </div>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-200">
                  Planned modules
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                ERP is the familiar operating surface around the chamber: accounting, legal, finance, investment, risk,
                and reporting tools connected to the same permissioned transaction record.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {enterpriseModules.map((module) => (
                  <div key={module.title} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{module.title}</p>
                      <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        {module.category}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{module.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-zinc-500">
                      {module.primaryActions.map((action) => (
                        <span key={action} className="rounded-full border border-white/10 px-2 py-1">
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-zinc-500">
                {enterpriseIntegrations.map((integration) => (
                  <span key={integration} className="rounded-full border border-white/10 px-3 py-1">
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8">
            <div className="rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Institutional infrastructure</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">Capabilities being built into the MVP</h2>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  Pre-seed core
                </span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {infrastructureFeatures.map((feature) => (
                  <div key={feature.title} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                    <p className="text-sm font-semibold text-white">{feature.title}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-zinc-300">
                {industryCoverage.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-zinc-500"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-5 pb-24 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-3xl border border-white/10 bg-black/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Smart contract manager</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Deployment-ready templates</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {contractTemplates.map((template) => (
                    <div key={template.name} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">{template.name}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{template.category}</p>
                        </div>
                        <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                          {template.complexity}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                        <span className="rounded-full border border-white/10 px-2 py-1">Mode: {template.deployCost}</span>
                        <span className="rounded-full border border-white/10 px-2 py-1">Avg: {template.avgTime}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-zinc-500">
                        {template.compliance.map((requirement) => (
                          <span key={requirement} className="rounded-full border border-white/10 px-2 py-1">
                            {requirement}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-black/70 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Custody + governance</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">Unified operational cockpit</h2>
                  <div className="mt-6 space-y-4 text-sm text-zinc-300">
                    {[
                      {
                        label: 'Treasury & transparency',
                        detail: 'Stablecoin treasury controls, spend policies, and chain-aware reporting.'
                      },
                      {
                        label: 'Agents + workflows',
                        detail: 'Assistive agents prepare work across legal, finance, risk, and reporting modules.'
                      },
                      {
                        label: 'Compliant settlement',
                        detail: 'On-chain approvals, escrow releases, arbitration paths, and institutional controls.'
                      }
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                        <p className="mt-2 text-sm leading-6 text-zinc-300">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/70 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Integrated across verticals</p>
                  <div className="mt-6 grid gap-3 text-xs text-zinc-300">
                    {mvpFocus.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/70 p-3"
                      >
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="relative border-t border-white/10 py-12 text-center text-xs text-zinc-600">
            OBXAlethia - pre-seed Web3 agentic ERP and smart contract chamber.
          </footer>
        </div>
      </div>
    </InteractionProvider>
  );
}

export default App;
