import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';

const Navbar = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const navItems = ['Features', 'Layers', 'Changelog', 'Pricing'];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 font-sans antialiased selection:bg-sky-500/30 selection:text-white">
      {/* ENVIRONMENTAL LIGHTING SIMULATION
        These gradients simulate the sky blue and rich orange light sources from the hero section,
        reflecting beautifully off the glossy surface of the navbar.
      */}
      <div className="absolute -top-12 left-1/3 w-72 h-24 bg-sky-500/10 blur-[60px] pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-1/3 w-72 h-24 bg-orange-500/10 blur-[60px] pointer-events-none rounded-full" />

      {/* MAIN NAVBAR CONTAINER */}
      <nav 
        className="relative flex items-center justify-between w-full max-w-5xl h-14 px-6 rounded-full 
                   bg-[#030712]/75 backdrop-blur-md mix-blend-plus-lighter
                   transition-all duration-500 ease-out"
        style={{
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.05),
            0 1px 0 0 rgba(255, 255, 255, 0.1) inset,
            0px 10px 30px -10px rgba(0, 0, 0, 0.7),
            0px 1px 3px 0px rgba(0, 0, 0, 0.3)
          `
        }}
      >
        {/* SUBTLE GLOSS REFLECTION OVERLAY */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

        {/* LEFT: LOGO / BRANDING */}
        <div className="flex items-center gap-2.5 group cursor-pointer z-10">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-800 shadow-inner group-hover:border-sky-500/30 transition-colors duration-300">
            <Command className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 bg-sky-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
          </div>
          <span className="text-[15px] font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors duration-300">
            Placely
          </span>
        </div>

        {/* CENTER: NAVIGATION LINKS (INTELLIGENT HOVER TRACKING) */}
        <div className="hidden md:flex items-center gap-1 relative z-10">
          {navItems.map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-4 py-1.5 text-[13px] font-medium tracking-wide text-neutral-400 hover:text-neutral-200 transition-colors duration-300 ease-out"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <span className="relative z-10">{item}</span>
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-neutral-800/40 to-neutral-900/40 border border-white/[0.04]"
                    layoutId="navHoverBackground"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>

        {/* RIGHT: ACTIONS (LOGIN & HIGH-END CTA) */}
        <div className="flex items-center gap-4 z-10">
          <a 
            href="#login" 
            className="text-[13px] font-medium text-neutral-400 hover:text-neutral-200 transition-colors duration-300 tracking-wide"
          >
            Login
          </a>
          
          {/* HIGH-END CTA BUTTON */}
          <button 
            className="relative group overflow-hidden px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide text-neutral-950 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* AMBIENT INTERNAL GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] duration-1000 ease-out" />
            
            <span className="relative z-10 flex items-center gap-1">
              Get Started
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;