import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Productivity() {
  return (
    <>
      <div className="mt-36">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-semibold text-white">
            Put the{" "}
            <div className="relative inline-block">
              <div className="absolute -right-[22px] -top-[20px] h-20 w-24">
                <Image
                  alt="Blur"
                  src="/assets/images/practice2/red-drop.png"
                  width={400}
                  height={150}
                />
              </div>
              <span className="text-[#FFE2E2] shadow-red-500 [text-shadow:0.5px_1px_10px_var(--tw-shadow-color)]">
                Pro
              </span>
            </div>
            <br></br> in{" "}
            <div className="relative inline-block">
              <div className="absolute -right-[22px] -top-[20px] h-20 w-24">
                <Image
                  alt="Blur"
                  src="/assets/images/practice2/red-drop.png"
                  width={400}
                  height={150}
                />
              </div>
              <span className="text-[#FFE2E2] shadow-red-500 [text-shadow:0.5px_1px_10px_var(--tw-shadow-color)]">
                Pro
              </span>
            </div>
            ductivity
          </h1>
          <p className="-mt-2 text-center font-light text-[#9B999E]">
            Turn Pro to harness the power of AI, make Raycast your own with
            custom themes,<br className="xl:hidden"></br> keep your Macs in sync
            and more.
          </p>
          <Button className="h-fit rounded-full border border-[#5F4451] bg-gradient-to-r from-[#432331] to-[#41323B] py-1.5 text-sm font-light text-white">
            Introducing Pro {"->"}
          </Button>
        </div>
        <div className="relative mt-32">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2">
            <Image
              alt="Code"
              src="/assets/images/practice2/code.png"
              width={700}
              height={700}
              quality={100}
            />
          </div>
          <Image
            alt="Chat"
            src="/assets/images/practice2/img2.png"
            width={1440}
            height={1000}
            quality={100}
          />
        </div>
      </div>
      <div className="mt-6 grid w-full grid-cols-3 gap-6 text-white lg:grid-cols-2 sm:grid-cols-1">
        <div className="flex aspect-square h-full w-full flex-col justify-between rounded-xl bg-gradient-to-r from-[#14101B] to-[#100C18] p-5 pb-8 lg:aspect-auto">
          <Image
            alt="Item"
            src="/assets/images/practice2/img3.png"
            width={400}
            height={400}
          />
          <h3 className="px-3.5 text-base font-semibold sm:py-2">
            Always-on ChatGPT
          </h3>
          <p className="px-3.5 text-sm font-light text-[#D0CFD1]">
            Ask anything, anytime, anywhere. Stuck while programming? Need some
            copy? Or just have a question - Ask AI.
          </p>
        </div>
        <div className="flex aspect-square h-full w-full flex-col justify-between rounded-xl bg-gradient-to-r from-[#14101B] to-[#100C18] p-5 pb-8 lg:aspect-auto">
          <Image
            alt="Item"
            src="/assets/images/practice2/img4.png"
            width={400}
            height={400}
          />
          <h3 className="px-3.5 text-base font-semibold sm:py-2">Cloud Sync</h3>
          <p className="px-3.5 text-sm font-light text-[#D0CFD1]">
            Keep everything safe and updated across your Macs. Perfect to switch
            between personal and work setup.
          </p>
        </div>
        <div className="flex aspect-square h-full w-full flex-col justify-between rounded-xl bg-gradient-to-r from-[#14101B] to-[#100C18] p-5 pb-8 lg:aspect-auto">
          <Image
            alt="Item"
            src="/assets/images/practice2/img5.png"
            width={400}
            height={400}
          />
          <h3 className="px-3.5 text-base font-semibold sm:py-2">
            Custom Themes & more
          </h3>
          <p className="px-3.5 text-sm font-light text-[#D0CFD1]">
            Make Raycast your own with gorgeous pre-made themes or design your
            own and share it with the community.
          </p>
        </div>
      </div>
      <div className="my-10">
        <Link href="#" className="text-sm font-extralight text-white">
          Learn about Raycast Pro {"->"}
        </Link>
      </div>
    </>
  );
}
