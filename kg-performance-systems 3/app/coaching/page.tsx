import type { Metadata } from "next";
import Link from "next/link";
import System from "@/components/System";
import Process from "@/components/Process";
import Qualifier from "@/components/Qualifier";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "1-on-1 Coaching | KG Performance Systems",
  description:
    "Fully individualized evidence-based coaching: training, nutrition, supplementation, recovery, and weekly check-ins. From $400/month.",
};

const standalone = [
  {
    name: "Nutrition Only",
    body: "Fully customized nutrition with weekly adjustments and direct support — for lifters who have training handled.",
  },
  {
    name: "Training Only",
    body: "Individualized programming with form review and weekly adjustments — for lifters who have their diet dialed.",
  },
  {
    name: "Consultations",
    body: "One-off strategy sessions: prep planning, plateau audits, program reviews, or a full roadmap you execute yourself.",
  },
];

export default function CoachingPage() {
  return (
    <>
      <section className="pt-28">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow mb-3">1-on-1 Coaching</p>
          <h1 className="h-display max-w-3xl text-5xl sm:text-7xl">
            A complete system, <span className="text-accent">built for one person: you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Fat loss. Muscle gain. Recomp. Powerlifting. Contest prep. Whatever
            the goal, the method is the same: evidence-based programming,
            individualized to your body, audited weekly, and adjusted
            relentlessly until it works. Starting at{" "}
            <span className="font-bold text-white">{site.priceFrom}</span>.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/apply" className="btn-primary">Apply for Coaching</Link>
            <Link href="/book-call" className="btn-ghost">Book a Free Call</Link>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <System />
      </div>

      <section className="border-t border-line bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="eyebrow mb-3">Not ready for full coaching?</p>
          <h2 className="h-display text-4xl sm:text-5xl">Standalone services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {standalone.map((s) => (
              <div key={s.name} className="rounded-lg border border-line bg-base p-7">
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.body}</p>
                <Link href="/apply" className="mt-5 inline-block text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover">
                  Apply →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Qualifier />
      <FinalCTA />
      <StickyMobileCTA />
    </>
  );
}
