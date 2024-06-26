import { Button } from "@/components/ui/button";

export default function TakeOff() {
  return (
    <div className="my-44">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-center text-4xl font-semibold text-white">
          Ready for take-off?
        </h1>
        <p className="-mt-2 text-center font-light text-[#9B999E]">
          Download the Raycast app and start taking your productivity
          <br className="xl:hidden"></br> to new heights.
        </p>
        <div className="mt-2 h-fit w-fit rounded-[10px] bg-[#504D56] p-0.5 sm:w-full">
          <Button className="w-60 bg-white hover:bg-white sm:w-full">
            Download for Mac
          </Button>
        </div>
        <p className="text-sm font-light text-[#69676E]">or</p>
        <div className="relative h-11 w-60 sm:w-full">
          <div className="absolute left-0 top-0 h-11 w-1/2 rounded-l-[8px] bg-gradient-to-r from-[#3C3A40] via-[#05010D] to-[#242227]"></div>
          <div className="absolute right-0 top-0 h-11 w-1/2 rounded-r-[8px] bg-gradient-to-l from-[#3C3A40] via-[#05010D] to-[#242227]"></div>
          <Button className="absolute bottom-[1px] left-[1px] right-[1px] top-[1px] h-auto w-auto bg-[#05010D] font-light text-[#69676E] hover:cursor-default">
            <p>
              <span className="mr-1.5">$</span> brew install --cask raycast
            </p>
          </Button>
        </div>
        <p className="text-sm font-light text-[#69676E]">macOS 12+</p>
      </div>
    </div>
  );
}
