import { Quote, Star, User } from "lucide-react";

export default function TestimonialCard({
  name,
  position,
  testimonial,
}: {
  name: string;
  position: string;
  testimonial: string;
}) {
  return (
    <div className="bg-white/2 p-6 rounded-lg border border-primary/10 flex-col flex justify-center gap-5 shadow-md">
      <div className=" flex flex-col justify-center gap-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              className=" text-primary fill-primary"
              size={18}
              key={index}
            />
          ))}
        </div>
        <span className="text-6xl text-primary/50">
          <Quote />
        </span>
      </div>
      <p className=" italic">{testimonial}</p>
      <div className="mt-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-6 h-6 text-primary" />
        </div>
        <div className="ml-3">
          <p className=" font-medium">{name}</p>
          <p className="text-gray-400  text-xs">{position}</p>
        </div>
      </div>
    </div>
  );
}
