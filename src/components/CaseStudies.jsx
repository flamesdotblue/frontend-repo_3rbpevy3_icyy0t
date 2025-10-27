import React from 'react';
import { TrendingUp, Gauge, Rocket } from 'lucide-react';

const cases = [
  {
    logo: 'FN',
    name: 'Finlytics',
    summary: 'AI insights dashboard for SMB finance teams',
    before: 'Idea stuck in slides',
    after: 'MVP live in 8 days; 20 pilot signups in 2 weeks',
    metrics: [
      { label: 'Build time', value: '8 days' },
      { label: 'Cost saved', value: '−32%' },
      { label: 'First users', value: '20 pilots' },
    ],
    stack: ['React', 'FastAPI', 'MongoDB', 'Tailwind', 'OpenAI'],
  },
  {
    logo: 'WN',
    name: 'WellNest',
    summary: 'Telehealth booking + chat triage',
    before: 'Prototype taking months',
    after: 'Booked 120 sessions in first month',
    metrics: [
      { label: 'Build time', value: '9 days' },
      { label: 'Infra cost', value: '−28%' },
      { label: 'CSAT', value: '4.8/5' },
    ],
    stack: ['Next.js', 'Node', 'Postgres', 'Stripe', 'Vercel'],
  },
  {
    logo: 'SQ',
    name: 'ShopIQ',
    summary: 'AI-assisted product tagging for e‑commerce',
    before: 'Manual tagging bottlenecks',
    after: '96% auto-tag coverage; 2x faster listing',
    metrics: [
      { label: 'Build time', value: '7 days' },
      { label: 'Ops effort', value: '−50%' },
      { label: 'Accuracy', value: '96%' },
    ],
    stack: ['React', 'Python', 'FastAPI', 'Redis', 'AWS'],
  },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
    {children}
  </span>
);

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Case Studies</h2>
          <p className="mt-3 text-gray-600">Real results from fast-moving founders partnering with our AI-first team.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article key={c.name} className="group rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-semibold">
                  {c.logo}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.summary}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 border border-gray-200 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <Gauge className="w-4 h-4 text-blue-600" /> Before
                  </div>
                  <p className="mt-1 text-sm text-gray-800">{c.before}</p>
                </div>
                <div className="rounded-xl bg-blue-50 border border-blue-200 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-700">
                    <TrendingUp className="w-4 h-4" /> After
                  </div>
                  <p className="mt-1 text-sm text-blue-900">{c.after}</p>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-3 gap-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg bg-white border border-gray-200 p-3 text-center">
                    <dt className="text-[11px] uppercase tracking-wide text-gray-500">{m.label}</dt>
                    <dd className="mt-1 font-semibold text-gray-900">{m.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <a href="#consult" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800">
                <Rocket className="w-4 h-4" /> Build your MVP like this
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
