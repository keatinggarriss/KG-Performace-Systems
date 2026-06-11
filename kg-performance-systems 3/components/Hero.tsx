import Link from "next/link";
import { site } from "@/lib/site";

const stats = [
  { value: site.followers, label: "Athletes follow my training" },
  { value: "Active", label: "Physique athletes in prep right now" },
  { value: "<24h", label: "Coach response time" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        <p className="eyebrow mb-5">1-on-1 Evidence-Based Coaching</p>

        <h1 className="h-display max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
          Built by science.
          <br />
          <span className="text-accent">Proven on stage.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          1-on-1 coaching for men who are done guessing. Evidence-based training
          and nutrition, individualized to your body, your schedule, and your
          goal — from your first cut to the competition stage.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link href="/apply" className="btn-primary">
            Apply for Coaching
          </Link>
          <Link href="/results" className="btn-ghost">
            See Real Results
          </Link>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-line pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-accent sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
