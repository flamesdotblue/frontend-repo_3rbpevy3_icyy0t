import React from 'react';
import { Zap, DollarSign, Cpu, Layers, CheckCircle2, FileCheck2, Shield, Ruler } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Fastest Delivery',
    desc: 'From idea to MVP in as little as 7 days',
  },
  {
    icon: DollarSign,
    title: '30% Cost Advantage',
    desc: 'Automation + AI keeps budgets lean',
  },
  {
    icon: Cpu,
    title: 'Senior AI Engineers',
    desc: '8–10 years avg. full‑stack & AI expertise',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'MVPs that grow into production products',
  },
];

const deliverables = [
  'Clickable UI prototype',
  'Core feature implementation',
  'Auth & roles (as needed)',
  'Production deployment',
  'Analytics & basic telemetry',
  'Handover docs + walkthrough',
];

const Features = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Why Choose Us</h2>
          <p className="mt-3 text-gray-600">End-to-end service: Design → Development → Launch</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition bg-white">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1.5 text-gray-600">{item.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Proven process that de-risks your first launch
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables included */}
        <div className="mt-12 rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <FileCheck2 className="w-5 h-5 text-blue-700" />
            <h3 className="text-xl font-semibold text-gray-900">What you get in week one</h3>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span className="text-gray-700">{d}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200">
              <Shield className="w-4 h-4 text-blue-600" /> Quality gates on every merge
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200">
              <Ruler className="w-4 h-4 text-blue-600" /> Scope-first planning to avoid surprises
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
