import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Explore() {
  return (
    <div className="mt-12 w-full">
      <div className="w-full">
        <h3 className="text-white">Featured</h3>
        <p className="text-[16px] text-[#69676E]">
          Our top picks to get you started
        </p>
      </div>
      <div className="mt-6 grid w-full grid-cols-3 gap-6 xl:grid-cols-2 sm:grid-cols-1 sm:gap-4">
        <div className="flex h-auto w-full flex-col items-center justify-between gap-4 rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              alt="Mini"
              src="/assets/images/store/app.png"
              width={100}
              height={100}
            />
            <h3 className="text-white">Image Modification</h3>
            <p className="-mt-3 text-center text-[16px] font-light text-[#716E75]">
              Apply filters and transformations to<br></br> various image
              formats, and convert…
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Mini"
                src="/assets/images/store/mini-icon.png"
                width={25}
                height={25}
              />
              <span className="mt-[2px] text-[16px] text-[#A09FA3]">
                Stephen Kaplan
              </span>
            </div>
            <Button className="mt-1 h-fit py-1.5 text-sm font-normal text-white">
              Install Extension
            </Button>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col items-center justify-between gap-4 rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8">
          <div className="flex flex-col items-center gap-4">
            <Image
              alt="Mini"
              src="/assets/images/store/msg.png"
              width={100}
              height={100}
            />
            <h3 className="text-white">Messages</h3>
            <p className="-mt-3 text-center text-[16px] font-light text-[#716E75]">
              Apply filters and transformations to<br></br> various image
              formats, and convert…
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row items-center gap-1.5">
              <Image
                alt="Mini"
                src="/assets/images/store/mini-icon.png"
                width={25}
                height={25}
              />
              <span className="mt-[2px] text-[16px] text-[#A09FA3]">
                Stephen Kaplan
              </span>
            </div>
            <Button className="mt-1 h-fit py-1.5 text-sm font-normal text-white">
              Install Extension
            </Button>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col items-center justify-between gap-4 rounded-lg border-[2px] border-[#1B1722] bg-[#120E19] p-8">
          <div className="flex h-fit flex-col items-center gap-4">
            <Image
              alt="Mini"
              src="/assets/images/store/app.png"
              width={100}
              height={100}
            />
            <h3 className="text-white">GIF Search</h3>
            <p className="-mt-3 text-center text-[16px] font-light text-[#716E75]">
              Search the Internet for animated GIFs
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-fit flex-row items-center gap-1.5">
              <Image
                alt="Mini"
                src="/assets/images/store/mini-icon.png"
                width={25}
                height={25}
              />
              <span className="mt-[2px] text-[16px] text-[#A09FA3]">
                Joe Schmitt
              </span>
            </div>
            <Button className="mt-1 h-fit py-1.5 text-sm font-normal text-white">
              Install Extension
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
