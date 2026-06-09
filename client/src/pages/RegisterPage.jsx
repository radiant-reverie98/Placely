import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering...', { name, email, password });
  };

  const handleGoogleSignup = () => {
    console.log('Initiating Google OAuth Signup...');
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030712] overflow-hidden flex items-center justify-center p-6 select-none">
      
      {/* LAYER 0: PERSPECTIVE GRID ENVIRONMENT (Matching Hero) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
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
      </div>

      {/* LIGHTING SYSTEM (ENVIRONMENTAL VOLUMETRIC GLOWS) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      {/* REGISTER CARD COMPOSITION */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full max-w-[420px] z-10 my-8"
      >
        <div 
          className="w-full rounded-2xl bg-[#070a13]/90 border border-white/[0.06] shadow-2xl overflow-hidden p-8 backdrop-blur-xl"
          style={{
            boxShadow: '0 30px 70px -20px rgba(0,0,0,0.8), inset 0 1px 0 0 rgba(255,255,255,0.05)'
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4 shadow-inner">
              <Sparkles className="w-6 h-6 text-sky-400" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">
              Get started
            </h2>
            <p className="text-[14px] text-neutral-400 font-normal tracking-wide">
              Create your Placely account to track your placement journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name Input */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-neutral-300 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="w-4 h-4 text-neutral-500 group-focus-within:text-sky-400 transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full h-11 bg-white/[0.02] border border-white/[0.08] rounded-lg pl-10 pr-4 text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.04] transition-all duration-300 shadow-inner"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-neutral-300 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-neutral-500 group-focus-within:text-sky-400 transition-colors" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@university.edu"
                  required
                  className="w-full h-11 bg-white/[0.02] border border-white/[0.08] rounded-lg pl-10 pr-4 text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.04] transition-all duration-300 shadow-inner"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-neutral-300 ml-1">Create Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-neutral-500 group-focus-within:text-sky-400 transition-colors" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-11 bg-white/[0.02] border border-white/[0.08] rounded-lg pl-10 pr-4 text-[14px] text-white placeholder:text-neutral-600 focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.04] transition-all duration-300 shadow-inner"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit"
                className="group relative flex items-center justify-center gap-2 w-full h-11 overflow-hidden rounded-lg text-[14px] font-medium tracking-wide text-neutral-950 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                Create Account
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/[0.08]"></div>
            <span className="px-4 text-[11px] font-medium text-neutral-500 tracking-wider uppercase">
              Or register with
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/[0.08]"></div>
          </div>

          {/* Google SSO Button */}
          <button 
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-3 h-11 rounded-lg bg-white/[0.02] border border-white/[0.08] text-[14px] font-medium text-neutral-300 hover:bg-white/[0.06] hover:text-white transition-all duration-300 shadow-inner active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </button>

          {/* Footer Action */}
          <div className="mt-6 text-center">
            <p className="text-[13px] text-neutral-400">
              Already have an account?{' '}
              <a href="#" className="text-white hover:text-sky-400 font-medium transition-colors">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* FOOTER REFLECTION HORIZON LINE (Matching Hero) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}