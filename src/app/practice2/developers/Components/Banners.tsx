import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banners() {
  return (
    <div className="mt-28 grid h-full w-full grid-cols-2 gap-4 lg:grid-cols-1">
      <div className="flex h-full w-full flex-col justify-between rounded-lg bg-gradient-to-br from-[#E3FCEB] via-[#0E938B] to-[#13615E]">
        <div className="lg:hfit h-fit p-10 sm:p-6 sm:pb-0">
          <Image
            alt="coding"
            src="/assets/images/developers/coding.png"
            width={800}
            height={600}
            className="rounded-xl xl:w-full"
          />
        </div>
        <div className="flex h-full flex-col justify-between p-10 pt-0 lg:h-fit sm:p-6">
          <div className="mt-1 h-fit">
            <h3 className="text-lg font-medium text-black">Start developing</h3>
            <p className="mt-2 line-clamp-5 overflow-ellipsis text-[18px] font-light text-[#093B41]">
              Build rich extensions with React, Node.js and TypeScript. Our docs
              cover guides, examples, references and more to help you build
              extensions and share them with our community.
            </p>
          </div>
          <Button className="mt-2 h-fit w-fit bg-gradient-to-r from-[#2A8A81] to-[#096C67] px-3 py-1.5 font-normal text-white">
            View Documentation
          </Button>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between rounded-lg bg-[#1E1B26]">
        <div className="overflow-hidden p-10 lg:h-fit sm:p-4 sm:pb-0">
          <Image
            alt="coding"
            src="/assets/images/developers/apps.png"
            width={800}
            height={600}
            className="scale[140%] mx-auto -mb-6 -mt-5 rounded-xl xl:w-full"
          />
        </div>
        <div className="flex h-fit flex-col justify-between p-10 pt-0 lg:h-fit sm:p-6">
          <div className="h-fit">
            <h3 className="text-lg font-medium text-white">Extensions</h3>
            <p className="mt-2 line-clamp-5 overflow-ellipsis text-[18px] font-light text-[#A5A3A8]">
              Complete tasks, create lists, browse media and improve your
              workflow. Manage all of your Extensions through a set of built-in
              developer tools, and publish Extensions to the Raycast Store, and
              share with the world.
            </p>
          </div>
          <Button className="mt-2 h-fit w-fit bg-[#36323C] px-3 py-1.5 font-normal text-white hover:bg-[#36323C]">
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}
