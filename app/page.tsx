import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 px-10 min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
    </div>
  );
}
