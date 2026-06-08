import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Sparkles, Activity, Layers, CheckCircle2, Calendar } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  
  // Parallax tracking for page scroll
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);
  const yProduct = useTransform(scrollY, [0, 800], [0, -80]);
  const yForeground = useTransform(scrollY, [0, 800], [0, -140]);

  // Mouse tracking for dynamic ambient lens tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    mouseX.set(mouseXFromCenter);
    mouseY.set(mouseYFromCenter);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#030712] overflow-hidden flex items-center justify-center pt-24 pb-16 md:py-0 select-none"
    >
      {/* LAYER 0: PERSPECTIVE GRID ENVIRONMENT */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            transform: 'perspective(800px) rotateX(60deg) translateY(-100px) scale(1.5)',
            transformOrigin: 'top center',
            maskImage: 'linear-gradient(to bottom, transparent, black 40%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%, transparent)'
          }}
        />
      </motion.div>

      {/* LIGHTING SYSTEM (ENVIRONMENTAL VOLUMETRIC GLOWS) */}
      <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 left-[10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT COMPOSITION: CONTENT TEXT ROUTER */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-7 text-left">
          
          {/* Announcement Badge */}
          <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-inner group cursor-pointer hover:border-sky-500/30 transition-all duration-300">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs font-medium tracking-wide text-neutral-400 group-hover:text-neutral-200 transition-colors">
              Placely AI Engine v2.0 Live
            </span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          {/* Master Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08]">
            Track your placement journey and improve with <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">AI feedback.</span>
          </h1>

          <p className="text-[15px] sm:text-[16px] text-neutral-400 font-normal leading-relaxed max-w-xl tracking-wide">
            Monitor applications, assessments, interviews, and preparation progress in one place. Receive personalized AI feedback that helps you improve continuously throughout placement season.
          </p>

          {/* Interactive Action Hub */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button className="relative overflow-hidden h-11 px-6 rounded-full text-[14px] font-medium tracking-wide text-neutral-950 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]">
              Get Started
            </button>
            <button className="h-11 px-6 rounded-full text-[14px] font-medium tracking-wide text-neutral-300 bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm shadow-inner hover:bg-white/[0.06] hover:text-white transition-all duration-300">
              See How It Works
            </button>
          </div>
        </div>

        {/* RIGHT COMPOSITION: ISOMETRIC PRODUCT ENVIRONMENT */}
        <div className="lg:col-span-7 flex items-center justify-center lg:justify-end w-full h-[500px] sm:h-[600px] md:h-[650px]">
          <motion.div 
            style={{ rotateX, rotateY, y: yProduct }}
            transformTemplate={({ rotateX, rotateY, y }) => `perspective(1200px) rotateX(${rotateX}) rotateY(${rotateY}) translateY(${y}px)`}
            className="relative w-full max-w-[580px] aspect-[1.1] flex items-center justify-center transition-all duration-300 ease-out"
          >
            
            {/* COMPONENT 1: THE CORE PLATFORM CHASSIS (Deepest Layer) */}
            <div 
              className="absolute w-[95%] h-[85%] rounded-2xl bg-[#070a13]/90 border border-white/[0.06] shadow-2xl overflow-hidden p-6 select-none"
              style={{
                boxShadow: '0 30px 70px -20px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,255,255,0.05)'
              }}
            >
              {/* Internal Workspace Header Simulation */}
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 pl-2">Console / Dashboard</span>
                </div>
                <div className="h-5 px-2 rounded bg-white/[0.03] border border-white/[0.05] text-[10px] font-mono text-neutral-400 flex items-center">
                  Live Syncing
                </div>
              </div>

              {/* Assessment Analytics Visualization Block */}
              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-neutral-500 tracking-wider block mb-1">Overall Placement Readiness</span>
                    <span className="text-2xl font-semibold text-white tracking-tight">87.4%</span>
                  </div>
                  <div className="text-[11px] text-sky-400 font-mono flex items-center gap-1">
                    <Activity className="w-3 h-3" /> +4.2% this week
                  </div>
                </div>
                
                {/* Custom Analytical Bar Charts */}
                <div className="h-28 w-full bg-neutral-950/50 rounded-lg border border-white/[0.02] flex items-end justify-between p-4 gap-2">
                  {[45, 60, 40, 75, 50, 85, 90, 65, 70, 80, 95, 70].map((height, i) => (
                    <div key={i} className="flex-1 bg-neutral-900 rounded-t-sm h-full flex items-end">
                      <div 
                        className="w-full bg-gradient-to-t from-neutral-800 to-neutral-600 rounded-t-sm group-hover:from-sky-500 transition-all duration-500" 
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COMPONENT 2: THE APPLICATION TRACKER (Elevated Medium Layer) */}
            <motion.div 
              style={{ y: yForeground }}
              className="absolute top-[8%] left-[-5%] w-[58%] rounded-xl bg-[#090d16]/95 border border-white/[0.08] p-4 shadow-xl pointer-events-none"
              style={{
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-medium text-neutral-300 tracking-wide flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-neutral-400" /> Active Pipeline
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">4 Applications</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { company: 'Stripe', role: 'Frontend Engineer', status: 'Interviewing', color: 'text-sky-400' },
                  { company: 'Linear', role: 'Product Designer', status: 'Technical Review', color: 'text-orange-400' },
                  { company: 'Vercel', role: 'Solutions Architect', status: 'Offer Received', color: 'text-emerald-400' }
                ].map((app, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-white/[0.01] border border-white/[0.03]">
                    <div>
                      <h4 className="text-xs font-medium text-neutral-200">{app.company}</h4>
                      <p className="text-[10px] text-neutral-500">{app.role}</p>
                    </div>
                    <span className={`text-[10px] font-medium ${app.color} bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04]`}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* COMPONENT 3: INTERVIEW SCORE CARD (Elevated Foreground Layer) */}
            <motion.div 
              style={{ y: yForeground }}
              className="absolute bottom-[12%] left-[-2%] w-[48%] rounded-xl bg-[#0b111e]/95 border border-white/[0.08] p-4 shadow-xl pointer-events-none"
              style={{
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-neutral-300 tracking-wide flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" /> Mock Performance
                </span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="text-3xl font-semibold text-white tracking-tight">9.2</span>
                <span className="text-xs text-neutral-500">/ 10.0</span>
              </div>
              <div className="w-full bg-neutral-900 h-1.5 rounded-full mt-3 overflow-hidden border border-white/[0.02]">
                <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[92%] rounded-full" />
              </div>
              <p className="text-[10px] text-neutral-500 mt-2.5 font-normal">Surpassed 96% of active candidates this cohort.</p>
            </motion.div>

            {/* COMPONENT 4: THE COGNITIVE AI FEEDBACK WORKSPACE (Supreme Foreground Layer) */}
            <motion.div 
              style={{ y: useTransform(scrollY, [0, 800], [0, -180]) }}
              className="absolute right-[-6%] bottom-[22%] w-[54%] rounded-xl bg-[#0c1222]/95 border border-sky-500/20 p-4 shadow-2xl pointer-events-none"
              style={{
                boxShadow: `
                  0 0 0 1px rgba(14, 165, 233, 0.15),
                  0 25px 50px -12px rgba(0, 0, 0, 0.7),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.08)
                `
              }}
            >
              {/* Simulated Ambient Sky Blue lighting on the top lip of this specific workspace card */}
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="p-1 rounded bg-sky-500/10 border border-sky-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <span className="text-xs font-medium text-neutral-200 tracking-wide">Placely Feedback Engine</span>
              </div>

              <div className="space-y-2 text-[11px] text-neutral-400 leading-normal">
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-neutral-500 block text-[9px] uppercase tracking-wider mb-0.5">Behavioral Review</span>
                  "System detected strong structured leadership metrics. Minimize filler phrases during system design transitions."
                </div>
                <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[10px] bg-sky-950/20 border border-sky-900/30 px-2 py-1 rounded">
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" /> Recommended: Execute Architecture Drills
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* FOOTER REFLECTION HORIZON LINE */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}