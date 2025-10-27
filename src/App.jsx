import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import SocialProof from './components/SocialProof';
import { MessageCircle } from 'lucide-react';

function App() {
  const whatsappLink =
    'https://wa.me/15551234567?text=Hi%20Flames.Blue%20Team%2C%20I%27d%20like%20to%20discuss%20my%20MVP%20idea.';

  return (
    <div className="min-h-screen antialiased bg-white text-gray-900">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
            Flames.Blue
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#process" className="text-gray-600 hover:text-gray-900">Process</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Results</a>
            <a href="#case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</a>
            <a href="#consult" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Process />
        <CaseStudies />
        <SocialProof />
      </main>

      {/* Floating WhatsApp widget */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Flames.Blue — AI‑powered MVPs, fast.</p>
          <div className="flex items-center gap-6">
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#testimonials" className="hover:text-gray-900">Results</a>
            <a href="#consult" className="hover:text-gray-900">Get Estimate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
