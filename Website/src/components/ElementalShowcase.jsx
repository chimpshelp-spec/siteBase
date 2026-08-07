const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ElementIcon from "@/components/ElementIcon";

const ICON_BASE = "https://media.db.com/images/public/6a76156580fe4f5c6ec64a70";
const ELEMENTS = [
{ name: "Fire", icon: `${ICON_BASE}/ed9f11c3c_fire.png`, color: "#FF4500", glow: "#FFD700", lore: "Born of the world's first eruption. Fire bends heat and fury — a force that consumes to create. Masters of Fire leave only ash and renewal in their wake." },
{ name: "Water", icon: `${ICON_BASE}/28d942d71_water.png`, color: "#1E90FF", glow: "#00BFFF", lore: "The patient architect. Water carves canyons, heals wounds, and drowns armies. It flows around resistance and remembers every shape it has touched." },
{ name: "Lightning", icon: `${ICON_BASE}/9cdae9f2e_lightning.png`, color: "#FFD700", glow: "#FFFACD", lore: "Pure velocity made visible. Lightning strikes before thought arrives. Those who channel it move between heartbeats — and pay for speed in focus." },
{ name: "Nature", icon: `${ICON_BASE}/9219c2366_nature.png`, color: "#228B22", glow: "#7CFC00", lore: "The slow empire. Nature grows through stone and reclaims ruins. Its wielders command roots, venom, and bloom — life as both shield and siege." },
{ name: "Ice", icon: `${ICON_BASE}/d5d0df7f6_ice.png`, color: "#87CEEB", glow: "#E0FFFF", lore: "Stillness weaponized. Ice freezes motion, locks wounds shut, and shatters what it cannot hold. It is the patience of glaciers, sharp as glass." },
{ name: "Wind", icon: `${ICON_BASE}/b59ec823a_wind.png`, color: "#F8F8FF", glow: "#DCDCDC", lore: "The unseen sovereign. Wind lifts, cuts, and carries. It answers no wall and trusts no anchor — those who ride it trade certainty for freedom." },
{ name: "Earth", icon: `${ICON_BASE}/c32262116_rock.png`, color: "#A0522D", glow: "#FF8C00", lore: "The unmovable oath. Earth is weight, foundation, and memory. Its keepers raise mountains and stand where nothing else can — slow to anger, slower to fall." },
{ name: "Shadow", icon: `${ICON_BASE}/db84cbbee_joe-Photoroom1.png`, color: "#4B0082", glow: "#9400D3", lore: "The space between things. Shadow hides, mirrors, and devours light. Those who bind it walk unseen and speak in echoes — power paid for in secrecy." }];

function Orb({ el, index, selected, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || selected;
  return (
    <motion.div
      className="group flex cursor-pointer flex-col items-center"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onSelect(el)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}>
      
      <motion.div
        className="w-[50%] select-none text-[#4A5568] sm:w-[60%]"
        style={{ filter: active ? `drop-shadow(0 0 24px ${el.glow})` : "none" }}
        animate={{ scale: active ? 1.06 : 1, rotate: active ? index % 2 === 0 ? 4 : -4 : 0, color: active ? el.glow : "#4A5568" }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -6 }}>
        
        <ElementIcon name={el.name} />
      </motion.div>
      <motion.span
        className="mt-4 font-mono text-xs uppercase tracking-[0.35em]"
        animate={{ color: active ? el.glow : "#4A5568" }}
        transition={{ duration: 0.4 }}>
        
        {el.name}
      </motion.span>
    </motion.div>);

}

export default function ElementalShowcase() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-24 sm:py-32">
      <div className="mb-12 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#4A5568]">CHECK THE LORE OF THE ELEMENTS

        </span>
        <h2 className="mt-3 text-3xl font-light tracking-tight text-[#E2E8F0] sm:text-5xl">SELECT YOUR Elemental

        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
        {ELEMENTS.map((el, i) =>
        <Orb key={el.name} el={el} index={i} selected={selected?.name === el.name} onSelect={setSelected} />
        )}
      </div>

      {/* lore panel */}
      <div className="mt-12 min-h-[140px]">
        <AnimatePresence mode="wait">
          {selected ?
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-[640px] text-center">
            
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="h-px w-10" style={{ background: selected.glow }} />
                <span
                className="font-mono text-sm uppercase tracking-[0.4em]"
                style={{ color: selected.glow }}>
                
                  {selected.name}
                </span>
                <span className="h-px w-10" style={{ background: selected.glow }} />
              </div>
              <p className="text-lg leading-relaxed text-[#E2E8F0]/80">{selected.lore}</p>
              <button
              onClick={() => setSelected(null)}
              className="mt-6 font-mono text-[10px] uppercase tracking-[0.35em] text-[#4A5568] transition-colors hover:text-[#E2E8F0]">
              
                dismiss
              </button>
            </motion.div> :

          <motion.p
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto max-w-[640px] text-center font-mono text-[10px] uppercase tracking-[0.35em] text-[#4A5568]">
            
              Tap an orb to reveal its lore
            </motion.p>
          }
        </AnimatePresence>
      </div>
    </section>);

}