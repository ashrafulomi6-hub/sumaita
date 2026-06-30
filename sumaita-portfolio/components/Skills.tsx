import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills({ data = skillGroups }: { data?: typeof skillGroups }) {
  return (
    <section id="skills" className="border-t border-border py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3">Skills</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {data.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/50">
                <h3 className="font-display text-base font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
