import Image from "next/image";
import Link from "next/link";

export default function GoodCompany() {
  return (
    <div className="mt-24 flex flex-col items-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-center text-4xl font-semibold text-white">
          You’re in good<br className="xl:hidden"></br> company
        </h1>
        <p className="-mt-2 text-center font-light text-[#9B999E]">
          It’s still early days, but here’s some words of motivation
          <br className="xl:hidden"></br> so you know you’re in the right place
        </p>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-2 xl:grid-cols-2 lg:grid-cols-1">
        <div className="flex flex-col gap-4 rounded-lg border border-[#18131F] p-6 sm:p-6">
          <Image
            alt="Person"
            src="/assets/images/developers/person.png"
            width={40}
            height={40}
          />
          <p className="text-[13px] font-extralight text-[#CDCCCF]">
            “Really digging the new extensions API in @raycastapp. A quick key
            combo and you can scroll through a big ol' list of community hotkeys
            and commands, basically. This is what I wanted more than a decade
            ago in the Alfred days; love it.”
          </p>
          <div className="flex flex-row items-center gap-1">
            <Image
              alt="Person"
              src="/assets/images/developers/tw.png"
              width={25}
              height={25}
            />
            <p className="text-[14px] font-light text-[#9B999E]">@holman</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-[#18131F] p-6 sm:p-6">
          <Image
            alt="Person"
            src="/assets/images/developers/person.png"
            width={40}
            height={40}
          />
          <p className="text-[13px] font-extralight text-[#CDCCCF]">
            “Developing extensions for @raycastapp is so easy and developer
            friendly ❤”
          </p>
          <div className="flex flex-row items-center gap-1">
            <Image
              alt="Person"
              src="/assets/images/developers/tw.png"
              width={25}
              height={25}
            />
            <p className="text-[14px] font-light text-[#9B999E]">@holman</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-[#18131F] p-6 sm:p-6">
          <Image
            alt="Person"
            src="/assets/images/developers/person.png"
            width={40}
            height={40}
          />
          <p className="text-[13px] font-extralight text-[#CDCCCF]">
            “Mac OS apps will always have softest spot for me. @raycastapp
            mixing React/Node with native tooling for extensions is a killer
            approach!”
          </p>
          <div className="flex flex-row items-center gap-1">
            <Image
              alt="Person"
              src="/assets/images/developers/tw.png"
              width={25}
              height={25}
            />
            <p className="text-[14px] font-light text-[#9B999E]">@holman</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-[#18131F] p-6 sm:p-6">
          <Image
            alt="Person"
            src="/assets/images/developers/person.png"
            width={40}
            height={40}
          />
          <p className="text-[13px] font-extralight text-[#CDCCCF]">
            “Really digging the new extensions API in @raycastapp. A quick key
            combo and you can scroll through a big ol' list of community hotkeys
            and commands, basically. This is what I wanted more than a decade
            ago in the Alfred days; love it.”
          </p>
          <div className="flex flex-row items-center gap-1">
            <Image
              alt="Person"
              src="/assets/images/developers/tw.png"
              width={25}
              height={25}
            />
            <p className="text-[14px] font-light text-[#9B999E]">@holman</p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Link href="#" className="text-sm font-extralight text-white">
          Join the community {"->"}
        </Link>
      </div>
    </div>
  );
}
