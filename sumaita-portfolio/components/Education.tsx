import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education({ data = education }: { data?: typeof education }) {
  return (
    <section id="education" className="border-t border-border py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3">Education</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic timeline
          </h2>
        </Reveal>

        <div className="relative mt-14 space-y-10">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-[19px]" />
          {data.map((edu, i) => (
            <Reveal key={edu.institution} delay={i * 0.1}>
              <div className="relative flex gap-6 pl-12 md:gap-10 md:pl-16">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-accent md:h-10 md:w-10">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{edu.institution}</h3>
                    <span className="whitespace-nowrap text-xs font-medium text-secondary">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-secondary">{edu.degree}</p>
                  {edu.detail && (
                    <p className="mt-2 text-sm font-medium text-accent">{edu.detail}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
