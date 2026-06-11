import type { Metadata } from "next";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Client Results | KG Performance Systems",
  description:
    "Real client transformations: fat loss, muscle gain, recomp, powerlifting, and contest prep results from evidence-based 1-on-1 coaching.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="pt-28">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow mb-3">The proof</p>
          <h1 className="h-display max-w-3xl text-5xl sm:text-7xl">
            Systems produce <span className="text-accent">results.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Every transformation below came from the same approach:
            individualized programming, weekly data review, and relentless
            adjustment. No magic. Just a system, executed.
          </p>
        </div>
      </section>
      <div className="mt-8">
        <Transformations />
      </div>
      <Testimonials />
      <FinalCTA />
      <StickyMobileCTA />
    </>
  );
}
