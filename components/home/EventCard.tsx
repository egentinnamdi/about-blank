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
    <div className="lg:w-80 lg:mr-10 min-h-[50vh]  flex flex-col rounded-2xl border relative border-white/10  flex-1  shadow-2xl/20 shadow-primary">
      <div className="lg:h-3/5 h-72 ">
        <Image
          src={`/img/${image}`}
          alt="event"
          className="size-full object-cover rounded-2xl"
          width={1000}
          height={1000}
          loading="eager"
        />
      </div>
      <div className="h-2/5 flex flex-col lg:justify-evenly justify-center px-5 gap-3 flex-1  lg:p-5 backdrop-blur-xs  w-full rounded-b-2xl">
        <span className="text-sm text-gray-400">{location}</span>
        <h3 className="text-2xl text-primary-gradient font-bold">{title}</h3>
        <div className="">
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
