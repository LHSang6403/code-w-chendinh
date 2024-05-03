import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";

export default function YourRaycat() {
  return (
    <>
      <div className="h-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-bold text-white">
            Your Raycast.<br></br> Your playground.
          </h1>
          <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
            Productivity is unique to everyone. Personalization is key. Extend
            Raycast the way<br></br> you want to, and build tools for you and
            your team with the API.
          </p>
        </div>
        <div className="relative mt-36 h-[600px] w-full rounded-2xl bg-gradient-to-r from-[#D4EAFA] via-[#571AA7] to-[#150539]">
          <div className="absolute -left-20 top-12">
            <Image
              alt="Code"
              src="/assets/images/practice2/code2.png"
              width={800}
              height={800}
            />
          </div>
          <div className="absolute left-56 top-20">
            <Image
              alt="Search"
              src="/assets/images/practice2/img6.png"
              width={500}
              height={500}
            />
          </div>
          <div className="ml-auto h-auto w-[500px] p-10 text-white">
            <Image
              alt="Build"
              src="/assets/images/practice2/build.png"
              width={50}
              height={50}
              className="mt-6"
            />
            <h2 className="mt-4 text-xl font-medium">
              Build what you’ve always wanted
            </h2>
            <p className="mt-4 text-sm font-extralight">
              Start building your perfect tools with the Raycast API, and
              streamline your workflows. Simply create Extensions with ease and
              publish directly to the Raycast Store seamlessly.
            </p>
            <p className="mt-4 text-sm font-extralight">
              Get started with the integrated developer tools in Raycast and
              build your first extension in no time.
            </p>
            <Button className="mt-6 bg-gradient-to-r from-[#290B53] to-[#1F0843] opacity-100">
              <span className="left-0 top-0 font-light text-white">
                Learn more
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-row gap-6">
        <div className="w-3/5 rounded-2xl bg-[#1D1B26] p-8 text-white">
          <div>
            <Image
              alt="Return"
              src="/assets/images/practice2/return.png"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Open source community</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            Build in the open and collaborate with other Developers on yours and
            their Extensions. Contribute as you’d like, and help others by
            building on top of existing Extensions.
          </p>
        </div>
        <div className="w-2/5 rounded-2xl bg-[#1D1B26] p-8 text-white">
          <div>
            <Image
              alt="Book"
              src="/assets/images/practice2/book.png"
              width={50}
              height={50}
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
        <Link href="#" className="text-sm font-light text-white">
          Explore the docs {"->"}
        </Link>
      </div>
    </>
  );
}
