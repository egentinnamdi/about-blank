import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import TrendingEvents from "@/components/home/TrendingEvents";
import TrustedPartners from "@/components/home/TrustedPartners";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col lg:gap-20 gap-10 lg:px-10 px-4">
        <Hero />
        <TrustedPartners />
        <HowItWorks />
        <Features />
        <TrendingEvents />
        <UpcomingEvents />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}
