import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "./components/Footer";
import Plans from "./components/Plans";
import People from "./components/People";
import Logos from "./components/Logos";
import { Input } from "@/components/ui/input";
import Nav from "./components/Nav";

export default function page() {
  return (
    <div className="-z-10 flex h-auto w-full max-w-[1600px] flex-col overflow-hidden bg-[#F5F4F4]">
      <div className="relative text-white sm:h-fit">
        <div className="bg-white/30 absolute left-0 top-0 h-full w-full backdrop-brightness-[0.4]"></div>
        <div className="absolute left-0 top-5 flex h-fit w-full flex-row justify-between px-28 xl:px-6 sm:flex-col sm:gap-2 sm:px-4">
          <h1 className="text-2xl font-bold">BUSINESS</h1>
          <Nav />
        </div>
        <div className="absolute left-28 top-[30%] h-fit xl:!bottom-6 xl:left-6 xl:top-auto sm:left-4">
          <h1 className="text-[67px] font-bold leading-tight xl:text-[40px] sm:text-xl">
            Unleashing Potential <br></br> With Innovative Business <br></br>{" "}
            Solutions
          </h1>
          <p className="mb-7 mt-3 text-xl xl:mb-4 xl:mt-1 sm:text-sm">
            Transforming visions into reality: your success is our mission
          </p>
          <Button className="w-fit rounded-xl bg-white text-base text-[#0D0B56]">
            Contact us today
          </Button>
        </div>
        <Image
          alt="Main"
          src="/assets/images/practice/main-image.png"
          width={1600}
          height={1000}
          className="xl:h-[500px] xl:object-cover"
        />
      </div>
      <div className="relative mb-16 mt-12 flex h-fit w-full flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-[#0D0B56] sm:text-3xl">
          our customers
        </h1>
        <div className="absolute -right-3 -top-6">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={175}
            height={175}
          />
        </div>
        <div className="absolute -left-12 -top-12 -rotate-[60deg]">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={175}
            height={175}
          />
        </div>
        <Logos />
      </div>
      <div className="flex flex-row xl:flex-col">
        <div className="w-1/2 xl:w-full">
          <Image
            alt="Consult"
            src="/assets/images/practice/consult.png"
            width={1500}
            height={600}
            quality={100}
          />
        </div>
        <div className="flex w-1/2 flex-col gap-6 bg-[#050829] p-4 pb-6 text-white xl:w-full xl:px-6 xl:pb-12 xl:pt-10 sm:px-4">
          <h2 className="text-4xl font-semibold">
            Driving Business <br></br> Excellence
          </h2>
          <p className="max-w-[80%] sm:max-w-full">
            Expert consultation for your business growth: we provide
            personalized strategies to navigate your business towards success.
            Our mission is to unlock your potential and transform your vision
            into reality.
          </p>
          <Button className="w-fit rounded-xl bg-white px-6 text-[#0D0B56]">
            get in touch
          </Button>
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-12 py-6">
        <div className="absolute -top-28 -z-10 h-fit pt-2 text-[380px] font-extrabold tracking-[2rem] text-[#F0EFEF]">
          RATF
        </div>
        <div className="absolute left-24 top-2 -rotate-[60deg]">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={145}
            height={145}
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-[#0D0B56] sm:text-3xl">
          testomonials
        </h1>
        <People />
      </div>
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-16 pb-12 pt-16 xl:w-full sm:pb-6">
        <div className="absolute left-4 top-16">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute right-0 top-5">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute -top-24 left-[50%] -z-10 h-fit translate-x-[-50%] text-[370px] font-extrabold text-[#F0EFEF]">
          IT
        </div>
        <h1 className="text-4xl font-bold text-[#0D0B56] sm:text-3xl">
          Flexible Pricing
        </h1>
        <Plans />
      </div>
      <div className="flex w-full flex-row justify-center gap-28 text-[#898989] xl:gap-10 sm:flex-col sm:items-center">
        <div className="flex flex-row items-center gap-1 font-light">
          <div className="mb-0.5">
            <Image
              alt="Date"
              src="/assets/images/practice/i1.png"
              width={15}
              height={15}
            />
          </div>
          <span className="text-sm">30 Day Free Trial</span>
        </div>
        <div className="flex flex-row items-center gap-1 font-light">
          <div>
            <Image
              alt="Date"
              src="/assets/images/practice/i2.png"
              width={15}
              height={15}
            />
          </div>
          <span className="text-sm">No Hidden Fees</span>
        </div>
        <div className="flex flex-row items-center gap-1 font-light">
          <div>
            <Image
              alt="Date"
              src="/assets/images/practice/i3.png"
              width={15}
              height={15}
            />
          </div>
          <span className="text-sm">Free to cancel anytime</span>
        </div>
      </div>
      <hr className="mx-auto my-10 w-72 border-[0.5px] border-[#47457E]"></hr>
      <div className="text-white">
        <div className="flex h-full w-full flex-row xl:flex-col">
          <Image
            alt="Banner"
            src="/assets/images/practice/b1.png"
            width={1440}
            height={600}
            className="sm:h-52"
          />
          <div className="relative">
            <div className="absolute left-6 right-6 top-6 h-fit w-auto">
              <h2 className="text-4xl font-bold xl:text-center sm:text-2xl">
                We Will Help you to Grow
              </h2>
              <div className="mt-5 flex flex-row items-center justify-between gap-3 sm:mt-0 sm:flex-col">
                <p className="text-xl font-medium sm:text-lg">
                  Sign Up <br className="sm:hidden"></br> For Newsletter
                </p>
                <Input className="mr-1 w-52 rounded-full border-none bg-[#C0B9AB] opacity-85 xl:w-72 sm:mr-0 sm:w-36"></Input>
                <Button className="h-9 rounded-2xl text-lg font-light">
                  subscribe
                </Button>
              </div>
            </div>
            <Image
              alt="Banner"
              src="/assets/images/practice/b2.png"
              width={1440}
              height={600}
              className="sm:h-52"
            />
          </div>
        </div>
      </div>
      <hr className="mx-auto my-10 w-72 border-[0.5px] border-[#47457E]"></hr>
      <Footer />
    </div>
  );
}
