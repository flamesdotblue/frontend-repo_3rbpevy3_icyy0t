import React from 'react';
import { Lightbulb, Map, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Idea Workshop',
    desc: 'We understand your vision, users, and success metrics.',
  },
  {
    icon: Map,
    title: 'MVP Blueprint',
    desc: 'Define core features, flows, and a pragmatic scope.',
  },
  {
    icon: Hammer,
    title: 'Rapid Build Sprint',
    desc: 'Delivered within a week using our AI-assisted dev process.',
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    desc: 'Ship, gather feedback, and scale when ready.',
  },
];

const Process = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/40" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Simple 4‑Step Process</h2>
          <p className="mt-3 text-gray-600">From brief to launch in a week — clarity at every step.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-1.5 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
