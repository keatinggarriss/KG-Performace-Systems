"use client";

import { site } from "@/lib/site";

export default function TypeformEmbed() {
  return (
    <iframe
      title="KG Performance Systems Coaching Application"
      src={`${site.typeformUrl}?typeform-medium=embed-website&utm_source=website`}
      className="h-[80vh] min-h-[560px] w-full rounded-lg border border-line"
      allow="camera; microphone; autoplay; encrypted-media"
      loading="lazy"
    />
  );
}
