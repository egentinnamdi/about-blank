import { cn } from "@/lib/utils";
import Image from "next/image";

export default function EventCard({
  isAnimated,
  location,
  title,
  details,
  image,
}: {
  isAnimated?: boolean;
  image: string;
  location: string;
  title: string;
  details: { label: string; value: string }[];
}) {
  return (
    <div
      className={cn(
        "lg:w-80 lg:mr-10 lg:min-h-[50vh] min-h-[30vh]  flex flex-col rounded-2xl border relative border-white/10  flex-1  shadow-2xl/20 shadow-primary",
        isAnimated && "w-72",
      )}
    >
      <div className="lg:h-3/5 h-56 ">
        <Image
          src={`/img/${image}`}
          alt="event"
          className="size-full object-cover rounded-2xl"
          width={1000}
          height={1000}
          loading="eager"
        />
      </div>
      <div className="lg:h-2/5 h-2/4 flex flex-col lg:justify-evenly justify-center p-5  gap-3 flex-1  lg:p-5 backdrop-blur-xs  w-full rounded-b-2xl">
        <span className="lg:text-sm text-xs text-gray-400">{location}</span>
        <h3
          className={cn(
            "text-2xl  text-primary-gradient font-bold",
            isAnimated && "text-xl",
          )}
        >
          {title}
        </h3>
        <div className="">
          <div className="flex justify-between">
            {details.map((detail) => (
              <div className="flex flex-col gap-1.5" key={detail.label}>
                <span className="text-gray-400 lg:text-sm text-xs">
                  {detail.label}
                </span>
                <span className="text-xs">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
