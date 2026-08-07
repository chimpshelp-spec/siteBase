import React from "react";

/**
 * Minimalist line-art icons for the eight elements.
 * Each inherits `currentColor` for stroke so the parent can color it.
 */
export default function ElementIcon({ name, className = "h-full w-full" }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (name) {
    case "Fire":
      return (
        <svg {...common}>
          <path d="M32 10c6 8 12 12 12 22a12 12 0 0 1-24 0c0-4 2-7 4-9 1 3 3 4 4 4-2-6 0-12 4-17Z" />
        </svg>
      );
    case "Water":
      return (
        <svg {...common}>
          <path d="M32 8c8 10 14 17 14 26a14 14 0 0 1-28 0c0-9 6-16 14-26Z" />
          <path d="M24 36c1 4 4 6 8 6" opacity="0.6" />
        </svg>
      );
    case "Lightning":
      return (
        <svg {...common}>
          <path d="M36 6 16 36h12l-4 22 20-30H32l4-22Z" />
        </svg>
      );
    case "Nature":
      return (
        <svg {...common}>
          <path d="M32 56V28" />
          <path d="M32 36c-10 0-18-6-18-16 10 0 18 6 18 16Z" />
          <path d="M32 28c0-10 8-16 18-16 0 10-8 16-18 16Z" />
        </svg>
      );
    case "Ice":
      return (
        <svg {...common}>
          <path d="M32 8v48M14 18l36 28M50 18 14 46" />
          <path d="M32 8l-8 6M32 8l8 6M32 56l-8-6M32 56l8-6" />
        </svg>
      );
    case "Wind":
      return (
        <svg {...common}>
          <path d="M10 24h26a6 6 0 1 0-6-6" />
          <path d="M10 34h36a6 6 0 1 1-6 6" />
          <path d="M10 44h22a5 5 0 1 1-5 5" />
        </svg>
      );
    case "Earth":
      return (
        <svg {...common}>
          <path d="M6 50 22 26l8 10 8-16 20 30Z" />
          <path d="M6 50h52" opacity="0.5" />
        </svg>
      );
    case "Shadow":
      return (
        <svg {...common}>
          <path d="M40 12a20 20 0 1 0 12 30 16 16 0 0 1-12-30Z" />
        </svg>
      );
    default:
      return null;
  }
}