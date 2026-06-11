import Link from "next/link";

const usps = [
  "Actively coaching competitive physique athletes — right now, not years ago",
  "Science-based programming, zero bro-science",
  "Every plan built from scratch for your body and schedule",
  "Sub-24-hour response times, every time",
  "Real-world bodybuilding experience under the bar and on stage",
  "Advanced command of nutrition, recovery, and performance",
];

export default function Coach() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* REPLACE: coach photo, 4:5 */}
          <div className="placeholder-img aspect-[4/5] w-full max-w-md rounded-lg lg:order-2">
            Coach Photo
            <br />
            (Keating Garriss)
          </div>

          <div className="lg:order-1">
            <p className="eyebrow mb-3">Meet your coach</p>
            <h2 className="h-display text-4xl sm:text-5xl">
              Keating <span className="text-accent">Garriss</span>
            </h2>
            <p className="mt-5 leading-relaxed text-zinc-400">
              I built KG Performance Systems for one reason: most coaching is
              copy-paste templates sold by people who&apos;ve never taken a
              physique to its limit. I coach competitive bodybuilders through
              prep, powerlifters through meets, and everyday lifters through the
              best transformations of their lives — all with the same
              evidence-based, individualized approach.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              Over 65,000 lifters follow my training content. A select few get
              coached directly. If you&apos;re serious, I want to talk to you.
            </p>

            <ul className="mt-7 space-y-3">
              {usps.map((u) => (
                <li key={u} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 text-green-500" aria-hidden>✓</span>
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link href="/book-call" className="btn-ghost">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
