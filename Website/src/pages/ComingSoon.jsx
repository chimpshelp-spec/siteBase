const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LOGO_URL = "https://media.db.com/images/public/6a760cf7f7782023384a3fe2/256a2e377_34bc5bc64_generated_image-removebg-preview.png";

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0A0B0D] px-6 text-center text-[#E2E8F0] font-body">
      <motion.img
        src={LOGO_URL}
        alt="ELEMENTAL"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-8 w-[min(200px,48vw)] select-none drop-shadow-[0_0_40px_rgba(46,0,79,0.6)]"
        draggable={false}
      />
      <motion.span
        className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#4A5568]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        The wait begins
      </motion.span>
      <motion.h1
        className="mt-4 max-w-[640px] text-3xl font-light leading-snug sm:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Coming Soon
      </motion.h1>
      <motion.p
        className="mt-4 max-w-[480px] text-base leading-relaxed text-[#E2E8F0]/70 sm:text-lg"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Elemental is still manifesting. The game isn't out yet — check back as we approach release on December 10, 2026.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          to="/"
          className="mt-10 inline-block border border-[#CEFB44]/40 px-8 py-3 font-mono text-xs uppercase tracking-[0.35em] text-[#CEFB44] transition-colors hover:bg-[#CEFB44] hover:text-[#0A0B0D]"
        >
          Return
        </Link>
      </motion.div>
    </div>
  );
}