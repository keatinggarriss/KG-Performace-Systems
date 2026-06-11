import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Consultation | KG Performance Systems",
  description:
    "Book a free 30-minute consultation with Keating Garriss to map out your transformation strategy.",
};

export default function BookCallPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-28">
      <p className="eyebrow mb-3">Step 2 of 2</p>
      <h1 className="h-display text-4xl sm:text-6xl">
        Book your <span className="text-accent">strategy call</span>
      </h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        Free, 30 minutes, zero pressure. We&apos;ll map out exactly how
        I&apos;d attack your goal — and you&apos;ll leave with clarity whether
        or not we work together.
      </p>
      <div className="mt-10">
        <CalendlyEmbed />
      </div>
    </div>
  );
}
