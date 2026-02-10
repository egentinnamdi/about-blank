import { Users } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Adebayo Johnson",
    position: "Event Organizer",
    testimonial:
      "This platform made selling tickets and managing attendees incredibly easy. Everything just works.",
  },
  {
    name: "Chioma Okafor",
    position: "Community Manager",
    testimonial:
      "We hosted multiple events without stress. The check-in process alone saved us hours.",
  },
  {
    name: "Daniel Peters",
    position: "Concert Promoter",
    testimonial:
      "From promotion to payouts, the experience was smooth. Easily one of the best tools we’ve used.",
  },
  {
    name: "Fatima Bello",
    position: "Marketing Lead",
    testimonial:
      "The analytics helped us understand our audience better and improve turnout for future events.",
  },
  {
    name: "Tunde Akinwale",
    position: "Startup Founder",
    testimonial:
      "Perfect for launching and managing events. Simple interface, powerful features.",
  },
  {
    name: "Blessing Uche",
    position: "Content & Events Strategist",
    testimonial:
      "Our event registrations increased significantly after switching to this platform.",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center  gap-10 mt-10">
      <div className="flex items-center gap-2 border border-primary/50 bg-primary/7 text-primary px-3 py-1.5 rounded-full text-sm shadow-xs shadow-primary/20">
        <Users size={15} />
        <span>Testimonials</span>
      </div>
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="text-5xl  w-3/4 font-bold leading-normal">
          Loved by Event Organizers{" "}
          <span className="text-primary-gradient">Worldwide</span>
        </h2>
        <p className="text-gray-400">
          Join thousands of event professionals who are building faster and
          smarter with AboutBlank
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
