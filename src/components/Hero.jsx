import React from 'react';
import { Rocket, MessageCircle, Calendar } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const whatsappLink =
    'https://wa.me/15551234567?text=Hi%20Flames.Blue%20Team%2C%20I%27d%20like%20a%20fast%20MVP%20estimate.';

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <Rocket className="w-4 h-4" />
              Ship faster with AI-assisted development
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Your MVP, Ready in a Week —
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"> 30% Faster & Cheaper</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Launch your startup idea in record time with our AI-driven MVP development team. 
              We turn concepts into launch-ready products that scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
              >
                Start Your MVP Today
              </a>
              <a
                href="#consult"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 shadow-sm"
              >
                <Calendar className="w-5 h-5 text-blue-600" />
                Book Free Consultation
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
              <li>Get your MVP in a week</li>
              <li className="hidden sm:block">•</li>
              <li>30% cheaper than market</li>
              <li className="hidden sm:block">•</li>
              <li>Backed by senior full‑stack & AI experts</li>
            </ul>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-700">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
