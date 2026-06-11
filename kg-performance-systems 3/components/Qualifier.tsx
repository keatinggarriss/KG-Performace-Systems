const forYou = [
  "You'll train 3–6 days per week and track your nutrition",
  "You want fat loss, muscle, recomp, strength, or a stage debut",
  "You're coachable — you follow the plan and report the data",
  "You're ready to invest from $400/month in getting it right",
];

const notForYou = [
  "You want a 4-week quick fix or a magic supplement stack",
  "You won't track food or send check-ins",
  "You're looking for the cheapest template on the internet",
  "You expect results without consistency",
];

export default function Qualifier() {
  return (
    <section className="border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="eyebrow mb-3">Fair warning</p>
        <h2 className="h-display max-w-2xl text-4xl sm:text-5xl">
          This is <span className="text-accent">not</span> for everyone.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-green-900/60 bg-base p-7">
            <h3 className="font-display text-2xl uppercase tracking-wide text-green-500">
              Apply if
            </h3>
            <ul className="mt-4 space-y-3">
              {forYou.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 text-green-500" aria-hidden>✓</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-accent/40 bg-base p-7">
            <h3 className="font-display text-2xl uppercase tracking-wide text-accent">
              Don&apos;t apply if
            </h3>
            <ul className="mt-4 space-y-3">
              {notForYou.map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="mt-0.5 text-accent" aria-hidden>✕</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
