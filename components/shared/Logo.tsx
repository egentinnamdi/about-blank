import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex  gap-3  items-center">
      <div className="size-9 rounded-lg bg-primary/15 p-2">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={700}
          height={700}
          className="size-full"
        />
      </div>
      <span className="text-xl font-bold">AboutBlank</span>
    </div>
  );
}
