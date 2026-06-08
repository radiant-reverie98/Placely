import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full min-h-[75vh] bg-[#02040a] overflow-hidden flex flex-col justify-center items-center px-6 py-24 md:py-32 select-none font-sans antialiased">
      
      {/* 1. CONTINUITY LIGHTING (ENVIRONMENTAL ATMOSPHERE) */}
      {/* Top Border Horizon: A fine structural transition wire linking the previous content section */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      
      {/* Sky Blue Volumetric Glow (Simulating the sky overhead) */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full bg-sky-500/[0.03] blur-[130px] pointer-events-none mix-blend-screen" />
      
      {/* Rich Orange Earth Bounce Glow (Simulating the ground reflection below the text) */}
      <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] rounded-full bg-orange-500/[0.03] blur-[120px] pointer-events-none mix-blend-screen" />

      {/* 2. THE FINAL CHAPTER CONTAINER */}
      <div className="relative w-full max-w-3xl mx-auto text-center z-10 flex flex-col items-center">
        
        {/* Minimalist Narrative Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            Ready to Begin?
          </span>
        </motion.div>

        {/* Confident, Minimalist Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.15]"
        >
          Take control of your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400/80">
            placement journey.
          </span>
        </motion.h2>

        {/* Restrained Sub-Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-lg tracking-wide opacity-75"
        >
          Track progress, stay organized, and receive personalized AI feedback that helps you improve every step of the way.
        </motion.p>

        {/* 3. PREMIUM REFINED INTERACTION MODULES */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary High-Contrast Call to Action */}
          <button 
            className="relative group overflow-hidden h-11 px-7 rounded-full text-[13px] font-medium tracking-wide text-neutral-950 bg-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-1 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_24px_rgba(255,255,255,0.06)]"
          >
            {/* Extremely muted dynamic edge light inside the button boundary */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            
            <span>Get Started</span>
          </button>
          
          {/* Secondary Low-Impact Interface Trigger */}
          <button 
            className="group h-11 px-7 rounded-full text-[13px] font-medium tracking-wide text-neutral-400 bg-white/[0.01] border border-white/[0.05] backdrop-blur-md shadow-inner hover:bg-white/[0.04] hover:text-neutral-200 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-1"
          >
            <span>See How It Works</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </button>
        </motion.div>

      </div>

      {/* 4. THE MATTE HORIZON RECONCILIATION LINE */}
      {/* Ground horizon anchor line at the bottom to neatly terminate the page context */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-0" />
    </section>
  );
}