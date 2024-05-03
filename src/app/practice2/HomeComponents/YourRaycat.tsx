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
            Raycast the way<br></br> you want to, and build tools for you and
            your team with the API.
          </p>
        </div>
        <div className="relative mt-20 h-[600px] w-full rounded-2xl bg-gradient-to-r from-[#D4EAFA] via-[#571AA7] to-[#150539]">
          <div className="absolute -left-20 top-12">
            <Image
              alt="Code"
              src="/assets/images/practice2/code2.png"
              width={800}
              height={800}
            />
          </div>
          <div className="absolute left-64 top-24">
            <Image
              alt="Search"
              src="/assets/images/practice2/img6.png"
              width={450}
              height={450}
            />
          </div>
          <div className="ml-auto h-auto w-[550px] p-10 pr-16 text-white">
            <Image
              alt="Build"
              src="/assets/images/practice2/build.png"
              width={65}
              height={65}
              className="mt-6"
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
      <div className="mt-6 flex flex-row gap-6">
        <div className="flex w-3/5 flex-row justify-between rounded-2xl bg-[#1D1B26] text-white">
          <div className="p-8">
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
          <div>
            <Image
              alt="Timeline"
              src="/assets/images/practice2/timeline.png"
              width={550}
              height={700}
            />
          </div>
        </div>
        <div className="w-2/5 rounded-2xl bg-[#1D1B26] p-8 text-white">
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
