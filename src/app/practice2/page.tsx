import { Button } from "@/components/ui/button";
import Image from "next/image";
import EasyInstalled from "./HomeComponents/EasyInstalled";
import Productivity from "./HomeComponents/Productivity";
import YourRaycat from "./HomeComponents/YourRaycat";
import RaycatTeams from "./HomeComponents/RaycatTeams";
import ProductivityLevelled from "./HomeComponents/ProductivityLevelled";
import MoreFocus from "./HomeComponents/MoreFocus";
import TakeOff from "./HomeComponents/TakeOff";
import SocialForm from "./HomeComponents/SocialForm";

export default function page() {
  return (
    <div className="relative flex w-full flex-col items-center bg-[#05010D] pt-16">
      <Image
        alt="Search"
        src="/assets/images/practice2/main.png"
        width={1000}
        height={1000}
      ></Image>
      <div className="absolute top-6">
        <Image
          alt="Decor"
          src="/assets/images/practice2/bg.png"
          width={1000}
          height={1000}
          className="opacity-10"
        ></Image>
      </div>
      <div className="absolute left-36 top-80 h-[350px] w-[350px] rounded-full bg-[#F73A4B] opacity-20 shadow-[rgba(247,58,75,100)_0px_0px_400px_150px]"></div>
      <div className="absolute right-28 top-12 h-[400px] w-[400px] rounded-full bg-[#7000FF] opacity-20 shadow-[rgba(112,0,255,100)_0px_0px_400px_150px]"></div>
      <div className="absolute top-[590px] w-full text-center">
        <h1 className="w-full text-[70px] font-bold leading-[65px] text-white">
          <span className="w-full bg-gradient-to-r from-[#F73A4B] to-[#7000FF] bg-clip-text px-4 text-center italic text-transparent">
            Supercharged
          </span>{" "}
          <br></br>
          productivity
        </h1>
        <p className="mt-3 font-light text-[#86727A]">
          Raycast is a blazingly fast, totally extendable launcher. It lets you
          <br></br>
          complete tasks, calculate, share common links, and much more.
        </p>
      </div>
      <div className="mt-56 flex flex-col items-center justify-center">
        <Button className="bg-white px-6">Download for Mac</Button>
        <div className="mt-4 flex flex-row justify-center gap-4 text-[12px] font-extralight text-white">
          <div>v1.70.3</div>
          <div className="border-l border-r border-white px-4">macOS 12+</div>
          <div>Install via Homebrew</div>
        </div>
      </div>
      <div className="mt-28">
        <div className="h-full w-full rounded-xl bg-gradient-to-r from-[#882E20] to-[#62042D] p-[4px] shadow-[rgba(46,10,19,100)_0px_0px_8px_4px]">
          <div className="flex flex-row items-center justify-between rounded-[12px] border-[#321D20] bg-[#1E060A] py-8">
            <div className="text-white">
              <h2 className="text-xl">Raycast Merch</h2>
              <p className="mt-2 text-sm text-[#D2C0C8]">
                Exclusive collection of Raycast-branded apparel is now
                available.
              </p>
            </div>
            <Button className="h-fit bg-gradient-to-r from-[#330D10] to-[#2C0512] px-4 py-1">
              <span className="bg-gradient-to-r from-[#FC694D] to-[#BA2162] bg-clip-text font-light text-transparent">
                {"Get yours ->"}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <EasyInstalled />
      <Productivity />
      <YourRaycat />
      <RaycatTeams />
      <ProductivityLevelled />
      <MoreFocus />
      <TakeOff />
      <SocialForm />
    </div>
  );
}
