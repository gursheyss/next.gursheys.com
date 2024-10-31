import Link from "next/link";
import { Suspense } from "react";
import LastUpdated from "./LastUpdated";
import Image from "next/image";

export default async function Header() {
  return (
    <div className="relative flex items-center justify-between z-aboveVignette font-mono">
      <div className="flex items-center space-x-1">
        <Link
          href="/"
          className="font-geistMono z-10 bg-gradient-to-tr from-[#FFB6C1] via-pink to-[#cf67a9] bg-clip-text pl-8 text-2xl font-bold text-neutral-700 text-transparent underline underline-offset-4"
        >
          gursh
        </Link>
      </div>
      <div className="flex items-center pr-4 text-right">
        <Image
          className="pixelated mt-1"
          src="/images/clock.png"
          alt="clock"
          height="20"
          width="20"
        />
        <Suspense fallback={<div>Loading..</div>}>
          <LastUpdated />
        </Suspense>
      </div>
    </div>
  );
}
