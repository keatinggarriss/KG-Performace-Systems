import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ | KG Performance Systems",
  description:
    "Pricing, commitment, check-ins, natural vs enhanced, and everything else you want to know before applying for coaching.",
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-12">
        <FAQ />
      </div>
      <FinalCTA />
    </>
  );
}
