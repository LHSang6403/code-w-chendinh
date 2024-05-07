import { Button } from "@/components/ui/button";
import Banners from "./Components/Banners";
import KeepingEco from "./Components/KeepingEco";
import GoodCompany from "./Components/GoodCompany";
import TakeOff from "../HomeComponents/TakeOff";
import SocialForm from "../HomeComponents/SocialForm";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="absolute left-0 right-0 top-0 z-0 w-full">
        <div className="relative w-full">
          <div className="absolute -top-16 left-1/2 flex w-full -translate-x-1/2 justify-center xl:-top-6 sm:top-0">
            <Image
              alt="blur"
              src="/assets/images/developers/blur.png"
              width={1440}
              height={900}
              quality={100}
              className="opacity-70 shadow-[rgba(7,2,15,100)_0px_0px_200px_200px]"
            />
          </div>
          <div className="absolute left-1/2 top-0 z-10 flex w-full -translate-x-1/2 justify-center">
            <Image
              alt="blur"
              src="/assets/images/developers/grid.png"
              width={1000}
              height={850}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full max-w-[1400px] flex-col items-center bg-[#05010D] pt-12">
        <div className="z-20 mt-24 flex w-full flex-col items-center gap-6 text-center lg:mt-20 sm:mt-12">
          <h1 className="w-full text-6xl font-semibold text-white xl:text-5xl">
            Build the<br className="xl:hidden"></br> perfect tools
          </h1>
          <p className="font-light text-[#A19CAB]">
            Turn ordinary tools into magical extensions with our API
            <br className="xl:hidden"></br> and speed up your tasks. Leave the
            heavy lifting to us.
          </p>
          <div className="mt-6 lg:w-full">
            <Button className="bg-white px-12">View Documentation</Button>
            <div className="mt-4 flex flex-row items-center justify-center gap-2 text-[16px] font-extralight">
              <div className="text-[#696773]">Already have an account?</div>
              <div className="flex flex-row items-center text-[#9B99A1]">
                Log in{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right ml-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Banners />
        <KeepingEco />
        <GoodCompany />
        <TakeOff />
        <SocialForm />
      </div>
    </div>
  );
}
