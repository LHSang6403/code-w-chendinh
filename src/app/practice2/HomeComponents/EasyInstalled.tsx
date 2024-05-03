import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function EasyInstalled() {
  return (
    <>
      <div className="mt-36 text-center">
        <h1 className="flex w-full flex-row items-center justify-center text-[55px] font-medium text-white">
          It’s as easy as <span className="ml-3 text-[#59D499]">installed</span>
          <div>
            <Image
              alt="Tick"
              src="/assets/images/practice2/tick.png"
              width={50}
              height={50}
            ></Image>
          </div>
        </h1>
        <p className="mt-2 font-light text-[#9B999E]">
          Say hello to the Store. A home for Extensions published by our
          community of<br></br> Developers using our API. Find extensions to the
          tools you use in your day-to-day.
        </p>
      </div>{" "}
      <div className="relative mt-16 w-full">
        <div className="h-[600px] w-full rounded-2xl bg-gradient-to-r from-[#ED88AA] via-[#7F1199] to-[#18164D]">
          <div className="w-1/2 p-10 pr-16 pt-28 text-white">
            <Image
              alt="Up"
              src="/assets/images/practice2/up.png"
              width={50}
              height={50}
            />
            <h2 className="mt-4 text-xl font-medium">
              One up your productivity
            </h2>
            <p className="mt-4 text-sm font-extralight">
              On top of the core Raycast Extensions already built in, you can
              install Extensions built by Developers from the community.
              Everything you’ve asked for, in one place. Search and browse
              Extensions for your tools, actions and more.
            </p>
            <Button className="mt-6 bg-gradient-to-r from-[#DC7DBE] to-[#BD4AC2] opacity-100">
              <span className="left-0 top-0 font-light text-white">
                Browse Extensions
              </span>
            </Button>
          </div>
        </div>
        <div className="absolute -right-20 top-6">
          <Image
            alt="Demo"
            src="/assets/images/practice2/img1.png"
            width={800}
            height={600}
          />
        </div>
        <div className="mt-6 flex flex-row gap-6 text-white">
          <div className="h-auto w-2/5 rounded-2xl bg-[#1E1A25] p-10">
            <div>
              <div>
                <Image
                  alt="Electric"
                  src="/assets/images/practice2/electric.png"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="mt-5 text-xl font-medium">
                Lightweight and snappy
              </h2>
              <p className="mt-4 font-extralight text-[#D2D1D3]">
                Designed to be seamless and instant. View an Extension and hit{" "}
                <Image
                  alt="Enter"
                  src="/assets/images/practice2/enter.png"
                  width={20}
                  height={20}
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
              className="mt-20"
            />
          </div>
          <div className="flex h-auto w-3/5 flex-col justify-between rounded-2xl bg-[#1E1A25] pt-10">
            <div>
              <div className="px-10">
                <Image
                  alt="Electric"
                  src="/assets/images/practice2/electric.png"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="mt-5 px-10 text-xl font-medium">
                An evergrowing collection
              </h2>
              <p className="mt-4 px-10 font-extralight text-[#D2D1D3]">
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
              className=""
            />
          </div>
        </div>
        <div className="my-10 flex flex-row justify-center">
          <Link href="#" className="font-extralight text-white">
            {"Explore the store ->"}
          </Link>
        </div>
      </div>
    </>
  );
}
