import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";
import { Separator } from "../ui/separator";

export default function PersonalizedItem({
  image,
  title,
  category,
  city,
}: {
  image: string;
  title: string;
  category: string;
  city: string;
}) {
  return (
    <div className="min-w-3/4 lg:min-w-1/4  border border-white/5 rounded-2xl ">
      <div className="h-2/4 lg:h-3/5">
        <Image
          src={`/img/${image}`}
          alt={title}
          className="object-cover size-full rounded-t-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="flex pt-5 pb-7 px-4 flex-col gap-7 lg:gap-3 lg:h-2/5">
        <div className=" flex flex-col gap-3">
          <div className="flex justify-between text-gray-400 items-center">
            <span>Event</span>
            <span className="flex gap-1 self-end  items-center">
              <MapPin className="text-primary" /> {city}
            </span>
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <Separator className="bg-gray-400" />
        <div className="flex justify-between items-center">
          <span className="text-gray-400 font-light">{category}</span>
          <Button className="w-2/5 bg-primary-gradient h-11">Ticket</Button>
        </div>
      </div>
    </div>
  );
}
