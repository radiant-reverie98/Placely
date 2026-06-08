import React, { useState } from "react";

export default function ProblemSection() {
  const [activeMoment, setActiveMoment] = useState(1);

  const moments = [
    {
      id: 1,
      tag: "Moment 01",
      title: "Everything is scattered",
      description: "Applications, system design notes, platform alerts, and calendar invites live across Notion, Sheets, and raw email folders. You spend more time managing tools than improving code.",
      badgeColor: "text-sky-400 bg-sky-950/30 border-sky-500/20"
    },
    {
      id: 2,
      tag: "Moment 02",
      title: "Zero progress visibility",
      description: "You are solving algorithm exercises and conducting practice runs, but have no objective metrics mapping your actual speed, architecture growth, or cohort standings.",
      badgeColor: "text-orange-400 bg-orange-950/30 border-orange-500/20"
    },
    {
      id: 3,
      tag: "Moment 03",
      title: "The silent feedback loop",
      description: "You complete challenging technical screenings, submit your design templates, and wait. Weeks later, you receive a cold, automated rejection template with zero guidance.",
      badgeColor: "text-neutral-400 bg-neutral-900 border-neutral-800"
    }
  ];

  return (
    <section className="relative w-full bg-[#030712] text-white py-32 lg:py-48 overflow-hidden font-sans antialiased select-none">
      
      {/* 1. BLUEPRINT BACKGROUND GRID OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
          }}
        />
      </div>

      {/* 2. VOLUMETRIC AMBIENT LIGHTING SYSTEM (SKY BLUE & ORANGE) */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-orange-500/[0.02] rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] bg-sky-500/[0.03] rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

      {/* 3. EDITORIAL SECTION HEADER */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 mb-24 lg:mb-32">
        <div className="max-w-3xl text-left space-y-5">
          {/* Subtle Accent Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <svg className="w-3.5 h-3.5 text-orange-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-mono">
              The Challenge
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            Placement preparation <br />
            <span className="text-neutral-500">shouldn't feel chaotic.</span>
          </h2>

          <p className="text-[15px] sm:text-base text-neutral-400 font-normal leading-relaxed tracking-wide max-w-2xl">
            Most candidates attempt to manage live applications, complex code architectures, timeline triggers, and evaluation feedback across separate, disconnected platforms. The result is administrative exhaustion.
          </p>
        </div>
      </div>

      {/* 4. ASYMMETRIC NARRATIVE ENVIRONMENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center z-10">
        
        {/* LEFT COMPOSITION: DYNAMIC WORKSPACE SELECTOR */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {moments.map((moment) => (
            <div
              key={moment.id}
              onClick={() => setActiveMoment(moment.id)}
              className={`group p-6 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeMoment === moment.id
                  ? 'bg-gradient-to-b from-white/[0.02] to-transparent border-white/[0.1] shadow-2xl'
                  : 'bg-transparent border-transparent hover:border-white/[0.03]'
              }`}
            >
              {/* Active internal highlight glow */}
              {activeMoment === moment.id && (
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
              )}

              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded border ${moment.badgeColor}`}>
                  {moment.tag}
                </span>
                {activeMoment === moment.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                )}
              </div>

              <h3 className={`text-lg sm:text-xl font-medium tracking-tight transition-colors duration-300 ${
                activeMoment === moment.id ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
              }`}>
                {moment.title}
              </h3>

              <p className={`text-xs sm:text-sm mt-3 leading-relaxed tracking-wide transition-opacity duration-300 ${
                activeMoment === moment.id ? 'opacity-80 text-neutral-300' : 'opacity-40 text-neutral-500'
              }`}>
                {moment.description}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COMPOSITION: EXPERIMENTAL CHAOS CHASSIS PANEL */}
        <div className="lg:col-span-7 flex items-center justify-center lg:justify-end w-full">
          <div 
            className="relative w-full max-w-[550px] aspect-[1.15] bg-[#070911]/60 border border-white/[0.05] rounded-2xl p-6 shadow-2xl overflow-hidden transition-all duration-500"
            style={{
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.95), inset 0 1px 0 0 rgba(255,255,255,0.04)'
            }}
          >
            {/* Gloss Edge Highlight (Matches Hero Concept) */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-orange-500/0 via-orange-400/20 to-transparent pointer-events-none" />

            {/* MOMENT 1: COGNITIVE SCATTER VISUALIZATION */}
            {activeMoment === 1 && (
              <div className="w-full h-full flex flex-col justify-between animate-fadeIn">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Unsynchronized Datasets</span>
                  <span className="text-[10px] font-mono text-orange-400 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg> Disconnected
                  </span>
                </div>

                <div className="relative flex-1 flex items-center justify-center">
                  {/* Floating Mock Notion Feed */}
                  <div className="absolute top-2 left-2 w-[55%] bg-white/[0.01] border border-white/[0.04] p-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded bg-sky-500" />
                      <span className="text-[9px] font-mono text-neutral-400">Notion Tracker.db</span>
                    </div>
                    <div className="h-1.5 w-[85%] bg-neutral-900 rounded" />
                    <div className="h-1.5 w-[50%] bg-neutral-900 rounded mt-2" />
                  </div>

                  {/* Overlapping Sheet Window */}
                  <div className="absolute top-16 right-2 w-[50%] bg-white/[0.01] border border-white/[0.04] p-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-2.5 h-2.5 rounded bg-emerald-500" />
                      <span className="text-[9px] font-mono text-neutral-400">Applications_2026.xlsx</span>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 w-full bg-neutral-900 rounded" />
                      <div className="h-1 w-full bg-neutral-900 rounded" />
                    </div>
                  </div>

                  {/* Warning Indicator Card */}
                  <div className="absolute bottom-4 left-6 w-[60%] bg-[#1c0d0a]/30 border border-orange-500/20 p-3 rounded-lg shadow-lg flex items-start gap-2.5">
                    <div className="p-1 rounded bg-orange-500/10 text-orange-400 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold text-orange-400 block uppercase">Conflict Detected</span>
                      <p className="text-[9px] text-neutral-400 leading-normal mt-0.5">Stripe Tech Interview coincides with Vercel OA deadline.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MOMENT 2: PROGRESS MATRIX GAP (BLIND BLOCKED GAUGE) */}
            {activeMoment === 2 && (
              <div className="w-full h-full flex flex-col justify-between animate-fadeIn">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Uncalibrated Parameters</span>
                  <span className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                    Ready state: Unknown
                  </span>
                </div>

                <div className="relative flex-1 flex flex-col items-center justify-center space-y-4">
                  {/* Radial Loader Loop (Simulating incomplete calibration) */}
                  <div className="relative w-24 h-24 flex items-center justify-center rounded-full border border-dashed border-white/[0.06]">
                    <div className="absolute inset-2 rounded-full border border-neutral-900 flex items-center justify-center text-xs font-mono text-neutral-500 font-semibold">
                      ?
                    </div>
                    <div className="absolute inset-0 rounded-full border-t border-r border-orange-500/30 animate-spin" />
                  </div>

                  <div className="text-center max-w-xs space-y-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">Readiness Vector Score</span>
                    <p className="text-xs text-neutral-500 leading-normal">
                      Cannot resolve standing percentile. Perform multiple technical benchmarking trials to compute capability score.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* MOMENT 3: THE AUTOMATED BLACK BOX LOOP */}
            {activeMoment === 3 && (
              <div className="w-full h-full flex flex-col justify-between animate-fadeIn">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Silent Feedback Terminal</span>
                  <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                    Connection Closed
                  </span>
                </div>

                <div className="relative flex-1 flex flex-col justify-center gap-3">
                  {/* Test Runner Suite Simulation (Passing code, yet rejected) */}
                  <div className="bg-black/40 border border-white/[0.02] p-3 rounded-lg font-mono text-[9px] text-neutral-400 leading-relaxed space-y-1">
                    <div className="text-emerald-400">✓ Stripe Coding Challenge resolved (All 15 tests passed)</div>
                    <div>Execution speed: 18ms (Top 3.4%)</div>
                    <div className="text-neutral-500">&gt; Status: Response pending review...</div>
                  </div>

                  {/* Overlapping Cold Reject Template Letter Card */}
                  <div className="absolute left-4 right-4 bottom-2 bg-[#1c0b09]/90 border border-red-500/10 p-4 rounded-xl shadow-2xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-red-400 font-bold tracking-wider uppercase">Automated Notification</span>
                      <span className="text-[9px] text-neutral-500 font-mono">14 Days Later</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-normal">
                      "Thank you for taking the time... we were highly impressed by your background, however we have decided to move forward with other candidates at this time."
                    </p>
                    <div className="text-[9px] font-mono text-neutral-500 border-t border-white/[0.03] pt-2">
                      Reason: Unavailable | Critique Loop: Closed
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Global CSS Inject to support clean component-level Fade transitions */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}