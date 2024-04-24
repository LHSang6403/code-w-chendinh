import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Plans() {
  return (
    <div className="flex w-full flex-row gap-4 xl:-mt-6 xl:flex-col xl:items-center">
      <div className="relative flex h-[660px] w-1/3 flex-col justify-between overflow-hidden rounded-md xl:h-[580px] xl:w-[90%]">
        <div className="flex h-12 w-full items-center justify-center pb-2 font-medium text-white"></div>
        <div className="absolute top-12 -mt-2 flex h-fit w-full flex-col items-center xl:top-0">
          <div className="mx-auto mt-6 w-fit rounded-full bg-[#9BA5C5] px-6 text-white">
            STARTER
          </div>
          <h2 className="mx-auto my-4 text-3xl font-medium text-[#645757]">
            Bronze
          </h2>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <span>Marketing Strategy</span>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>Competitors Analysis</p>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/red-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>ISO Audit & Certification</p>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/red-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>Business Management</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3 pt-8">
          <div className="mb-3 ml-auto flex flex-row gap-1 text-[#514B4B]">
            <div className="-my-3 text-[54px] font-bold">$19</div>
            <div className="line-clamp-2 w-fit break-words font-extralight leading-5">
              Per User/Month <br></br> Billed Annually*
            </div>
          </div>
          <Button className="rounded bg-[#1B367C] font-light text-white hover:bg-white">
            Join to Plan
          </Button>
          <Button
            variant="ghost"
            className="rounded bg-none font-light text-[#514B4B] hover:bg-[#1A3476]"
          >
            Cancel anytime
          </Button>
        </div>
      </div>
      <div className="relative flex h-[660px] w-1/3 flex-col justify-between overflow-hidden rounded-md shadow-[rgba(216,215,215,1)_0px_0px_10px_10px] xl:w-[90%]">
        <div className="flex h-12 w-full items-center justify-center bg-gradient-to-r from-[#2E3F83] to-[#BC208C] pb-2 font-medium text-white">
          <span className="w-fit">POPULAR</span>
        </div>
        <div className="absolute top-12 -mt-2 flex h-fit w-full flex-col items-center rounded-md bg-white">
          <div className="mx-auto mt-6 w-fit rounded-full bg-[#9BA5C5] px-6 text-white">
            PROFESSIONAL
          </div>
          <h2 className="mx-auto my-4 text-3xl font-medium text-[#645757]">
            Gold
          </h2>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <span>Marketing Strategy</span>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>Competitors Analysis</p>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>ISO Audit & Certification</p>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/red-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>Business Management</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#1A3476] p-3 pt-8">
          <div className="mb-3 ml-auto flex flex-row gap-1 text-white">
            <div className="-my-3 text-[54px] font-bold">$29</div>
            <div className="line-clamp-2 w-fit break-words font-extralight leading-5">
              Per User/Month <br></br> Billed Annually*
            </div>
          </div>
          <Button className="rounded bg-white font-light hover:bg-white">
            Join to Plan
          </Button>
          <Button
            variant="ghost"
            className="rounded bg-none font-light text-white hover:bg-[#1A3476]"
          >
            Cancel anytime
          </Button>
        </div>
      </div>
      <div className="relative flex h-[660px] w-1/3 flex-col justify-between overflow-hidden rounded-md xl:h-[580px] xl:w-[90%]">
        <div className="flex h-12 w-full items-center justify-center pb-2 font-medium text-white"></div>
        <div className="absolute top-12 -mt-2 flex h-fit w-full flex-col items-center xl:top-0">
          <div className="mx-auto mt-6 w-fit rounded-full bg-[#9BA5C5] px-6 text-white">
            ENTERPRISE
          </div>
          <h2 className="mx-auto my-4 text-3xl font-medium text-[#645757]">
            Platinum
          </h2>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <span>Marketing Strategy</span>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>Competitors Analysis</p>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>ISO Audit & Certification</p>
          </div>
          <hr className="w-full border-t border-[#898989]"></hr>
          <div className="flex h-12 w-52 flex-row items-center gap-3">
            <div>
              <Image
                alt="Tick"
                src="/assets/images/practice/blue-tick.png"
                width={15}
                height={15}
              />
            </div>
            <p>Business Management</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3 pt-8">
          <div className="mb-3 ml-auto flex flex-row gap-1 text-[#514B4B]">
            <div className="-my-3 text-[54px] font-bold">$69</div>
            <div className="line-clamp-2 w-fit break-words font-extralight leading-5">
              Per User/Month <br></br> Billed Annually*
            </div>
          </div>
          <Button className="rounded bg-[#1B367C] font-light text-white hover:bg-white">
            Join to Plan
          </Button>
          <Button
            variant="ghost"
            className="rounded bg-none font-light text-[#514B4B] hover:bg-[#1A3476]"
          >
            Cancel anytime
          </Button>
        </div>
      </div>
    </div>
  );
}
