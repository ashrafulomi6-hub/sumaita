import { Download, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { resume, contact, socialLinks } from "@/lib/data";

export function ResumeSection({ resume: data = resume }: { resume?: typeof resume }) {
  return (
    <section id="resume" className="border-t border-border py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-surface p-10 sm:flex-row sm:items-center md:p-14">
            <div>
              <p className="section-eyebrow mb-3">Resume</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Want the full picture?
              </h2>
              <p className="mt-3 max-w-md text-sm text-secondary">
                Download a complete overview of my education, skills, and project experience.
              </p>
            </div>
            <a
              href={data.url}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              <Download size={16} />
              {data.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection({
  contact: data = contact,
  socialLinks: links = socialLinks,
}: {
  contact?: typeof contact;
  socialLinks?: typeof socialLinks;
}) {
  return (
    <section id="contact" className="border-t border-border py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <p className="section-eyebrow mb-3">Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's work together
          </h2>
          <p className="mt-4 max-w-lg text-base text-secondary">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${data.email}`}
              className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <Mail className="text-accent" size={20} />
              <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                Email
              </span>
              <span className="text-sm font-medium">{data.email}</span>
            </a>
          </Reveal>

          {data.phone && (
            <Reveal delay={0.06}>
              <a
                href={`tel:${data.phone}`}
                className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <Phone className="text-accent" size={20} />
                <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                  Phone
                </span>
                <span className="text-sm font-medium">{data.phone}</span>
              </a>
            </Reveal>
          )}

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
              <MapPin className="text-accent" size={20} />
              <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                Location
              </span>
              <span className="text-sm font-medium">{data.address}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
