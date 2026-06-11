import Link from "next/link";
import { site } from "@/lib/site";

const deliverables = [
  ["Customized Training", "Programming built around your leverages, recovery, equipment, and weak points — not a template."],
  ["Customized Nutrition", "Macros and meal structure engineered for your goal and adjusted weekly from your check-in data."],
  ["Supplement Guidance", "Evidence-based protocols only. What works, what's wasted money, and exact dosing."],
  ["Recovery Protocols", "Sleep, stress, and fatigue management — because growth happens between sessions."],
  ["Weekly Check-Ins", "Structured weekly reviews of your data, photos, and biofeedback with concrete adjustments."],
  ["Form Review", "Send lifts anytime. Get frame-by-frame technical breakdowns that fix leaks fast."],
  ["Direct Messaging", "Direct access to me — questions answered in under 24 hours, usually much faster."],
  ["Video Calls", "Strategy calls when you need them: prep planning, plateau-busting, peak week."],
];

export default function System() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="eyebrow mb-3">The System</p>
        <h2 className="h-display max-w-3xl text-4xl sm:text-5xl">
          Everything you need. <span className="text-accent">Nothing you don&apos;t.</span>
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400">
          1-on-1 coaching from <span className="font-bold text-white">{site.priceFrom}</span>.
          Standalone training-only, nutrition-only, and consultation options available.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map(([title, body]) => (
            <div key={title} className="rounded-lg border border-line bg-surface p-6">
              <div className="mb-3 h-1 w-8 bg-accent" />
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link href="/apply" className="btn-primary">
            Apply for Coaching
          </Link>
          <p className="text-sm text-zinc-500">
            Limited client roster · Applications reviewed weekly
          </p>
        </div>
      </div>
    </section>
  );
}
