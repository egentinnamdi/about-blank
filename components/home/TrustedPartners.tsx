import { Eye } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const partners = [
  {
    logo: <Eye />,
    name: "Google",
  },
  {
    logo: <Eye />,
    name: "Spotify",
  },
  {
    logo: <Eye />,
    name: "Paypal",
  },
  {
    logo: <Eye />,
    name: "Apple",
  },
];

export default function TrustedPartners() {
  return (
    <div className="flex min-h-20 flex-col gap-7 lg:gap-10 items-center mb-10">
      <h3 className="text-gray-400 text-2xl ">Trusted By</h3>
      <Marquee
        className="flex-1 flex "
        speed={60}
        direction="left"
        gradient={false}
      >
        {partners.map((partner) => (
          <div
            className="w-[25vw] text-xs lg:text-base flex flex-col items-center gap-2 text-gray-400 text-center "
            key={partner.name}
          >
            {partner.logo}
            <span>{partner.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
