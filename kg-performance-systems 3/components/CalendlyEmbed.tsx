"use client";

import { site } from "@/lib/site";

export default function CalendlyEmbed() {
  return (
    <iframe
      title="Book a consultation with Keating Garriss"
      src={`${site.calendlyUrl}?hide_gdpr_banner=1&background_color=0a0a0b&text_color=f5f5f4&primary_color=e11d2e`}
      className="h-[80vh] min-h-[640px] w-full rounded-lg border border-line"
      loading="lazy"
    />
  );
}
