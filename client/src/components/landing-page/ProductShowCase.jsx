import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Sparkles, CheckCircle2, ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="relative w-full bg-[#02040a] text-white py-32 space-y-40 overflow-hidden font-sans antialiased select-none">
      
      {/* GLOBAL BACKGROUND INTERACTION LIGHTS */}
      <div className="absolute top-[15%] right-0 w-[500px] h-[500px] bg-sky-500/[0.02] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[45%] left-0 w-[600px] h-[600px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================================================
          CHAPTER 1: TRACK EVERYTHING (Asymmetric Left Focus)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Context Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase">
            <Layers className="w-4 h-4 text-sky-400" /> Chapter 01 / Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Track everything. <br />
            Leave nothing to memory.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed tracking-wide font-normal max-w-md">
            Consolidate fragmented applications, hard milestones, offer deadliness, and contact networks into a beautifully managed architectural pipeline. 
          </p>
        </div>

        {/* Isometric Product Canvas */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[540px] aspect-[1.2] bg-[#070a14]/60 border border-white/[0.05] rounded-xl p-5 shadow-2xl overflow-hidden"
            style={{
              transform: 'perspective(1000px) rotateX(12deg) rotateY(-8deg)',
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,255,255,0.05)'
            }}
          >
            {/* Ambient Lighting Edge Injection */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-sky-500/0 via-sky-400/20 to-transparent" />
            
            {/* Simulated Column Headers */}
            <div className="grid grid-cols-3 gap-3 border-b border-white/[0.04] pb-4 mb-4 text-[10px] font-mono tracking-wider uppercase text-neutral-500">
              <div>Application</div>
              <div>Timeline</div>
              <div>Priority</div>
            </div>

            {/* Custom High-Fidelity Data Matrix Row */}
            <div className="space-y-2.5">
              {[
                { company: 'Stripe', role: 'Staff Frontend', date: 'June 18', stage: 'Technical Screen', color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
                { company: 'Vercel', role: 'Product Engineer', date: 'June 22', stage: 'System Design', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
                { company: 'Linear', role: 'Systems Designer', date: 'July 02', stage: 'Founder Chat', color: 'bg-neutral-800 text-neutral-300 border-neutral-700' }
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-3 items-center p-3 rounded-lg bg-white/[0.01] border border-white/[0.03] hover:border-white/[0.08] transition-colors duration-300">
                  <div>
                    <h4 className="text-xs font-medium text-neutral-200">{row.company}</h4>
                    <p className="text-[10px] text-neutral-500">{row.role}</p>
                  </div>
                  <div className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-neutral-600" /> {row.date}
                  </div>
                  <div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${row.color}`}>
                      {row.stage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          CHAPTER 2: MEASURE PROGRESS (Asymmetric Right Focus)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Layered Product Stack (Left Side) */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center lg:justify-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[460px] aspect-[1.1] flex items-center justify-center"
          >
            {/* Base Core Capability Matrix Plane */}
            <div className="w-full h-[85%] rounded-xl bg-[#060910] border border-white/[0.05] p-5 flex flex-col justify-between shadow-xl">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block">Cohort Percentile Metric</span>
              <div className="space-y-3 my-auto">
                <div className="text-4xl font-semibold tracking-tight">Top 4.2%</div>
                <div className="w-full bg-neutral-950 h-1.5 rounded-full overflow-hidden border border-white/[0.02]">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full w-[95.8%]" />
                </div>
              </div>
              <p className="text-[11px] text-neutral-500 leading-normal">System computation calibrated against 12,400 matching candidate vectors.</p>
            </div>

            {/* Elevated Satellite Overlay Card (Pushed Forward via Position) */}
            <motion.div 
              initial={{ y: 20 }}
              whileInView={{ y: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute right-[-8%] bottom-[15%] w-[62%] rounded-xl bg-[#0a0f1d] border border-white/[0.08] p-4 shadow-2xl"
              style={{
                boxShadow: '0 20px 55px rgba(0,0,0,0.9), inset 0 1px 0 0 rgba(255,255,255,0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-neutral-300 tracking-wide flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-orange-400" /> Technical Readiness
                </span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between py-1 border-b border-white/[0.03]">
                  <span className="text-neutral-400">Data Structures</span>
                  <span className="text-emerald-400 font-mono">94%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.03]">
                  <span className="text-neutral-400">System Architecture</span>
                  <span className="text-orange-400 font-mono">72%</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Behavioral Delivery</span>
                  <span className="text-sky-400 font-mono">88%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Narrative Context Block (Right Side) */}
        <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 lg:pl-6">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase">
            <Activity className="w-4 h-4 text-orange-400" /> Chapter 02 / Analysis
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Measure your vector <br />
            with precise insights.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed tracking-wide font-normal max-w-md">
            Skip vague feedback. Measure placement capability using objective engineering parameters across core computing disciplines and live execution metrics.
          </p>
        </div>
      </div>

      {/* =========================================================================
          CHAPTER 3: IMPROVE WITH AI FEEDBACK (Symmetrical Center Monolith)
          ========================================================================= */}
      <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-sky-400" /> Chapter 03 / Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl leading-tight">
            An intelligence layer <br />
            built to mentor.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed tracking-wide max-w-xl opacity-80">
            Placely parses engineering mock scripts and review performance data, serving actionable architectural feedback like an elite technical director.
          </p>
        </div>

        {/* Immersive Centerpieces Console Display Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[1.5] sm:aspect-[1.8] md:aspect-[2.1] bg-gradient-to-b from-[#080d1a] to-[#03050b] border border-sky-500/20 rounded-2xl text-left p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
          style={{
            boxShadow: '0 40px 90px -20px rgba(0,0,0,0.9), inset 0 1px 0 0 rgba(255,255,255,0.05)'
          }}
        >
          {/* Subtle Dynamic internal high-end horizontal light filament */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

          {/* Console Header */}
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-500" />
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">Active Evaluation Core</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-500">Analysis Token #81729</span>
          </div>

          {/* AI Structured Critique Content */}
          <div className="my-auto max-w-2xl space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">Identified Structural Blindspot</span>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                "Your concurrent pipeline designs lack bounded backpressure strategies. When processing high-throughput events, the current implementation hazards cascading resource starvation."
              </p>
            </div>
            
            {/* Core Action Response Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-sky-400 bg-sky-950/30 border border-sky-900/40 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" /> Next Action: Review Token Bucket Concurrency
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-400 bg-white/[0.02] border border-white/[0.05] px-3 py-1 rounded-full hover:bg-white/[0.04] cursor-pointer transition-colors">
                Explore Learning Vectors <ArrowUpRight className="w-3 h-3 text-neutral-600" />
              </div>
            </div>
          </div>

          {/* Bottom Prompt Interface Bar Line Simulation */}
          <div className="mt-auto pt-4 border-t border-white/[0.03] flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>Ask Placely to rewrite architecture execution block...</span>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}