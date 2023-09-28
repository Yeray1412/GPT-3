import { Footer, Nav } from "@/components";
import {
  Media,
  WatIsGPT,
  Hero,
  CaseStudies,
  Library,
  OpenAI,
} from "@/sections";

export default function Home() {
  return (
    <div className="bg-[#040C18] overflow-hidden">
      <div className="gradient-1 left-0 top-0 translate-x-[-25%] translate-y-[-25%]" />
      <Nav />
      <Hero />
      <Media />
      <WatIsGPT />
      <OpenAI />
      <CaseStudies />
      <Library />
      <Footer />
    </div>
  );
}
