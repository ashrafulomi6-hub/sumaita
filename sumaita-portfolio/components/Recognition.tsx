import { Award, Download, Trophy, Medal } from "lucide-react";
import Reveal from "./Reveal";
import { certificates, hackathons, achievements } from "@/lib/data";

export default function Recognition({
  certificates: certs = certificates,
  hackathons: hacks = hackathons,
  achievements: ach = achievements,
}: {
  certificates?: typeof certificates;
  hackathons?: typeof hackathons;
  achievements?: typeof achievements;
}) {
  return (
    <section id="recognition" className="border-t border-border py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3">Recognition</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Certificates &amp; achievements
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-surface p-7">
              <Award className="text-accent" size={22} />
              <h3 className="mt-4 font-display text-base font-semibold">Certificates</h3>
              <div className="mt-5 space-y-4">
                {certs.map((c) => (
                  <div key={c.title} className="border-t border-border pt-4 first:border-0 first:pt-0">
                    <p className="text-sm font-medium">{c.title}</p>
                    <p className="mt-1 text-xs text-secondary">
                      {c.issuer} · {c.date}
                    </p>
                    {c.url && (
                      <a
                        href={c.url}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent"
                      >
                        <Download size={12} /> View certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-surface p-7">
              <Trophy className="text-accent" size={22} />
              <h3 className="mt-4 font-display text-base font-semibold">Hackathons</h3>
              <div className="mt-5 space-y-4">
                {hacks.map((h) => (
                  <div key={h.title} className="border-t border-border pt-4 first:border-0 first:pt-0">
                    <p className="text-sm font-medium">{h.title}</p>
                    <p className="mt-1 text-xs text-secondary">{h.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-border bg-surface p-7">
              <Medal className="text-accent" size={22} />
              <h3 className="mt-4 font-display text-base font-semibold">Achievements</h3>
              <div className="mt-5 space-y-4">
                {ach.map((a) => (
                  <div key={a.title} className="border-t border-border pt-4 first:border-0 first:pt-0">
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="mt-1 text-xs text-secondary">
                      {a.detail} · {a.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
