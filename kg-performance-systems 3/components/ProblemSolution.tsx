const problems = [
  {
    title: "You're training hard, not smart",
    body: "Program-hopping every 6 weeks, chasing influencer routines built for someone else's body, recovery, and pharmacology. Effort isn't your problem — direction is.",
  },
  {
    title: "Your nutrition is guesswork",
    body: "One month you're 'bulking,' the next you're slashing calories because you don't like the mirror. Without a structured plan and weekly adjustments, you spin in circles.",
  },
  {
    title: "Nobody's holding you accountable",
    body: "No check-ins, no form review, no one auditing the data. When motivation dips — and it always does — there's no system to catch you.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="border-t border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="eyebrow mb-3">Why you&apos;re stuck</p>
        <h2 className="h-display max-w-2xl text-4xl sm:text-5xl">
          More effort isn&apos;t the answer. <span className="text-accent">A system is.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <div key={p.title} className="rounded-lg border border-line bg-base p-7">
              <span className="font-display text-4xl text-zinc-700">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-lg leading-relaxed text-zinc-300">
          I don&apos;t sell workout PDFs. I build athletes. Every client gets a fully
          individualized system — training, nutrition, recovery, and supplementation —
          adjusted every single week based on your data. That&apos;s how physiques
          actually change.
        </p>
      </div>
    </section>
  );
}
