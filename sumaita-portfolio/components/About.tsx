import Reveal from "./Reveal";
import { about } from "@/lib/data";

export default function About({ data = about }: { data?: typeof about }) {
  return (
    <section id="about" className="border-t border-border py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.6fr_1fr]">
          <Reveal>
            <p className="section-eyebrow mb-3">{data.eyebrow}</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {data.heading}
            </h2>
          </Reveal>

          <div className="space-y-6">
            {data.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-secondary">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={data.paragraphs.length * 0.08}>
              <p className="border-l-2 border-accent pl-4 text-base font-medium leading-relaxed text-primary">
                {data.mission}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
