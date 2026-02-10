import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col gap-10 px-10">
        <Hero />
        <HowItWorks />
        <Features />
        <UpcomingEvents />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}
