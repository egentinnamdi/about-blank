import Image from "next/image";

export default function EventCard({
  location,
  title,
  details,
  image,
}: {
  image: string;
  location: string;
  title: string;
  details: { label: string; value: string }[];
}) {
  return (
    <div className="w-80 mr-10 min-h-[50vh] rounded-2xl border relative border-white/10  flex-1  ">
      <div className="h-3/5 ">
        <Image
          src={`/img/${image}`}
          alt="event"
          className="size-full object-cover rounded-2xl"
          width={1000}
          height={1000}
          loading="eager"
        />
      </div>
      <div className="h-2/5 flex flex-col justify-around p-5 backdrop-blur-xs bg-background/20  w-full rounded-b-2xl">
        <span className="text-sm text-gray-400">{location}</span>
        <h3 className="text-2xl text-primary-gradient font-bold">{title}</h3>
        <div>
          <div className="flex justify-between">
            {details.map((detail) => (
              <div className="flex flex-col gap-1.5" key={detail.label}>
                <span className="text-gray-400 text-sm">{detail.label}</span>
                <span className="text-xs">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
