const items = [
  "35K+ on TikTok",
  "30K+ on Instagram",
  "Competitive athletes coached through prep",
  "Evidence-based. Always.",
  "Replies in under 24 hours",
];

export default function SocialProofBar() {
  return (
    <div className="overflow-hidden border-y border-line bg-surface py-4">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 px-4">
        {items.map((x) => (
          <span
            key={x}
            className="text-xs font-semibold uppercase tracking-widest text-zinc-500"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
