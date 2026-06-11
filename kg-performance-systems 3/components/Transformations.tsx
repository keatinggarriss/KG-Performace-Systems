import Link from "next/link";

export type Transformation = {
  name: string;
  result: string;
  protocol: string;
};

export const transformations: Transformation[] = [
  { name: "Client A — REPLACE", result: "−18 lb · 16 weeks", protocol: "First Cut" },
  { name: "Client B — REPLACE", result: "+11 lb lean · 24 weeks", protocol: "Lean Bulk" },
  { name: "Client C — REPLACE", result: "Stage-ready · 20 weeks", protocol: "Contest Prep" },
  { name: "Client D — REPLACE", result: "−14 lb / +5 lb muscle · 28 weeks", protocol: "Recomp" },
  { name: "Client E — REPLACE", result: "+135 lb total · 12 weeks", protocol: "Powerlifting" },
  { name: "Client F — REPLACE", result: "−22 lb · 20 weeks", protocol: "Lifestyle Cut" },
];

export default function Transformations({ limit }: { limit?: number }) {
  const items = limit ? transformations.slice(0, limit) : transformations;

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="eyebrow mb-3">Client Results</p>
        <h2 className="h-display max-w-2xl text-4xl sm:text-5xl">
          Real clients. <span className="text-accent">Real protocols. Real results.</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="overflow-hidden rounded-lg border border-line bg-surface">
              {/* REPLACE: before/after image, 4:5 ratio */}
              <div className="placeholder-img aspect-[4/5] w-full">
                Before / After
                <br />
                Photo
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="mt-1 text-sm text-accent">{t.result}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{t.protocol}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/apply" className="btn-primary">
            Get Results Like These
          </Link>
        </div>
      </div>
    </section>
  );
}
