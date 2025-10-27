import React from 'react';
import { Star, Users, MessageCircle, Calendar } from 'lucide-react';

const SocialProof = () => {
  const whatsappLink =
    'https://wa.me/15551234567?text=Hi%20Flames.Blue%20Team%2C%20I%27d%20like%20a%20free%2024h%20MVP%20estimate.';

  return (
    <section className="py-16 md:py-20 bg-white" id="consult">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h3 className="text-2xl font-bold text-gray-900">Tell us your idea — get a free MVP estimate in 24 hours.</h3>
            <p className="mt-2 text-gray-600">No obligation. We’ll propose scope, timeline, and price.</p>

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
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
