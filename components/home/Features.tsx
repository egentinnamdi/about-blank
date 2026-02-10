import { cn } from "@/lib/utils";

const features = [
  {
    title: "Instant check-ins",
    description:
      "Scan tickets in seconds with mobile-friendly QR validation. Works offline and syncs when connected.",
  },
  {
    title: "Secure payments",
    description:
      "Accept card, transfer, and USSD with automated payouts and fraud checks.",
  },
  {
    title: "Realtime insights",
    description:
      "Track sales velocity, sources, and attendance from a single dashboard.",
  },
  {
    title: "Automated messaging",
    description:
      "Track sales velocity, sources, and attendance from a single dashboard.",
  },
  {
    title: "Branded pages",
    description:
      "Launch elegant event pages that match your brand and build trust fast.",
  },
];

export default function Features() {
  return (
    <div className="min-h-[50vh] flex gap-10 items-center flex-col ">
      <h2 className="text-5xl font-semibold">Everything you need to scale</h2>
      <p className="text-gray-400 ">
        Operate like a pro with automated tickets, secure payments, and realtime
        analytics.
      </p>
      <div className="grid grid-cols-4 gap-7 grid-rows-2 flex-1">
        {features.map((feature, index) => (
          <div
            className={cn(
              "border rounded-2xl gap-2 border-white/5 flex flex-col shadow-2xl/50 shadow-primary/15  p-5 bg-white/2 hover:border-primary/50 hover:shadow-md/50 hover:shadow-primary/50 hover:-translate-y-3 transition-all duration-700 delay-200",
              index === 0 && "row-span-2 col-span-2 px-10",
            )}
            key={feature.title}
          >
            <div className="size-10 bg-primary/15 rounded-lg" />
            <h3 className="text-lg font-medium text-primary-gradient">
              {feature.title}
            </h3>
            <p className="text-xs text-gray-400 leading-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
