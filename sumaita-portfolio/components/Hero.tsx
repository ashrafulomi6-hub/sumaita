"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import TypingText from "./TypingText";
import { hero } from "@/lib/data";

function OrbitField() {
  const nodes = [
    { size: 10, radius: 130, duration: 22, delay: 0 },
    { size: 7, radius: 130, duration: 22, delay: -7.3 },
    { size: 8, radius: 130, duration: 22, delay: -14.6 },
    { size: 6, radius: 190, duration: 32, delay: -5 },
    { size: 9, radius: 190, duration: 32, delay: -16 },
    { size: 5, radius: 250, duration: 42, delay: -10 },
  ];

  return (
    <div className="relative hidden h-[420px] w-[420px] items-center justify-center md:flex" aria-hidden>
      <div className="absolute h-[160px] w-[160px] rounded-full border border-border" />
      <div className="absolute h-[260px] w-[260px] rounded-full border border-border" />
      <div className="absolute h-[360px] w-[360px] rounded-full border border-border" />

      <div className="absolute h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_4px_rgb(var(--accent)/0.45)]" />

      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute animate-spin-slow"
          style={{
            width: n.radius * 2,
            height: n.radius * 2,
            animationDuration: `${n.duration}s`,
            animationDelay: `${n.delay}s`,
          }}
        >
          <span
            className="absolute rounded-full bg-accent/80"
            style={{
              width: n.size,
              height: n.size,
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      ))}

      <div className="absolute h-full w-full animate-float">
        <div className="absolute right-6 top-10 h-12 w-12 rounded-2xl border border-border bg-surface/60 backdrop-blur-sm" />
      </div>
      <div className="absolute h-full w-full animate-float" style={{ animationDelay: "-3s" }}>
        <div className="absolute bottom-8 left-2 h-9 w-9 rotate-12 rounded-xl border border-border bg-surface/60 backdrop-blur-sm" />
      </div>
    </div>
  );
}

export default function Hero({ data = hero }: { data?: typeof hero }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow mb-4">{data.greeting}</p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {data.name}
          </h1>
          <p className="mt-4 font-display text-2xl font-medium sm:text-3xl">
            <TypingText words={data.roles} />
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary">
            {data.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={data.resumeUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex justify-center"
        >
          <OrbitField />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary transition-colors hover:text-accent"
      >
        <ArrowDown size={20} className="animate-float" />
      </a>
    </section>
  );
}
