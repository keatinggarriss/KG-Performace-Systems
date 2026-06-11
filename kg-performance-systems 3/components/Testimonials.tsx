export type Testimonial = {
  name: string;
  service: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "REPLACE — Client Name",
    service: "1-on-1 Coaching",
    quote:
      "I'd been spinning my wheels for two years. In 16 weeks with Keating I dropped 18 pounds while my lifts went UP. The weekly adjustments are what make the difference — nothing is left on autopilot.",
  },
  {
    name: "REPLACE — Client Name",
    service: "Contest Prep",
    quote:
      "First show, first prep, and I never felt lost once. Check-ins were detailed, answers came fast, and peak week was dialed to the gram. Placed top 3 as a first-timer.",
  },
  {
    name: "REPLACE — Client Name",
    service: "Nutrition Only",
    quote:
      "I thought I knew nutrition until I saw how he structured my intake around my training. Recomp I couldn't achieve in 3 years happened in 6 months.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="eyebrow mb-3">What clients say</p>
        <h2 className="h-display text-4xl sm:text-5xl">
          Don&apos;t take <span className="text-accent">my word for it.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-lg border border-line bg-base p-7">
              <div className="mb-4 text-accent" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                {/* REPLACE: client avatar */}
                <div className="placeholder-img h-10 w-10 shrink-0 rounded-full text-[8px]">IMG</div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{t.service}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
