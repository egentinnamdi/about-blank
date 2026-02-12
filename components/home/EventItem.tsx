import Image from "next/image";

export default function EventItem({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) {
  return (
    <div className="rounded-2xl min-h-64 flex flex-col border border-primary/10 shadow-2xl">
      <div className="h-3/5 relative">
        <div className=" absolute inset-0 py-2 px-2">
          <p className="bg-background w-10 min-h-7 flex flex-col text-xs text-center text-gray-400 font-medium rounded-lg py-1.5">
            Feb
            <span className="text-primary text-lg">28</span>
          </p>
        </div>
        <Image
          src={`/img/${image}`}
          alt={title}
          className="size-full object-cover rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="text-xs h-2/5 text-gray-400 py-7 px-2  flex flex-col justify-center gap-1">
        <h3 className="text-base text-white">{title}</h3>
        <span className="">{category}</span>
      </div>
    </div>
  );
}
