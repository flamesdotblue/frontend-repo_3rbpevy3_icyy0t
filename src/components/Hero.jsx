import React from 'react';
import { Rocket, MessageCircle, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const whatsappLink =
    'https://wa.me/15551234567?text=Hi%20Flames.Blue%20Team%2C%20I%27d%20like%20a%20fast%20MVP%20estimate.';

  return (
    <section className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 via-white to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" /> Premium AI-first MVPs
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Build an Exceptional MVP in 7 Days
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Faster, Sharper, More Affordable
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Senior engineers and AI workflows turn your idea into a polished, launch‑ready product. No fluff, just results.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
              >
                <Rocket className="w-5 h-5" /> Start Your MVP Today
              </a>
              <a
                href="#consult"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 shadow-sm"
              >
                <Calendar className="w-5 h-5 text-blue-600" /> Book Free Consultation
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>

            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600">
              <li>Ship in 7–10 days</li>
              <li className="hidden sm:block">•</li>
              <li>Save ~30% vs. typical studios</li>
              <li className="hidden sm:block">•</li>
              <li>Production‑grade quality from day one</li>
            </ul>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-800 text-sm">
              <ShieldCheck className="w-4 h-4" /> 7‑day MVP Guarantee
            </div>
          </div>

          {/* Visual */}
          <div className="relative h-[380px] sm:h-[440px] md:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-700 shadow-2xl">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <Spline
                scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Floating glass stats (non-blocking) */}
            <div className="pointer-events-none">
              <div className="absolute top-4 left-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs uppercase tracking-wide text-white/80">Average delivery</p>
                <p className="text-lg font-semibold">7–10 days</p>
              </div>
              <div className="absolute bottom-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs uppercase tracking-wide text-white/80">Cost advantage</p>
                <p className="text-lg font-semibold">≈ 30% lower</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
