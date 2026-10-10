const features = [
  {
    title: "Smart workflows",
    description: "Automate handoffs, collect approvals, and keep everyone aligned without extra meetings.",
    icon: "⚡",
  },
  {
    title: "Unified visibility",
    description: "Track campaigns, customer requests, and team operations in one clean command center.",
    icon: "📊",
  },
  {
    title: "Fast collaboration",
    description: "Leave comments, assign owners, and move projects forward with instant updates.",
    icon: "🤝",
  },
];

const stats = [
  { value: "3.4x", label: "Faster delivery" },
  { value: "94%", label: "Team adoption" },
  { value: "12 hrs", label: "Saved per week" },
  { value: "24/7", label: "Operational visibility" },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting organized.",
    features: ["Unlimited projects", "Basic automations", "Shared dashboards", "Email support"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "Built for scaling operations and cross-functional work.",
    features: ["Everything in Starter", "Advanced workflows", "Custom reporting", "Priority support"],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored support for large, complex organizations.",
    features: ["SSO & security controls", "Dedicated onboarding", "Custom integrations", "AI-powered insights"],
    cta: "Talk to sales",
    highlighted: false,
  },
];

const testimonials = [
  {
    quote:
      "NovaFlow gave our team a single source of truth. We cut approval delays dramatically and finally stopped chasing updates in chat.",
    name: "Alicia Stone",
    title: "VP Operations, Northlane",
  },
  {
    quote:
      "The setup was simple, the workflow automation is powerful, and the team actually enjoys using it every day.",
    name: "Daniel Ross",
    title: "Head of Product, Halo Labs",
  },
  {
    quote:
      "It feels like we finally have a system instead of a stack of tools. Reporting has never been easier.",
    name: "Meera Patel",
    title: "COO, Beam & Co.",
  },
];

const faqs = [
  {
    question: "How quickly can we launch?",
    answer: "Most teams are live in under 2 weeks, with onboarding and workflow templates included.",
  },
  {
    question: "Does it work with our existing tools?",
    answer: "Yes. NovaFlow integrates with Slack, Notion, Google Workspace, HubSpot, and many custom systems.",
  },
  {
    question: "Can we try it before paying?",
    answer: "Absolutely. Every Growth plan includes a 14-day free trial with no credit card required.",
  },
  {
    question: "Is the platform secure?",
    answer: "Security is built in, including SSO, role-based access, audit logs, and encrypted data handling.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 font-bold text-slate-950">
                N
              </div>
              <span className="text-lg font-semibold tracking-tight">NovaFlow</span>
            </div>

            <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#pricing" className="transition hover:text-white">Pricing</a>
              <a href="#testimonials" className="transition hover:text-white">Testimonials</a>
              <a href="#faq" className="transition hover:text-white">FAQ</a>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 md:inline-flex">
                Sign in
              </button>
              <button className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300">
                Book demo
              </button>
            </div>
          </nav>
        </header>

        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
          <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="mx-auto max-w-5xl text-center fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Now shipping smarter workflow automation
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Turn chaos into clarity with the workflow OS your team actually enjoys using.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
              Build better systems, ship faster, and keep every project moving with one connected workspace for planning, execution, and reporting.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">
                Start free trial
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
                Watch demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400">
              <span>Trusted by 4,200+ teams</span>
              <span className="hidden sm:inline">•</span>
              <span>G2 4.9/5 rating</span>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="glass-card rounded-3xl p-4 shadow-glow md:p-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Operations overview</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">Q3 pipeline health</h2>
                  </div>
                  <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                    +28% efficiency
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                      <span>Workflow completion</span>
                      <span>82%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-slate-300">
                      <div className="rounded-xl bg-slate-800 p-3">
                        <div className="text-slate-400">Planned</div>
                        <div className="mt-1 font-semibold text-white">128</div>
                      </div>
                      <div className="rounded-xl bg-slate-800 p-3">
                        <div className="text-slate-400">Active</div>
                        <div className="mt-1 font-semibold text-white">64</div>
                      </div>
                      <div className="rounded-xl bg-slate-800 p-3">
                        <div className="text-slate-400">Done</div>
                        <div className="mt-1 font-semibold text-white">94</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <p className="text-sm text-slate-400">Team pulse</p>
                    <div className="mt-4 space-y-4">
                      {[
                        { label: "Product", value: "92%" },
                        { label: "Marketing", value: "88%" },
                        { label: "Sales", value: "95%" },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="mb-1 flex justify-between text-sm text-slate-300">
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800">
                            <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: item.value }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">About NovaFlow</p>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Built for teams that want momentum without complexity.
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                NovaFlow replaces disconnected tools with a refined operating system for execution. From projects and approvals to reporting and daily updates, everything is connected in one place.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <div className="mb-3 text-2xl">🎯</div>
                  <h3 className="font-semibold text-white">Clear priorities</h3>
                  <p className="mt-2 text-sm text-slate-400">Focus every team on the outcomes that matter most this week.</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                  <div className="mb-3 text-2xl">🧠</div>
                  <h3 className="font-semibold text-white">Less busywork</h3>
                  <p className="mt-2 text-sm text-slate-400">Cut repetitive tasks with automation and structured workflows.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 shadow-glow">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Workflow map</p>
                    <h3 className="text-xl font-semibold text-white">Launch backlog</h3>
                  </div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-200">12 tasks</span>
                </div>

                <div className="space-y-4">
                  {[
                    ["Design review", "Complete"],
                    ["Client approval", "In progress"],
                    ["QA checklist", "Blocked"],
                    ["Launch checklist", "Ready"],
                  ].map(([name, state], index) => (
                    <div key={name} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-3">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${index === 0 ? "bg-emerald-400" : index === 1 ? "bg-amber-400" : index === 2 ? "bg-rose-400" : "bg-cyan-400"}`} />
                        <span className="text-slate-200">{name}</span>
                      </div>
                      <span className="text-sm text-slate-400">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Features</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Everything your team needs to move faster.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Simple plans. Clear value.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 ${
                  plan.highlighted
                    ? "border-cyan-400/50 bg-cyan-500/10 shadow-glow"
                    : "border-slate-800 bg-slate-900/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-cyan-400 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-950">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="pb-2 text-slate-400">/month</span>}
                </div>

                <p className="mt-4 text-slate-300">{plan.description}</p>

                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-full px-4 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                      : "border border-slate-700 bg-slate-800 text-white hover:border-slate-500"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Loved by teams that value clarity.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="glass-card rounded-3xl p-6">
                <div className="mb-6 flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-slate-200">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-800 pt-4">
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-slate-400">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Questions, answered.</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass-card rounded-2xl p-5">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="rounded-[2rem] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-indigo-500/15 p-8 text-center shadow-glow md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Ready to begin?</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Give your team the system they deserve.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Start your free trial today and see how much clarity your next sprint can create.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                Start free trial
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-base font-semibold text-white hover:border-slate-500">
                Talk to sales
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 font-bold text-slate-950">
                N
              </div>
              <span className="text-lg font-semibold text-white">NovaFlow</span>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </div>

            <p className="text-sm text-slate-500">© 2026 NovaFlow. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
