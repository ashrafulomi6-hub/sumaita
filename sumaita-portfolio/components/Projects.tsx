"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import Reveal from "./Reveal";
import { projects, type Project } from "@/lib/data";

const categories = ["All", "Web", "AI/ML", "Tool"] as const;

export default function Projects({ data = projects }: { data?: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return data.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const haystack = `${p.title} ${p.description} ${p.tech.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [data, query, category]);

  return (
    <section id="projects" className="border-t border-border py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3">Projects</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                    category === c
                      ? "bg-primary text-background"
                      : "border border-border text-secondary hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 4) * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/50">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <span className="whitespace-nowrap rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-secondary">
                    {project.category}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4 border-t border-border pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary transition-colors hover:text-accent"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary transition-colors hover:text-accent"
                    >
                      <ExternalLink size={14} /> Live demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full py-12 text-center text-sm text-secondary">
              No projects match that search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
