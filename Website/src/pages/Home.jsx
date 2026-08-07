const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ElementalShowcase from "@/components/ElementalShowcase";

const LOGO_URL = "https://media.db.com/images/public/6a760cf7f7782023384a3fe2/256a2e377_34bc5bc64_generated_image-removebg-preview.png";

const START_DATE = new Date("2026-01-01T00:00:00Z").getTime();
const RELEASE_DATE = new Date("2026-12-10T00:00:00Z").getTime();

function getTimeRemaining() {
  const now = Date.now();
  const total = RELEASE_DATE - now;
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0, ms: 0 };
  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor(total / 3600000 % 24),
    minutes: Math.floor(total / 60000 % 60),
    seconds: Math.floor(total / 1000 % 60),
    ms: total % 1000
  };
}

function getProgress() {
  const elapsed = Date.now() - START_DATE;
  const span = RELEASE_DATE - START_DATE;
  return Math.max(0, Math.min(1, elapsed / span));
}

const pad = (n, len = 2) => String(n).padStart(len, "0");

export default function Home() {
  const navigate = useNavigate();
  const [time, setTime] = useState(getTimeRemaining());
  const [progress, setProgress] = useState(getProgress());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeRemaining());
      setProgress(getProgress());
    }, 33);
    return () => clearInterval(id);
  }, []);

  const pct = progress * 100;
  const stats = [
  { label: "DAYS", value: pad(time.days, 3) },
  { label: "HOURS", value: pad(time.hours) },
  { label: "MINUTES", value: pad(time.minutes) },
  { label: "SECONDS", value: pad(time.seconds) }];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0A0B0D] text-[#E2E8F0] font-body">
      {/* starfield */}
      <div className="pointer-events-none fixed inset-0">
        {PARTICLES.map((p, i) =>
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, opacity: p.opacity }}
          animate={{ opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }} />

        )}
      </div>

      {/* top status */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 font-mono text-[11px] tracking-[0.3em] text-[#4A5568] uppercase sm:px-10">
        <span>Elemental</span>
        <span className="hidden sm:inline">Release · 12.10.2026</span>
        <span className="sm:hidden">12.10.2026</span>
      </div>

      {/* hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-60px)] flex-col items-center justify-center px-6 pb-32 pt-10">
        <motion.img
          src={LOGO_URL}
          alt="ELEMENTAL"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-10 w-[min(240px,52vw)] select-none drop-shadow-[0_0_40px_rgba(46,0,79,0.6)]"
          draggable={false} />
        

        <div className="mb-14 grid w-full max-w-[640px] grid-cols-4 gap-3 sm:gap-6">
          {stats.map((s, i) =>
          <motion.div
            key={s.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}>
            
              <div className="font-mono text-3xl font-light tabular-nums tracking-tight text-[#E2E8F0] sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[9px] tracking-[0.35em] text-[#4A5568] sm:text-[10px]">
                {s.label}
              </div>
            </motion.div>
          )}
        </div>

        <div className="w-full max-w-[640px]">
          <div className="flex items-end justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#4A5568]">
              World Completion
            </span>
            <motion.span
              className="font-mono text-sm tabular-nums text-[#CEFB44]"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}>
              
              {pct.toFixed(2)}%
            </motion.span>
          </div>
        </div>

        <motion.div
          className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#4A5568]"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity }}>
          
          <ChevronDown /> scroll to manifest <ChevronDown />
        </motion.div>
      </section>

      {/* elemental showcase */}
      <ElementalShowcase />

      {/* wishlist CTA */}
      <section className="relative z-10 flex flex-col items-center px-6 pb-40 pt-10 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#4A5568]">
          The Final Integration
        </span>
        <h2 className="mt-4 max-w-[640px] text-2xl font-light leading-snug text-[#E2E8F0] sm:text-4xl">releasing ON STEAM DEC. 10, 2026

        </h2>
        

        
      </section>

      {/* horizon progress bar */}
      <div className="fixed bottom-4 left-0 z-20 w-full">
        <div className="relative h-[3px] w-full bg-[#E2E8F0]/10">
          <motion.div
            className="absolute left-0 top-0 h-full"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, #FFFFFF 100%)",
              boxShadow: "0 0 18px rgba(255,255,255,0.7), 0 0 4px rgba(255,255,255,1)"
            }} />
          
          <motion.div
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white"
            style={{ left: `${pct}%`, boxShadow: "0 0 20px rgba(255,255,255,0.9)" }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }} />
          
        </div>
        <div className="flex items-center justify-between bg-[#0A0B0D]/80 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#4A5568] backdrop-blur-sm sm:px-10">
          <span>PROGRESS</span>
          <span className="hidden tabular-nums text-[#E2E8F0]/60 sm:inline">
            {pad(time.days, 3)}:{pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}.{pad(time.ms, 3)}
          </span>
          <span className="tabular-nums text-[#E2E8F0]/60 sm:hidden">{pad(time.days, 3)}d {pad(time.hours)}h</span>
        </div>
      </div>
    </div>);

}

const ChevronDown = () =>
<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>;

const PARTICLES = Array.from({ length: 12 }, () => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: `${Math.random() * 2 + 1}px`,
  opacity: Math.random() * 0.5 + 0.3,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 4
}));