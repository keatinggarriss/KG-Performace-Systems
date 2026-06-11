import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl uppercase tracking-wider">
              KG <span className="text-accent">Performance Systems</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">
              Evidence-based 1-on-1 coaching. Built by science. Proven on stage.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3 text-sm">
              <span className="eyebrow">Site</span>
              <Link href="/coaching" className="text-zinc-400 hover:text-white">Coaching</Link>
              <Link href="/results" className="text-zinc-400 hover:text-white">Results</Link>
              <Link href="/faq" className="text-zinc-400 hover:text-white">FAQ</Link>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <span className="eyebrow">Start</span>
              <Link href="/apply" className="text-zinc-400 hover:text-white">Apply</Link>
              <Link href="/book-call" className="text-zinc-400 hover:text-white">Book a Call</Link>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <span className="eyebrow">Social</span>
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">TikTok</a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-zinc-600">
          © {new Date().getFullYear()} KG Performance Systems. All rights reserved.
          Results shown are individual outcomes and are not guaranteed. Coaching is
          not a substitute for medical advice — consult a physician before beginning
          any training or nutrition program.
        </p>
      </div>
    </footer>
  );
}
