import {
  Zap,
  BookOpen,
  Video,
  FileText,
  Users,
  Shield,
  Code,
  ArrowRight,
  Github,
  GraduationCap,
  Globe,
  Sparkles,
  CheckCircle,
  ChevronRight,
  Monitor,
  Palette,
  Network,
  GitFork,
  Settings,
  Database,
  Layers,
  Terminal,
} from "lucide-react";
import { LandingThemeControls } from "@/components/landing-theme-controls";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TechBar />
      <WhatYouGet />
      <ForWho />
      <HowItWorks />
      <PlatformStats />
      <ForkAndDeploy />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────── Header ─────────────────────────────── */

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <Zap className="h-4 w-4 text-background" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              pleb.school
            </span>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#for-who"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              For Who
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="#fork"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Fork & Deploy
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <LandingThemeControls />
            <a
              href="https://github.com/AustinKelsay/pleb.school"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground md:inline-flex"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://demo.pleb.school"
              className="inline-flex h-9 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────── Hero ─────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36">
      {/* Subtle grid */}
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span className="inline-flex items-center gap-1.5 border-r border-border pr-2.5 text-xs font-semibold uppercase tracking-wider text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              Early Access
            </span>
            <span className="text-muted-foreground">
              Configurable open education stack
            </span>
          </div>

          {/* Headline — speaks to the operator, not the learner */}
          <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Run your own{" "}
            <span className="gradient-text">Nostr-native</span>{" "}
            course platform
          </h1>

          {/* Sub — the product pitch */}
          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            pleb.school is a forkable, configuration-driven education stack.
            Swap branding, themes, and relays — then deploy a fully branded
            learning hub with Lightning payments and Nostr identity for your
            community.
          </p>

          {/* CTAs — fork first, demo second */}
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="https://github.com/AustinKelsay/pleb.school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground px-8 text-base font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
            >
              <GitFork className="h-5 w-5" />
              Fork on GitHub
            </a>
            <a
              href="https://demo.pleb.school"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 text-base font-semibold text-foreground transition-colors hover:bg-accent sm:w-auto"
            >
              <Monitor className="h-5 w-5" />
              View Live Demo
            </a>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-up-delay-4 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground sm:gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              MIT licensed
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-muted-foreground" />
              Lightning-native payments
            </div>
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              JSON-configurable
            </div>
          </div>
        </div>

        {/* Hero visual — mock of the platform */}
        <div className="animate-fade-up-delay-4 glow relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card sm:mt-20">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-muted" />
              <div className="h-3 w-3 rounded-full bg-muted" />
              <div className="h-3 w-3 rounded-full bg-muted" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto max-w-sm rounded-md bg-background px-3 py-1.5 text-center text-xs text-muted-foreground">
                your-brand.com
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Mock "your instance" hero */}
            <div className="mb-6 space-y-2 text-center">
              <p className="text-xs font-medium text-muted-foreground">
                Your brand, your content, your domain
              </p>
              <h3 className="text-lg font-bold sm:text-xl">
                Launch your learning hub
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <MockContentCard
                title="Getting Started with Bitcoin"
                type="Course"
                detail="12 lessons"
                icon={<GraduationCap className="h-5 w-5" />}
              />
              <MockContentCard
                title="Lightning Network Workshop"
                type="Video Series"
                detail="8 episodes"
                icon={<Video className="h-5 w-5" />}
              />
              <MockContentCard
                title="Nostr Protocol Reference"
                type="Document"
                detail="15 chapters"
                icon={<FileText className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockContentCard({
  title,
  type,
  detail,
  icon,
}: {
  title: string;
  type: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group rounded-xl border border-border bg-background p-4 transition-colors hover:bg-accent/50 sm:p-5">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
        {icon}
      </div>
      <p className="mb-1 text-xs font-medium text-muted-foreground">{type}</p>
      <h4 className="mb-3 text-sm font-semibold leading-snug">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{detail}</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}

/* ───────────────────────── Tech Bar ───────────────────────── */

function TechBar() {
  const items = [
    "Next.js 15",
    "React 19",
    "Nostr Protocol",
    "Lightning / NIP-57",
    "Prisma ORM",
    "Tailwind CSS 4",
    "67+ Themes",
    "TypeScript",
  ];

  return (
    <section className="border-y border-border py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
            Built with
          </span>
          {items.map((tech) => (
            <span key={tech} className="whitespace-nowrap font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── What You Get ─────────────────────────── */

function WhatYouGet() {
  const features = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Courses, Videos & Docs",
      description:
        "Three content types out of the box. Structured multi-lesson courses, video embeds, and long-form markdown documents — all rendered from Nostr events.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning Payments",
      description:
        "Monetize with NIP-57 zaps. Learners pay in sats directly to creators — no payment processor, no custodian, no platform fees.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Nostr Identity & Auth",
      description:
        "Multi-provider authentication: NIP-07 browser extension, email magic links, GitHub OAuth, or anonymous browsing. Users own their identity.",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "67+ Themes & Full Branding",
      description:
        "Complete theme system with OKLCh color science. 20+ fonts, dark/light modes, and every color is a CSS variable you control.",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Configuration Over Code",
      description:
        "Customize copy, content layout, auth providers, payment presets, relays, and admin roles — all through JSON files, no code changes needed.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Decentralized Content",
      description:
        "Content lives on Nostr relays, not locked in your database. Portable, censorship-resistant, and discoverable across the Nostr ecosystem.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What&apos;s Included
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A production-ready education platform
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Everything you need to run a branded learning hub for your
            community, plugged into Nostr and Lightning from day one.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-accent/30 sm:p-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── For Who ────────────────────────── */

function ForWho() {
  return (
    <section id="for-who" className="border-y border-border bg-card/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Built For
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Creators, communities & builders
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Whether you&apos;re an educator launching a course catalog, a community
            running a knowledge base, or a developer building on open protocols.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <AudienceCard
            icon={<GitFork className="h-6 w-6" />}
            title="For creators & communities"
            description="Launch a white-label academy on your domain with your branding, pricing, and content model. Define how courses, documents, and videos are presented using JSON configs."
            items={[
              "Your domain, your brand, your audience",
              "Set your own pricing in sats",
              "Publish directly from Nostr",
              "Full admin & moderator controls",
            ]}
          />
          <AudienceCard
            icon={<Users className="h-6 w-6" />}
            title="For your audience"
            description="Give learners a single place to watch talks, follow structured courses, and read long-form content — with progress tracking, Lightning tips, and Nostr identity baked in."
            items={[
              "Multi-format learning experience",
              "Sign in with Nostr, email, or GitHub",
              "Track progress across courses",
              "No mandatory accounts or credit cards",
            ]}
          />
          <AudienceCard
            icon={<Code className="h-6 w-6" />}
            title="For platform builders"
            description="Start from a production-ready Next.js 15 stack wired to Prisma, Nostr relays, and Lightning zaps. Swap everything by editing JSON — no need to rewrite business logic."
            items={[
              "Next.js 15, React 19, TypeScript",
              "Prisma ORM + PostgreSQL",
              "Nostr event parsing built-in",
              "MIT licensed — do what you want",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  icon,
  title,
  description,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ────────────────────────── How It Works ────────────────────────── */

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Fork & clone",
      description:
        "Create your own repository from the pleb.school template. Keep upstream in a branch if you want to pull future updates.",
      icon: <GitFork className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Configure branding & relays",
      description:
        "Update JSON configs for copy, theme, content layout, auth providers, payment presets, and Nostr relay sets. No code changes.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Deploy your instance",
      description:
        "Point environment variables at your PostgreSQL and Nostr relays. Deploy to Vercel, Fly.io, or self-host with Docker.",
      icon: <Terminal className="h-6 w-6" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Get Started
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to your own platform
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            No lengthy setup. Fork, configure JSON, deploy. You&apos;re live.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="absolute top-14 right-0 hidden h-px w-6 translate-x-full bg-border lg:block" />
              )}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <span className="mb-4 block text-3xl font-bold text-muted-foreground/20">
                  {step.step}
                </span>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Platform Stats ────────────────────────── */

function PlatformStats() {
  const stats = [
    {
      value: "Courses · Videos · Docs",
      label: "Multi-format content types",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      value: "Nostr-native",
      label: "Feeds, auth & content discovery",
      icon: <Network className="h-6 w-6" />,
    },
    {
      value: "Lightning-first",
      label: "Zaps, tips & paid content",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      value: "Self-hosted & FOSS",
      label: "MIT-licensed, own your data",
      icon: <Code className="h-6 w-6" />,
    },
  ];

  return (
    <section className="border-y border-border bg-card/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the Bitcoin ecosystem
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A production-grade stack that takes the open-source ethos seriously.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center transition-colors hover:bg-accent/30"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground">
                {stat.icon}
              </div>
              <h3 className="text-lg font-bold">{stat.value}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture highlight */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-background p-8 text-center sm:p-10">
          <div className="mb-6 flex justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Database className="h-6 w-6 text-foreground" />
            </div>
            <div className="flex items-center text-muted-foreground">+</div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
              <Network className="h-6 w-6 text-foreground" />
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold">Hybrid data architecture</h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your database stores the metadata that ties everything together —
            pricing, progress, and access control. But all the content, zaps,
            interactions, and user identities live on Nostr relays. You get the
            structure of a traditional app with the portability and
            censorship-resistance of open protocols.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Fork & Deploy ────────────────────────── */

function ForkAndDeploy() {
  return (
    <section id="fork" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Make It Yours
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Fork the repo, customize JSON, ship your platform
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              pleb.school is designed to be forked. The reference deployment runs
              on Vercel, but the stack stays portable. Point it at your own
              relays and database, and ship a fully branded education experience
              without rewriting the core architecture.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "7 JSON config files control all branding, content, auth, payments, and relays",
                "67+ complete theme presets with 20+ font options",
                "White-label ready — your domain, your brand, zero pleb.school references",
                "Deploy to Vercel, Fly.io, or self-host with the included Dockerfile",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/AustinKelsay/pleb.school"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
              <a
                href="https://github.com/AustinKelsay/pleb.school/blob/main/config/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <FileText className="h-4 w-4" />
                Config Documentation
              </a>
            </div>
          </div>

          {/* Config preview */}
          <div className="rounded-2xl border border-border bg-card p-1">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-muted" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">
                config/copy.json
              </span>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-relaxed sm:p-6 sm:text-sm">
              <code>
                <JsonLine indent={0} bracket="{" />
                <JsonKey indent={1} k="site" bracket="{" />
                <JsonString indent={2} k="title" v="your-academy.com" />
                <JsonString indent={2} k="brandName" v="Your Academy" />
                <JsonString indent={2} k="description" v="Your education platform" last />
                <JsonLine indent={1} bracket="}," />
                <JsonKey indent={1} k="homepage" bracket="{" />
                <JsonKey indent={2} k="hero" bracket="{" />
                <JsonString indent={3} k="badge" v="Your tagline here" />
                <JsonKey indent={3} k="title" bracket="{" />
                <JsonString indent={4} k="line1" v="Your headline" />
                <JsonString indent={4} k="line2" v="Built for" />
                <JsonArray indent={4} k="animatedWords" values={["Bitcoin", "Nostr"]} last />
                <JsonLine indent={3} bracket="}," />
                <JsonKey indent={3} k="buttons" bracket="{" />
                <JsonString indent={4} k="startLearning" v="Start Learning" last />
                <JsonLine indent={3} bracket="}" last />
                <JsonLine indent={2} bracket="}" last />
                <JsonLine indent={1} bracket="}" last />
                <JsonLine indent={0} bracket="}" last />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Final CTA ────────────────────────── */

function FinalCTA() {
  return (
    <section className="border-t border-border bg-card/50 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to run your own instance?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg lg:text-xl">
            Use the demo as a sandbox, then fork the repo, customize the configs,
            and ship a Nostr-native academy that lives on your domain.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="https://github.com/AustinKelsay/pleb.school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-foreground px-10 text-base font-semibold text-background transition-opacity hover:opacity-90 sm:h-14 sm:w-auto sm:text-lg"
            >
              <GitFork className="h-5 w-5" />
              Fork & Deploy
            </a>
            <a
              href="https://demo.pleb.school"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-10 text-base font-semibold text-foreground transition-colors hover:bg-accent sm:h-14 sm:w-auto sm:text-lg"
            >
              <Monitor className="h-5 w-5" />
              Explore the Demo
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            MIT Licensed &middot; Free forever &middot; Community driven
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── Footer ─────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
                <Zap className="h-3.5 w-3.5 text-background" />
              </div>
              <span className="text-base font-bold">pleb.school</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Open-source education stack for creators and communities.
              Nostr-native identity, Lightning payments, and 67+ themes.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Platform</h4>
            <ul className="space-y-2">
              {[
                { label: "Live Demo", href: "https://demo.pleb.school" },
                {
                  label: "Content Library",
                  href: "https://demo.pleb.school/content",
                },
                { label: "About", href: "https://demo.pleb.school/about" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Developers</h4>
            <ul className="space-y-2">
              {[
                {
                  label: "GitHub Repo",
                  href: "https://github.com/AustinKelsay/pleb.school",
                },
                {
                  label: "Config Documentation",
                  href: "https://github.com/AustinKelsay/pleb.school/blob/main/config/README.md",
                },
                {
                  label: "Fork Template",
                  href: "https://github.com/AustinKelsay/pleb.school/fork",
                },
                {
                  label: "MIT License",
                  href: "https://github.com/AustinKelsay/pleb.school/blob/main/LICENSE",
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Stack</h4>
            <ul className="space-y-2">
              {[
                "Next.js 15 + React 19",
                "PostgreSQL + Prisma",
                "Nostr Protocol",
                "Lightning / NIP-57",
                "Tailwind CSS 4",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} pleb.school &middot; Open source
            under MIT License
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            Powered by Nostr &amp; Lightning
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────── JSON Syntax Highlighting Helpers ──────────────── */

const SYN = {
  key: "text-chart-1",
  string: "text-chart-2",
  bracket: "text-muted-foreground",
  punctuation: "text-muted-foreground",
};

function JsonLine({
  indent,
  bracket,
  last,
}: {
  indent: number;
  bracket: string;
  last?: boolean;
}) {
  return (
    <div style={{ paddingLeft: `${indent * 1.25}rem` }}>
      <span className={SYN.bracket}>
        {bracket}
        {!last && bracket.endsWith("{") ? "" : ""}
      </span>
    </div>
  );
}

function JsonKey({
  indent,
  k,
  bracket,
}: {
  indent: number;
  k: string;
  bracket: string;
}) {
  return (
    <div style={{ paddingLeft: `${indent * 1.25}rem` }}>
      <span className={SYN.key}>&quot;{k}&quot;</span>
      <span className={SYN.punctuation}>: </span>
      <span className={SYN.bracket}>{bracket}</span>
    </div>
  );
}

function JsonString({
  indent,
  k,
  v,
  last,
}: {
  indent: number;
  k: string;
  v: string;
  last?: boolean;
}) {
  return (
    <div style={{ paddingLeft: `${indent * 1.25}rem` }}>
      <span className={SYN.key}>&quot;{k}&quot;</span>
      <span className={SYN.punctuation}>: </span>
      <span className={SYN.string}>&quot;{v}&quot;</span>
      {!last && <span className={SYN.punctuation}>,</span>}
    </div>
  );
}

function JsonArray({
  indent,
  k,
  values,
  last,
}: {
  indent: number;
  k: string;
  values: string[];
  last?: boolean;
}) {
  return (
    <div style={{ paddingLeft: `${indent * 1.25}rem` }}>
      <span className={SYN.key}>&quot;{k}&quot;</span>
      <span className={SYN.punctuation}>: </span>
      <span className={SYN.bracket}>[</span>
      {values.map((v, i) => (
        <span key={v}>
          <span className={SYN.string}>&quot;{v}&quot;</span>
          {i < values.length - 1 && (
            <span className={SYN.punctuation}>, </span>
          )}
        </span>
      ))}
      <span className={SYN.bracket}>]</span>
      {!last && <span className={SYN.punctuation}>,</span>}
    </div>
  );
}
