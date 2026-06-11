const steps = [
  {
    title: "Apply",
    body: "Fill out the coaching application (3 minutes). It tells me your goal, training history, and whether we're a fit.",
  },
  {
    title: "Strategy Call",
    body: "If you qualify, book a free 30-minute consultation. We map out exactly how I'd attack your goal — no pressure, no scripts.",
  },
  {
    title: "Transform",
    body: "Your individualized system is delivered within 72 hours of onboarding. Then we execute, check in weekly, and adjust until the mirror agrees.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="eyebrow mb-3">How it works</p>
        <h2 className="h-display text-4xl sm:text-5xl">
          Three steps. <span className="text-accent">Zero guesswork.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-lg border border-line bg-base p-7">
              <span className="absolute -top-5 left-7 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-xl text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
