import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-surface">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
        <h2 className="h-display text-5xl sm:text-6xl">
          Your next 16 weeks are happening
          <span className="text-accent"> either way.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          You can spend them guessing — or executing a system built for your
          exact body and goal. The roster is limited. Applications are reviewed
          weekly.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/apply" className="btn-primary">
            Apply for Coaching
          </Link>
          <Link href="/book-call" className="btn-ghost">
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  );
}
