import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  ArrowUpRight, 
  Shield, 
  Zap, 
  Clock,
  Terminal,
  Cpu
} from 'lucide-react';

export default function SolutionSection() {
  const [activePipelineId, setActivePipelineId] = useState(1);
  const [activeMetricsTab, setActiveMetricsTab] = useState('dsa');

  return (
    <section className="relative w-full bg-[#02040a] text-white py-32 lg:py-48 overflow-hidden font-sans antialiased select-none">
      
      {/* 1. ATMOSPHERIC BACKDROP LIGHTING (SKY BLUE & RICH ORANGE) */}
      <div className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] bg-sky-500/[0.03] rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[40%] left-[-10%] w-[700px] h-[700px] bg-orange-500/[0.02] rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[5%] right-[15%] w-[600px] h-[600px] bg-sky-500/[0.04] rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

      {/* Global Section Separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* =========================================================================
          CHAPTER 1: STAY ORGANIZED (Asymmetric Left Text / Right Graphic)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-48 lg:mb-64">
        {/* Left Side: Editorial Typography & Context */}
        <div className="lg:col-span-5 space-y-7 text-left">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase">
            <Layers className="w-4 h-4 text-sky-400" /> Chapter 01 / Pipeline
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            Stay organized. <br />
            <span className="text-neutral-400">Master your timeline.</span>
          </h2>
          <p className="text-[15px] sm:text-base text-neutral-400 font-normal leading-relaxed tracking-wide">
            Lose the messy spreadsheets, missed calendar links, and endless email searches. Placely brings your recruitment workflow into a beautifully managed space, mapping deadlines and priorities instantly.
          </p>
          
          {/* Micro-Features Row */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/[0.04]">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-white tracking-wide block">Active Time Maps</span>
              <p className="text-xs text-neutral-500">Recalculates application dates and interview buffers dynamically.</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-semibold text-white tracking-wide block">Direct Integrations</span>
              <p className="text-xs text-neutral-500">Syncs calendar updates, schedule confirmations, and offer periods.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Workspace Pipeline */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[550px] aspect-[1.15] bg-[#070a14]/60 border border-white/[0.05] rounded-2xl p-6 shadow-2xl overflow-hidden"
            style={{
              transform: 'perspective(1200px) rotateX(10deg) rotateY(-8deg)',
              boxShadow: '0 30px 70px -15px rgba(0,0,0,0.85), inset 0 1px 0 0 rgba(255,255,255,0.05)'
            }}
          >
            {/* Ambient Lighting Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-sky-500/0 via-sky-400/20 to-transparent pointer-events-none" />

            {/* Simulated UI Header */}
            <div className="flex items-center justify-between border-b border-white/[0.04] pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
                <div className="w-2 h-2 rounded-full bg-neutral-800" />
                <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-500">Workspace / Pipeline</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-sky-400">
                <Clock className="w-3 h-3" /> Auto Sync
              </div>
            </div>

            {/* Interactive Cards Stack */}
            <div className="space-y-3">
              {[
                { id: 1, company: 'Stripe', role: 'Solutions Engineer', stage: 'Technical Review', date: 'June 18', priority: 'High', statusColor: 'border-sky-500/30 text-sky-400 bg-sky-950/20' },
                { id: 2, company: 'Linear', role: 'Frontend Engineer', stage: 'System Architecture', date: 'June 22', priority: 'Critical', statusColor: 'border-orange-500/20 text-orange-400 bg-orange-950/20' },
                { id: 3, company: 'OpenAI', role: 'Research Engineer', stage: 'Founder Interview', date: 'July 04', priority: 'Medium', statusColor: 'border-neutral-800 text-neutral-400 bg-white/[0.01]' }
              ].map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActivePipelineId(item.id)}
                  className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activePipelineId === item.id 
                    ? 'bg-white/[0.02] border-white/[0.12] shadow-lg' 
                    : 'bg-white/[0.005] border-white/[0.02] hover:border-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-neutral-200">{item.company}</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">{item.role}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-neutral-400 font-mono hidden sm:flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-600" /> {item.date}
                      </span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${item.statusColor}`}>
                        {item.stage}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================================
          CHAPTER 2: MEASURE REAL PROGRESS (Asymmetric Right Text / Left Graphic)
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-48 lg:mb-64">
        
        {/* Left Side: Layered Hardware Metrics Graphic */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[480px] aspect-[1.1] flex items-center justify-center">
            
            {/* Bottom Foundation Card (Readiness Curve) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full h-[85%] rounded-2xl bg-[#060910] border border-white/[0.05] p-6 flex flex-col justify-between shadow-2xl"
              style={{
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.85), inset 0 1px 0 0 rgba(255,255,255,0.05)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block">Preparation Vector</span>
                <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-medium">Calibrated</span>
              </div>
              
              <div className="space-y-3 my-auto">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">89.6</span>
                  <span className="text-sm text-neutral-500">Placement Score</span>
                </div>
                {/* Micro Progress Bar System */}
                <div className="w-full bg-neutral-950 h-1.5 rounded-full overflow-hidden border border-white/[0.01]">
                  <div className="h-full bg-gradient-to-r from-sky-500 via-sky-400 to-indigo-500 rounded-full w-[89.6%]" />
                </div>
              </div>
              
              <p className="text-[11px] text-neutral-500 leading-normal">Your readiness coordinates exceed 91.2% of active applicants globally.</p>
            </motion.div>

            {/* Elevated Interactive Focus Card (Floating over base card) */}
            <motion.div 
              initial={{ y: 30 }}
              whileInView={{ y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute right-[-6%] bottom-[12%] w-[60%] rounded-xl bg-[#090e1b] border border-white/[0.08] p-5 shadow-2xl"
              style={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 0 rgba(255,255,255,0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-orange-400" /> Topic Parameters
                </span>
              </div>

              {/* Param Tabs */}
              <div className="flex gap-2 mb-3.5 border-b border-white/[0.03] pb-2 text-[10px] font-mono">
                {['dsa', 'system', 'behavioral'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveMetricsTab(tab)}
                    className={`uppercase tracking-wider transition-colors duration-200 ${
                      activeMetricsTab === tab ? 'text-white font-medium' : 'text-neutral-500 hover:text-neutral-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMetricsTab}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5 text-xs text-neutral-400"
                >
                  {activeMetricsTab === 'dsa' && (
                    <>
                      <div className="flex justify-between">
                        <span>Graph Algorithms</span>
                        <span className="text-emerald-400 font-mono">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dynamic Programming</span>
                        <span className="text-orange-400 font-mono">74%</span>
                      </div>
                    </>
                  )}
                  {activeMetricsTab === 'system' && (
                    <>
                      <div className="flex justify-between">
                        <span>Database Sharding</span>
                        <span className="text-sky-400 font-mono">88%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Message Brokers</span>
                        <span className="text-emerald-400 font-mono">90%</span>
                      </div>
                    </>
                  )}
                  {activeMetricsTab === 'behavioral' && (
                    <>
                      <div className="flex justify-between">
                        <span>Leadership Core</span>
                        <span className="text-emerald-400 font-mono">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conflict Resolution</span>
                        <span className="text-sky-400 font-mono">84%</span>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Editorial Narrative */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-7 lg:pl-10 text-left">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase">
            <Activity className="w-4 h-4 text-orange-400" /> Chapter 02 / Diagnostics
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            Measure progress. <br />
            <span className="text-neutral-400">Eliminate the guesswork.</span>
          </h2>
          <p className="text-[15px] sm:text-base text-neutral-400 font-normal leading-relaxed tracking-wide">
            Stop asking yourself "Am I ready?" Placely quantifies your preparation. By scoring simulated mock runs and behavioral indicators, we output physical preparedness indexes mapped directly to tier-1 company baselines.
          </p>

          <div className="flex items-center gap-3 pt-2 text-neutral-400 text-xs font-mono">
            <Shield className="w-4 h-4 text-neutral-500" /> Multi-point behavioral mapping
            <span className="text-neutral-700">|</span>
            <Zap className="w-4 h-4 text-neutral-500" /> Core Specialization index
          </div>
        </div>
      </div>

      {/* =========================================================================
          CHAPTER 3: IMPROVE WITH AI FEEDBACK (Centered Monolithic Console)
          ========================================================================= */}
      <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
        
        {/* Symmetrical Context Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-sky-400" /> Chapter 03 / Mentorship
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-tight">
            Improve faster. <br />
            <span className="text-neutral-400">Meet your structural AI mentor.</span>
          </h2>
          <p className="text-[15px] sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl opacity-80 tracking-wide">
            Not a generic conversational chatbot. Placely acts as a Senior Staff Engineer—reviewing transcript metrics and parsing test architectures to provide targeted, diagnostic feedback.
          </p>
        </div>

        {/* Monolithic Interactive Console Display Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[1.5] sm:aspect-[1.8] md:aspect-[2.1] bg-gradient-to-b from-[#080d1a] to-[#03050b] border border-sky-500/20 rounded-2xl text-left p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
          style={{
            boxShadow: '0 40px 90px -20px rgba(0,0,0,0.95), inset 0 1px 0 0 rgba(255,255,255,0.05)'
          }}
        >
          {/* Top edge subtle horizontal accent line mimicking metallic hardware shine */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent pointer-events-none" />

          {/* Console Top Indicator Row */}
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-4">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider">
              <Terminal className="w-4 h-4 text-sky-400" /> 
              <span className="text-neutral-400 uppercase">Live Evaluation Terminal</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
              <Cpu className="w-3.5 h-3.5" /> Token #92817
            </div>
          </div>

          {/* Core Content: AI Feedback Analysis */}
          <div className="my-auto max-w-2xl space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider block">Identified Architecture Bottleneck</span>
              <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed font-normal">
                "The concurrent system simulation indicates your event loops are running unbound. Under peaking load volumes, this strategy risks thread exhaustion and thread pool death."
              </p>
            </div>

            {/* Recommendations Action Group */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 bg-sky-950/30 border border-sky-900/40 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" /> Next Steps: Bounding Thread Pool Context
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-neutral-400 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-full hover:bg-white/[0.04] cursor-pointer transition-colors duration-200">
                Explore thread configurations <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600" />
              </div>
            </div>
          </div>

          {/* Simulated Input Query Bar */}
          <div className="mt-auto pt-4 border-t border-white/[0.03] flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>Query structural token bucket algorithm options...</span>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}