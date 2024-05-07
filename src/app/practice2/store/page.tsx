import { Input } from "@/components/ui/input";
import Explore from "./Components/Explore";
import AllExtension from "./Components/AllExtension";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="absolute left-0 right-0 top-0 z-0 w-full">
        <div className="relative w-full">
          {/* <div className="absolute -top-[200px] left-1/2 flex w-full -translate-x-1/2 justify-center">
            <div className="h-[550px] w-[650px] rounded-full bg-[#1a0c38] bg-gradient-to-b opacity-[45%] shadow-[rgba(26,12,56,100)_0px_0px_200px_200px]"></div>
          </div>
          <div className="absolute -top-[200px] left-1/2 flex w-full -translate-x-1/2 justify-center">
            <div className="h-[300px] w-[300px] rounded-full bg-[#792359] bg-gradient-to-b opacity-[45%] shadow-[rgba(121,35,89,100)_0px_0px_200px_200px]"></div>
          </div> */}
          <div className="absolute -top-16 left-1/2 flex w-full -translate-x-1/2 justify-center sm:top-0 ">
            <Image
              alt="blur"
              src="/assets/images/store/blur.png"
              width={1440}
              height={850}
              quality={100}
              className="opacity-70 shadow-[rgba(7,2,15,100)_0px_0px_200px_200px] xl:scale-125 sm:scale-150"
            />
          </div>
          <div className="absolute left-1/2 top-16 flex w-full -translate-x-1/2 justify-center">
            <Image
              alt="blur"
              src="/assets/images/store/apps.png"
              width={1000}
              height={850}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full max-w-[1400px] flex-col items-center bg-[#05010D] pb-28 pt-12">
        <div className="z-20 mt-96 flex w-full flex-col items-center gap-6 text-center xl:mt-72 lg:mt-60 sm:mt-52">
          <h1 className="w-full text-6xl font-semibold text-white xl:text-5xl">
            Store
          </h1>
          <p className="font-light text-[#9D99A1]">
            Sprinkle a little magic on your day. Connect your tools,
            <br className="xl:hidden"></br> and take your daily workflow to the
            next level.
          </p>
          <div className="relative lg:w-full">
            <Input
              placeholder="Search..."
              className="mt-6 w-[450px] border-[#1D1924] bg-[#120E19] opacity-70 lg:w-full"
            ></Input>
            <div className="absolute right-4 top-9 z-10 flex h-fit w-fit flex-row items-center gap-1">
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
        <div className="mt-28 flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-semibold text-white">
            Explore
          </h1>
          <p className="-mt-2 text-center font-light text-[#9B999E]">
            Browse and install extensions built by the community
          </p>
        </div>
        <Explore />
        <AllExtension />
        <div className="mt-16">
          <Pagination>
            <PaginationContent className="flex flex-row gap-1">
              <PaginationItem>
                <PaginationLink
                  isActive
                  className="h-8 w-8 border-none bg-[#1E1A25] text-[16px] font-light text-[#A5A3A8]"
                  href="#"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="h-8 w-8 border-none text-[16px] font-light text-[#A5A3A8] hover:bg-[#1E1A25]"
                  href="#"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="hove:bg-[#1E1A25] h-8 w-8 border-none text-[16px] font-light text-[#A5A3A8]"
                  href="#"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="h-8 w-8 border-none text-[16px] font-light text-[#A5A3A8] hover:bg-[#1E1A25]"
                  href="#"
                >
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="h-8 w-8 border-none text-[16px] font-light text-[#A5A3A8] hover:bg-[#1E1A25]"
                  href="#"
                >
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="flex h-8 w-10 items-center justify-center border-none text-[16px] font-light text-[#A5A3A8] hover:bg-[#1E1A25]"
                  href="#"
                >
                  <hr className="w-8 border-[0.5px] border-[#A5A3A8]"></hr>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="h-8 w-8 border-none text-[16px] font-light text-[#A5A3A8] hover:bg-[#1E1A25]"
                  href="#"
                >
                  144
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="h-8 w-8 border-none text-[16px] font-light text-[#A5A3A8] hover:bg-[#1E1A25]"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
