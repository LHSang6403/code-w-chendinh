import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banners() {
  return (
    <div className="mt-28 flex h-fit w-full flex-row items-center gap-4 lg:flex-col">
      <div className="flex h-full w-1/2 flex-col justify-between rounded-lg bg-gradient-to-br from-[#E3FCEB] via-[#0E938B] to-[#13615E] lg:w-full">
        <div className="h-[300px] px-4 lg:h-fit lg:px-2 sm:pt-4">
          <Image
            alt="coding"
            src="/assets/images/developers/coding.png"
            width={600}
            height={400}
            className="mt-8 xl:-mb-12 xl:w-full"
          />
        </div>
        <div className="flex h-[270px] flex-col justify-between p-10 pt-0 lg:h-fit sm:p-6">
          <div>
            <h3 className="text-lg font-medium text-black">Start developing</h3>
            <p className="mt-2 line-clamp-5 overflow-ellipsis text-[18px] font-light text-[#093B41]">
              Build rich extensions with React, Node.js and TypeScript. Our docs
              cover guides, examples, references and more to help you build
              extensions and share them with our community.
            </p>
          </div>
          <Button className="-[#096C67] mt-2 h-fit w-fit bg-gradient-to-r from-[#2A8A81] to-[#096C67] px-3 py-1.5 font-normal text-white">
            View Documentation
          </Button>
        </div>
      </div>
      <div className="flex h-full w-1/2 flex-col justify-between rounded-lg bg-[#1E1B26] lg:w-full">
        <div className="h-[300px] px-4 lg:h-fit lg:px-2 sm:pt-4">
          <Image
            alt="coding"
            src="/assets/images/developers/apps.png"
            width={600}
            height={400}
            className="xl:w-full"
          />
        </div>
        <div className="flex h-[270px] flex-col justify-between p-10 pt-0 lg:h-fit sm:p-6">
          <div>
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
