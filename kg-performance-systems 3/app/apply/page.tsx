import type { Metadata } from "next";
import TypeformEmbed from "@/components/TypeformEmbed";

export const metadata: Metadata = {
  title: "Apply for Coaching | KG Performance Systems",
  description:
    "Apply for 1-on-1 evidence-based coaching with Keating Garriss. Limited roster — applications reviewed weekly.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-28">
      <p className="eyebrow mb-3">Step 1 of 2</p>
      <h1 className="h-display text-4xl sm:text-6xl">
        Apply for <span className="text-accent">coaching</span>
      </h1>
      <p className="mt-4 max-w-xl text-zinc-400">
        Takes about 3 minutes. I personally review every application. If
        we&apos;re a fit, you&apos;ll book your free consultation immediately
        after submitting.
      </p>
      <div className="mt-10">
        <TypeformEmbed />
      </div>
    </div>
  );
}
