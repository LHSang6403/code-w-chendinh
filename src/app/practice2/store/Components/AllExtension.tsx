import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function AllExtension() {
  return (
    <div className="mt-20 w-full">
      <div className="flex flex-row items-center justify-between lg:flex-col lg:gap-4">
        <div className="flex w-fit flex-row items-center gap-2">
          <Badge className="py-1.5 font-light text-[#A5A3A8]">
            All Extensions
          </Badge>
          <Badge className="bg-[#05010D] py-1.5 font-light text-[#A5A3A8]">
            Recently Added
          </Badge>
        </div>
        <div className="relative lg:w-full">
          <Input
            placeholder="Search..."
            className="h-8 w-[450px] border-[#1D1924] bg-[#120E19] opacity-70 lg:w-full"
          ></Input>
          <div className="absolute right-4 top-2 z-10 flex h-fit w-fit flex-row items-center gap-1">
            <Image
              alt="CMD"
              src="/assets/images/store/cmd_key.png"
              width={20}
              height={20}
            />
            <Image
              alt="CMD"
              src="/assets/images/store/k_key.png"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <h3 className="text-white">Featured</h3>
        <p className="text-[16px] text-[#69676E]">
          Our top picks to get you started
        </p>
      </div>
      <div className="mt-6 grid w-full grid-cols-2 gap-6 lg:grid-cols-1 sm:gap-4">
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/beer.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Brew</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/gpt.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Chat GPT</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/trans.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Google Translate</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/process.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Kill Process</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/beer.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Brew</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/gpt.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Chat GPT</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/trans.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Google Translate</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/process.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Kill Process</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/beer.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Brew</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8 sm:p-4">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-3">
              <Image
                alt="Beer"
                src="/assets/images/store/gpt.png"
                width={30}
                height={30}
              />
              <h3 className="font-medium text-white">Chat GPT</h3>
            </div>
            <Button className="h-fit w-fit bg-[#2A2630] px-2 py-1 text-[15px] font-normal text-white">
              Install
            </Button>
          </div>
          <p className="mt-3 text-[18px] text-[#716E75]">
            Search and install Homebrew formulae
          </p>
          <div className="mt-8 flex flex-row items-center gap-3">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/man.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#A09FA3]">John Buckley</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/chip.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">5 Commands</p>
            </div>
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Icon"
                src="/assets/images/store/download.png"
                width={20}
                height={20}
              />
              <p className="text-[15px] text-[#716E75]">78,269</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
