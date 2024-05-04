import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EasyInstalled() {
  return (
    <>
      <div className="mt-36 text-center">
        <h1 className="flex w-full flex-row items-center justify-center text-[55px] font-medium text-white lg:flex-col">
          It’s as easy as
          <div className="flex w-fit flex-row items-center">
            <span className="ml-3 text-[#59D499]">installed</span>
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice2/tick.png"
                width={50}
                height={50}
              />
            </div>
          </div>
        </h1>
        <p className="mt-2 font-light text-[#9B999E]">
          Say hello to the Store. A home for Extensions published by our
          community of<br className="xl:hidden"></br> Developers using our API.
          Find extensions to the tools you use in your day-to-day.
        </p>
      </div>
      <div className="mt-20 flex h-[600px] w-full flex-row items-center rounded-2xl bg-gradient-to-r from-[#ED88AA] via-[#7F1199] to-[#18164D] sm:h-fit">
        <div className="w-1/2 px-10 text-white xl:w-[70%] sm:p-6 sm:pr-0">
          <Image
            alt="Up"
            src="/assets/images/practice2/up.png"
            width={65}
            height={65}
          />
          <h2 className="mt-4 text-xl font-medium">One up your productivity</h2>
          <p className="mt-4 text-sm font-extralight text-[#F3D9EF]">
            On top of the core Raycast Extensions already built in, you can
            install Extensions built by Developers from the community.
            Everything you’ve asked for, in one place. Search and browse
            Extensions for your tools, actions and more.
          </p>
          <Button className="mt-6 h-fit w-44 bg-gradient-to-r from-[#e88db4] to-[#c86eb4] py-2 font-normal">
            Browse Extensions
          </Button>
        </div>
        <div className="relative h-full w-1/2 xl:w-[30%]">
          <div className="absolute -right-16 top-1/2 w-[800px] -translate-y-1/2 xl:left-0 xl:right-0">
            <Image
              alt="Demo"
              src="/assets/images/practice2/img1.png"
              width={800}
              height={600}
              className="sm:w-[600px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-row gap-6 text-white lg:flex-col">
        <div className="h-auto w-2/5 rounded-2xl bg-[#1E1A25] p-10 lg:w-full sm:p-6">
          <div>
            <div>
              <Image
                alt="Electric"
                src="/assets/images/practice2/electric.png"
                width={65}
                height={65}
              />
            </div>
            <h2 className="mt-5 text-xl font-medium">Lightweight and snappy</h2>
            <p className="mt-4 font-light text-[#D2D1D3]">
              Designed to be seamless and instant. View an Extension and hit{" "}
              <Image
                alt="Enter"
                src="/assets/images/practice2/enter.png"
                width={25}
                height={25}
                className="inline-block"
              />{" "}
              to simply install it in milliseconds.
            </p>
          </div>
          <Image
            alt="Todo"
            src="/assets/images/practice2/todos.png"
            width={500}
            height={500}
            className="mx-auto mt-20 lg:mt-16"
          />
        </div>
        <div className="flex h-auto w-3/5 flex-col justify-between rounded-2xl bg-[#1E1A25] pt-10 lg:w-full">
          <div>
            <div className="px-10 sm:px-6">
              <Image
                alt="Chip"
                src="/assets/images/practice2/chip2.png"
                width={65}
                height={65}
              />
            </div>
            <h2 className="mt-5 px-10 text-xl font-medium sm:px-6">
              An evergrowing collection
            </h2>
            <p className="mt-4 px-10 font-light text-[#D2D1D3] sm:px-6">
              Control Spotify or Apple Music with a hit of a button. Search
              through Figma, Notion, and Xcode. Check your internet speed and
              the weather without needing the browser, or even play a game of
              Snake.
            </p>
          </div>
          <Image
            alt="Todo"
            src="/assets/images/practice2/icons.png"
            width={1000}
            height={1000}
            className="lg:mt-16"
          />
        </div>
      </div>
      <div className="my-10 flex flex-row justify-center">
        <Link href="#" className="text-sm font-extralight text-white">
          {"Explore the store ->"}
        </Link>
      </div>
    </>
  );
}
