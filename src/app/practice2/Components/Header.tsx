import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
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
            variant="ghost"
            className="border-none text-[16px] font-light text-[#A19AA7]"
          >
            Store
          </Button>
          <Button
            variant="ghost"
            className="border-none text-[16px] font-light text-[#A19AA7]"
          >
            Developer
          </Button>
          <Button
            variant="ghost"
            className="border-none text-[16px] font-light text-[#A19AA7]"
          >
            Teams
          </Button>
          <Button
            variant="ghost"
            className="flex flex-row gap-1 border-none text-[16px] font-light text-[#A19AA7]"
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
            className="border-none text-[16px] font-light text-[#A19AA7]"
          >
            Changelog
          </Button>
          <Button
            variant="ghost"
            className="border-none text-[16px] font-light text-[#A19AA7]"
          >
            Pricing
          </Button>
          <Button
            variant="ghost"
            className="border-none text-[16px] font-light text-[#A19AA7]"
          >
            Blog
          </Button>
        </div>
        <div className="flex w-44 flex-row items-center justify-end xl:w-fit">
          <Button
            variant="ghost"
            className="border-none text-[16px] font-light text-[#A19AA7]"
          >
            Log in
          </Button>
          <Button className="h-fit border-none bg-gradient-to-r from-[#160E22] to-[#120E1B] py-1.5 text-[16px] font-light text-[#A19AA7]">
            Download
          </Button>
        </div>
      </div>
      <div className="hidden w-full flex-row justify-center overflow-x-auto xl:flex">
        <Button
          variant="ghost"
          className="border-none text-[16px] font-light text-[#A19AA7]"
        >
          Store
        </Button>
        <Button
          variant="ghost"
          className="border-none text-[16px] font-light text-[#A19AA7]"
        >
          Developer
        </Button>
        <Button
          variant="ghost"
          className="border-none text-[16px] font-light text-[#A19AA7]"
        >
          Teams
        </Button>
        <Button
          variant="ghost"
          className="flex flex-row gap-1 border-none text-[16px] font-light text-[#A19AA7]"
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
          className="border-none text-[16px] font-light text-[#A19AA7]"
        >
          Changelog
        </Button>
        <Button
          variant="ghost"
          className="border-none text-[16px] font-light text-[#A19AA7]"
        >
          Pricing
        </Button>
        <Button
          variant="ghost"
          className="border-none text-[16px] font-light text-[#A19AA7]"
        >
          Blog
        </Button>
      </div>
    </header>
  );
}
