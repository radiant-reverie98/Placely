import React from "react";

export default function AIFeedbackSection() {
  return (
    <section className="relative py-24 bg-[#0B0F14] text-[#E5E7EB] border-t border-[rgba(255,255,255,0.04)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Heading & Core Benefits Stack */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* Header Block */}
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#22D3EE] bg-[#22D3EE]/10 px-3 py-1 rounded-full border border-[#22D3EE]/20 inline-block">
                AI Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white pt-1">
                Know exactly what to improve next.
              </h2>
              <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-normal">
                Placely analyzes your performance and provides personalized feedback that helps you focus on the areas that matter most.
              </p>
            </div>

            {/* Three Supporting Benefits List */}
            <div className="space-y-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
              
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="mt-1 h-5 w-5 rounded-md bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">Personalized Insights</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 leading-relaxed">
                    Receive feedback tailored to your actual performance.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="mt-1 h-5 w-5 rounded-md bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">Actionable Recommendations</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 leading-relaxed">
                    Get clear next steps instead of generic advice.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="mt-1 h-5 w-5 rounded-md bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">Continuous Improvement</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 leading-relaxed">
                    Track progress over time and see how your skills evolve.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Large, High-Fidelity Realistic AI Feedback Workspace */}
          <div className="lg:col-span-7 w-full">
            <div className="w-full bg-[#111827] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-xl overflow-hidden">
              
              {/* Terminal Window Frame Header */}
              <div className="px-5 py-4 border-b border-[rgba(255,255,255,0.06)] bg-[#111827] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.12)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.12)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.12)]" />
                </div>
                <span className="text-xs text-[#9CA3AF]/50 font-mono select-none">evaluation_report_v2.log</span>
                <div className="w-6" />
              </div>

              {/* Workspace Content Canvas */}
              <div className="p-6 sm:p-8 bg-[#161F2E]/20 space-y-6">
                
                {/* Score Section */}
                <div className="flex items-center justify-between p-4 bg-[#161F2E] border border-[rgba(255,255,255,0.06)] rounded-xl">
                  <div>
                    <span className="text-xs text-[#9CA3AF] block font-medium uppercase tracking-wider">Assessment Performance</span>
                    <span className="text-2xl font-bold text-white mt-1 block">Technical Interview Mock #3</span>
                  </div>
                  <div className="h-14 w-14 rounded-xl bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-[#22D3EE] leading-none">78%</span>
                    <span className="text-[9px] uppercase tracking-wide text-[#9CA3AF] mt-1 font-semibold">Score</span>
                  </div>
                </div>

                {/* Split Evaluation Metrics: Strengths vs Improvements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Strengths Column */}
                  <div className="p-5 bg-[#111827] border border-[rgba(255,255,255,0.04)] rounded-xl space-y-3">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Verified Strengths
                    </h4>
                    <ul className="space-y-2 text-xs font-medium text-[#E5E7EB]">
                      <li className="flex items-center gap-2 bg-[#0B0F14]/50 p-2 rounded border border-[rgba(255,255,255,0.02)]">
                        <span className="text-emerald-400 font-bold">•</span> Problem Solving
                      </li>
                      <li className="flex items-center gap-2 bg-[#0B0F14]/50 p-2 rounded border border-[rgba(255,255,255,0.02)]">
                        <span className="text-emerald-400 font-bold">•</span> Logical Reasoning
                      </li>
                      <li className="flex items-center gap-2 bg-[#0B0F14]/50 p-2 rounded border border-[rgba(255,255,255,0.02)]">
                        <span className="text-emerald-400 font-bold">•</span> Time Management
                      </li>
                    </ul>
                  </div>

                  {/* Areas for Improvement Column */}
                  <div className="p-5 bg-[#111827] border border-[rgba(255,255,255,0.04)] rounded-xl space-y-3">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      Areas For Focus
                    </h4>
                    <ul className="space-y-2 text-xs font-medium text-[#E5E7EB]">
                      <li className="flex items-center gap-2 bg-[#0B0F14]/50 p-2 rounded border border-[rgba(255,255,255,0.02)]">
                        <span className="text-amber-400 font-bold">•</span> Dynamic Programming
                      </li>
                      <li className="flex items-center gap-2 bg-[#0B0F14]/50 p-2 rounded border border-[rgba(255,255,255,0.02)]">
                        <span className="text-amber-400 font-bold">•</span> System Design Fundamentals
                      </li>
                      <li className="flex items-center gap-2 opacity-40 bg-[#0B0F14]/30 p-2 rounded line-through border border-transparent">
                        <span className="text-gray-500 font-bold">•</span> Core Syntax Foundations
                      </li>
                    </ul>
                  </div>

                </div>

                {/* AI Coaching Actionable Suggestions Module */}
                <div className="p-5 bg-[#22D3EE]/5 border border-[#22D3EE]/20 rounded-xl space-y-3">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI Coach Suggestions</h4>
                  </div>
                  
                  {/* Suggestions Checked Stack */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 text-xs text-[#9CA3AF] leading-relaxed">
                      <span className="text-[#22D3EE] font-semibold mt-0.5">→</span>
                      <span>Practice medium-level DP problems to master subproblem optimization and array memoization states.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#9CA3AF] leading-relaxed">
                      <span className="text-[#22D3EE] font-semibold mt-0.5">→</span>
                      <span>Review common interview system design patterns, focusing explicitly on load balancer topologies.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#9CA3AF] leading-relaxed">
                      <span className="text-[#22D3EE] font-semibold mt-0.5">→</span>
                      <span>Improve solution explanation clarity by speaking through edge-case trade-offs before typing code.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}