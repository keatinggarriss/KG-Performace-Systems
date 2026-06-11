import type { Metadata } from "next";
import Coach from "@/components/Coach";
import SocialProofBar from "@/components/SocialProofBar";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About Keating Garriss | KG Performance Systems",
  description:
    "Meet Keating Garriss — evidence-based coach for bodybuilding, physique optimization, powerlifting, and contest prep.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow mb-3">The coach</p>
          <h1 className="h-display max-w-3xl text-5xl sm:text-7xl">
            Practitioner first. <span className="text-accent">Coach always.</span>
          </h1>
        </div>
      </section>
      <Coach />
      <SocialProofBar />
      <FinalCTA />
    </>
  );
}
