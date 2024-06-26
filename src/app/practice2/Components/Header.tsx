"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="!z-20 w-full">
      <div className="flex w-full flex-row items-center justify-between py-3 xl:pb-0">
        <div className="w-44 xl:w-fit">
          <Image
            alt="Raycast"
            src="/assets/images/practice2/raycast.png"
            width={120}
            height={80}
          ></Image>
        </div>
        <div className="flex flex-row xl:hidden">
          <Button
            onClick={() => router.push("/practice2/store")}
            variant="ghost"
            className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
          >
            Store
          </Button>
          <Button
            onClick={() => router.push("/practice2/developers")}
            variant="ghost"
            className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
          >
            Developer
          </Button>
          <Button
            variant="ghost"
            className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
          >
            Teams
          </Button>
          <Button
            variant="ghost"
            className="hover:bg- flex flex-row gap-1 border-none text-[16px] font-light text-[#A19AA7]"
          >
            <span>Pro</span>
            <Image
              alt="Raycast"
              src="/assets/images/practice2/new.png"
              width={35}
              height={30}
            ></Image>
          </Button>
          <Button
            variant="ghost"
            className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
          >
            Changelog
          </Button>
          <Button
            variant="ghost"
            className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
          >
            Pricing
          </Button>
          <Button
            variant="ghost"
            className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
          >
            Blog
          </Button>
        </div>
        <div className="flex w-44 flex-row items-center justify-end xl:w-fit">
          <Button
            variant="ghost"
            className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
          >
            Log in
          </Button>
          <Button
            variant="ghost"
            className="hover:bg- h-fit border-none  py-1.5 text-[16px] font-light text-[#A19AA7]"
          >
            Download
          </Button>
        </div>
      </div>
      <div className="hidden w-full grid-cols-4 xl:grid sm:hidden">
        <Button
          onClick={() => router.push("/practice2/store")}
          variant="ghost"
          className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
        >
          Store
        </Button>
        <Button
          onClick={() => router.push("/practice2/developers")}
          variant="ghost"
          className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
        >
          Developer
        </Button>
        <Button
          variant="ghost"
          className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
        >
          Teams
        </Button>
        <Button
          variant="ghost"
          className="hover:bg- flex flex-row gap-1 border-none text-[16px] font-light text-[#A19AA7]"
        >
          <span>Pro</span>
          <Image
            alt="Raycast"
            src="/assets/images/practice2/new.png"
            width={35}
            height={30}
          ></Image>
        </Button>
        <Button
          variant="ghost"
          className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
        >
          Changelog
        </Button>
        <Button
          variant="ghost"
          className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
        >
          Pricing
        </Button>
        <Button
          variant="ghost"
          className="hover:bg- border-none text-[16px] font-light text-[#A19AA7]"
        >
          Blog
        </Button>
      </div>
    </header>
  );
}
