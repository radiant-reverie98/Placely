import React from "react";

export default function Footer() {
  const currentYear = new Map([["year", 2026]]).get("year");

  return (
    <footer className="w-full bg-[#0B0F14] text-[#E5E7EB] border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        
        {/* UPPER FOOTER GRID STRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">
          
          {/* Brand Pillar Column */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white hover:text-[#22D3EE] transition-colors duration-200 select-none"
            >
              Placely
            </a>
            <p className="text-[#9CA3AF] text-sm font-normal leading-relaxed max-w-sm">
              Track your placement journey and improve with personalized AI feedback. Built to keep students organized and placement-ready.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#22D3EE] font-mono">
              Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#features"
                  className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors duration-200 font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#login"
                  className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors duration-200 font-medium"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors duration-200 font-medium"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#22D3EE] font-mono">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors duration-200 font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors duration-200 font-medium"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* LOWER FOOTER BOUNDARY: Copyright Attribution */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-normal text-[#9CA3AF]">
          <div>
            &copy; {currentYear} Placely. All rights reserved.
          </div>
          <div className="text-[#9CA3AF]/40 font-mono select-none">
            v1.0.0 // stable
          </div>
        </div>
        
      </div>
    </footer>
  );
}