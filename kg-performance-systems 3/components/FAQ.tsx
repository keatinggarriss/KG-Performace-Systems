"use client";

import { useState } from "react";

export const faqs = [
  {
    q: "How much does coaching cost?",
    a: "1-on-1 coaching starts at $400/month. Standalone nutrition-only and training-only services are available at lower price points, and one-off consultations are also offered. Exact pricing depends on your goal and the level of support you need — we finalize it on your consultation call.",
  },
  {
    q: "Do I need to be advanced to work with you?",
    a: "No. I coach everyone from lifters on their first serious cut to national-level physique competitors. What matters isn't your experience — it's your willingness to follow a plan and report your data weekly.",
  },
  {
    q: "Is this enhanced or natural-friendly?",
    a: "Both. Programming and nutrition are individualized to your physiology and your choices. I have deep experience coaching both natural and enhanced athletes, and protocols are built accordingly.",
  },
  {
    q: "What happens after I apply?",
    a: "I personally review every application within a week. If we're a fit, you'll get a link to book a free 30-minute consultation where we map out your exact strategy. If we're not a fit, I'll tell you honestly.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable changes in 4–6 weeks and dramatic changes by 12–16. I won't promise overnight transformations — anyone who does is lying to you. I'll promise a system that works as hard as you do.",
  },
  {
    q: "What if I have a busy schedule or limited equipment?",
    a: "Every program is built around your real life — your schedule, your gym, your travel. That's the entire point of individualized coaching.",
  },
  {
    q: "How do check-ins work?",
    a: "Once a week you submit photos, weights, training data, and biofeedback through a structured check-in. I review everything and send back concrete adjustments — not a thumbs-up emoji. You also have direct messaging access between check-ins.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "I ask for 12 weeks. Real physique change takes time, and I'd rather turn you away than take your money for a timeline that can't work.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:py-28">
        <p className="eyebrow mb-3">FAQ</p>
        <h2 className="h-display text-4xl sm:text-5xl">
          Questions? <span className="text-accent">Answered.</span>
        </h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-bold text-white">{f.q}</span>
                <span className={`text-accent transition-transform ${open === i ? "rotate-45" : ""}`} aria-hidden>
                  +
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-zinc-400">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
