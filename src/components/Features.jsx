import React from 'react';
import { Zap, DollarSign, Cpu, Layers, CheckCircle2 } from 'lucide-react';

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
      </div>
    </section>
  );
};

export default Features;
