import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ProblemSolution from "@/components/ProblemSolution";
import System from "@/components/System";
import Process from "@/components/Process";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Coach from "@/components/Coach";
import Qualifier from "@/components/Qualifier";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemSolution />
      <System />
      <Process />
      <Transformations limit={3} />
      <Testimonials />
      <Coach />
      <Qualifier />
      <FAQ />
      <FinalCTA />
      <StickyMobileCTA />
    </>
  );
}
