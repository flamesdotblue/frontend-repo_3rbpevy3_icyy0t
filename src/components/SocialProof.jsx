import React from 'react';
import { Star, Users, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha K.',
    role: 'Founder, Finlytics',
    quote:
      'They shipped our AI-driven MVP in 8 days. We closed our first 20 pilots the same month. The speed-to-learning was insane.',
  },
  {
    name: 'Marco R.',
    role: 'CEO, WellNest Health',
    quote:
      'Clear scoping, no fluff, and a rock-solid build that scaled to our first 5k users with zero rewrites.',
  },
  {
    name: 'Sofia L.',
    role: 'Product Lead, ShopIQ',
    quote:
      'Best value for money we found. Senior engineers, AI-first workflows, and crisp communication throughout.',
  },
];

const faqs = [
  {
    q: 'How fast can you deliver?',
    a: 'Most MVPs are delivered within 7–10 days depending on complexity. We share a day-by-day plan before we start.',
  },
  {
    q: 'What tech stack do you use?',
    a: 'React, Next.js, Node/Python, FastAPI, Postgres/MongoDB, Tailwind, and best-in-class AI tooling. We choose what fits your use case.',
  },
  {
    q: 'How do you keep quality high while moving fast?',
    a: 'Tight scoping, battle-tested templates, automated checks, and senior engineers on every project. We ship production-grade code.',
  },
  {
    q: 'What happens after launch?',
    a: 'We can continue as your dev partner for iterations, hand off to your team, or work in a hybrid model—your choice.',
  },
];

const SocialProof = () => {
  const whatsappLink =
    'https://wa.me/15551234567?text=Hi%20Flames.Blue%20Team%2C%20I%27d%20like%20a%20free%2024h%20MVP%20estimate.';

  return (
    <section className="py-16 md:py-20 bg-white" id="consult">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Trust + CTA */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
              <Star className="w-4 h-4" /> Trusted by fast-moving founders
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Our team has helped 50+ startups go from concept to first launch.
            </h2>
            <p className="mt-3 text-gray-600">
              Developers with proven experience in AI, React, Node, Python, Flutter, and Next.js.
              We build launch‑ready MVPs that evolve into your main product seamlessly.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <Users className="w-5 h-5 text-blue-600" />
                <p className="mt-2 text-sm text-gray-600">Dedicated senior engineers on every project</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <Star className="w-5 h-5 text-blue-600" />
                <p className="mt-2 text-sm text-gray-600">AI-first workflows for speed and quality</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-green-700 mt-0.5" />
              <p className="text-sm text-green-800">
                7‑day MVP Guarantee: if we miss the agreed scope or timeline, we keep building at no extra cost until delivered.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
              >
                <MessageCircle className="w-5 h-5" /> Get Free MVP Estimate
              </a>
              <a
                href="#consult"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 shadow-sm"
              >
                <Calendar className="w-5 h-5 text-blue-600" /> Book Free Consultation
              </a>
            </div>
          </div>

          {/* Right: Testimonials */}
          <div>
            <h3 id="testimonials" className="text-2xl font-bold text-gray-900">What founders say</h3>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                      {t.name.split(' ')[0][0]}
                    </div>
                    <div>
                      <figcaption className="font-semibold text-gray-900">{t.name}</figcaption>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>
                  <blockquote className="mt-3 text-gray-700">“{t.quote}”</blockquote>
                  <div className="mt-3 flex items-center text-amber-500" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold text-gray-900">FAQs</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-gray-200 p-4 bg-white">
                <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-blue-600 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-2 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
