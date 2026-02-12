import CallToAction from "@/components/home/CallToAction";
import EventsDiscoverySection from "@/components/home/EventsDiscoverySection";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import PersonalizedSection from "@/components/home/PersonalizedSection";
import Testimonials from "@/components/home/Testimonials";
import TrustedPartners from "@/components/home/TrustedPartners";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col  gap-10 lg:px-10 ">
        <Hero />
        <TrustedPartners />
        {/* <HowItWorks /> */}
        {/* <Features /> */}

        <EventsDiscoverySection
          title="Events You'll Love"
          description="Events you've shown interest in"
        />
        <PersonalizedSection />
        <EventsDiscoverySection
          title="Top events Near you"
          description="Trending events in your area"
        />
        {/* <TrendingEvents /> */}
        <UpcomingEvents />
        <Testimonials />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}
