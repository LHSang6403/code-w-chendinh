import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";

export default function YourRaycat() {
  return (
    <>
      <div className="mt-36 h-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-semibold text-white">
            Your Raycast.<br></br> Your playground.
          </h1>
          <p className="-mt-2 text-center font-light text-[#9B999E]">
            Productivity is unique to everyone. Personalization is key. Extend
            Raycast the way<br className="xl:hidden"></br> you want to, and
            build tools for you and your team with the API.
          </p>
        </div>
        <div className="mt-20 flex h-[600px] w-full flex-row items-center rounded-2xl bg-gradient-to-r from-[#D4EAFA] via-[#571AA7] to-[#150539] lg:h-fit">
          <div className="relative h-full w-3/5 xl:w-1/2 lg:w-1/4 sm:w-[15%]">
            <div className="absolute -left-16 right-8 top-1/2 -translate-y-1/2 xl:-left-44 xl:right-10 sm:-left-[430px] sm:-right-0 sm:w-[500px]">
              <div className="relative h-full">
                <Image
                  alt="Code"
                  src="/assets/images/practice2/code2.png"
                  width={800}
                  height={800}
                  className="mt-20 sm:hidden"
                />
                <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                  <Image
                    alt="Search"
                    src="/assets/images/practice2/img6.png"
                    width={450}
                    height={450}
                    className="-mt-6 sm:mt-0 sm:pt-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-2/5 p-10 pl-0 pr-16 text-white xl:w-1/2 lg:w-3/4 lg:px-10 sm:w-[85%]">
            <Image
              alt="Build"
              src="/assets/images/practice2/build.png"
              width={65}
              height={65}
            />
            <h2 className="mt-4 text-xl font-medium">
              Build what you’ve always wanted
            </h2>
            <p className="mt-4 text-sm font-extralight text-[#D8CFE4]">
              Start building your perfect tools with the Raycast API, and
              streamline your workflows. Simply create Extensions with ease and
              publish directly to the Raycast Store seamlessly.
            </p>
            <p className="mt-4 text-sm font-extralight text-[#D8CFE4]">
              Get started with the integrated developer tools in Raycast and
              build your first extension in no time.
            </p>
            <Button className="mt-6 h-fit bg-gradient-to-r from-[#290B53] to-[#1F0843] py-2 font-normal text-white opacity-100">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex h-full flex-row gap-6 lg:flex-col">
        <div className="flex h-full w-3/5 flex-row items-center justify-between rounded-2xl bg-[#1D1B26] text-white lg:w-full">
          <div className="p-8 lg:w-1/2">
            <div>
              <Image
                alt="Return"
                src="/assets/images/practice2/return.png"
                width={65}
                height={65}
              />
            </div>
            <h2 className="mt-5 text-xl font-medium">Open source community</h2>
            <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
              Build in the open and collaborate with other Developers on yours
              and their Extensions. Contribute as you’d like, and help others by
              building on top of existing Extensions.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="h-fit w-fit">
              <Image
                alt="Timeline"
                src="/assets/images/practice2/timeline.png"
                width={550}
                height={700}
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 rounded-2xl bg-[#1D1B26] p-8 text-white lg:w-full">
          <div>
            <Image
              alt="Book"
              src="/assets/images/practice2/book.png"
              width={65}
              height={65}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Be part of the story</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            We listen to our community and build Raycast in collaboration with
            developers, to build the best product and developer experience
            across the platform.
          </p>
        </div>
      </div>
      <div className="my-10">
        <Link href="#" className="text-sm font-extralight text-white">
          Explore the docs {"->"}
        </Link>
      </div>
    </>
  );
}
