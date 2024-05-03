import { Button } from "@/components/ui/button";

export default function TakeOff() {
  return (
    <div className="my-44">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-center text-4xl font-bold text-white">
          Ready for take-off?
        </h1>
        <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
          Download the Raycast app and start taking your productivity to new
          heights.
        </p>
        <div className="h-fit w-fit rounded-[10px] bg-[#504D56] p-0.5">
          <Button className="w-56 bg-white">Download for Mac</Button>
        </div>
        <p className="font-light text-[#69676E]">or</p>
        <div className="relative h-11 w-56">
          <div className="absolute left-0 top-0 h-11 w-1/2 rounded-l-[8px] bg-gradient-to-r from-[#3C3A40] via-[#05010D] to-[#242227]"></div>
          <div className="absolute right-0 top-0 h-11 w-1/2 rounded-r-[8px] bg-gradient-to-l from-[#3C3A40] via-[#05010D] to-[#242227]"></div>
          <Button className="absolute bottom-[1px] left-[1px] right-[1px] top-[1px] h-auto w-auto bg-[#05010D] font-light text-[#69676E] hover:cursor-default">
            <p>$ brew install --cask raycast</p>
          </Button>
        </div>
        <p className="font-light text-[#69676E]">macOS 12+</p>
      </div>
    </div>
  );
}
