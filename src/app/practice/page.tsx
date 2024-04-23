import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="flex h-auto w-full max-w-[1440px] flex-col bg-[#F5F4F4]">
      <div className="relative text-white">
        <div className="absolute left-0 top-5 flex h-fit w-full flex-row justify-between px-32">
          <h1 className="font-bold">BUSINESS</h1>
          <div className="flex flex-row gap-4 font-medium">
            <Link href="#">home</Link>
            <Link href="#">about us</Link>
            <Link href="#">services</Link>
            <Link href="#">contact us</Link>
          </div>
        </div>
        <div className="gap6 absolute left-28 top-[32%]">
          <h1 className="max-w-[58%] text-5xl font-bold leading-tight">
            Unleashing Potential With Innovative Business Solutions
          </h1>
          <p className="mb-8 mt-6">
            transforming visions into reality: your success is our mission
          </p>
          <Button className="w-fit rounded-xl bg-white text-[#0D0B56]">
            contact us today
          </Button>
        </div>
        <Image
          alt="Main"
          src="/assets/images/practice/main-image.png"
          width={1440}
          height={1000}
        />
      </div>
      <div className="flex h-fit w-full flex-col items-center gap-5 pb-10 pt-8">
        <h1 className="text-3xl font-bold text-[#0D0B56]">our customers</h1>
        <div className="flex w-full flex-row items-end justify-center gap-12">
          <div>
            <Image
              alt="Forbes"
              src="/assets/images/practice/forbes.png"
              width={140}
              height={50}
            />
          </div>
          <div>
            <Image
              alt="Microsoft"
              src="/assets/images/practice/Microsoft.png"
              width={170}
              height={50}
            />
          </div>
          <div>
            <Image
              alt="Dell"
              src="/assets/images/practice/Dell.png"
              width={80}
              height={50}
            />
          </div>
          <div className="-mb-2">
            <Image
              alt="Equinor"
              src="/assets/images/practice/Equinor.png"
              width={150}
              height={70}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2">
          <Image
            alt="Consult"
            src="/assets/images/practice/consult.png"
            width={720}
            height={400}
          />
        </div>
        <div className="flex w-1/2 flex-col gap-6 bg-[#050829] p-4 text-white">
          <h2 className="max-w-[60%] text-3xl font-semibold">
            Driving Business Excellence
          </h2>
          <p className="max-w-[80%]">
            expert consultation for your business growth: we provide
            personalized strategies to navigate your business towards success.
            Our mission is to unlock your potential and transform your vision
            into reality.
          </p>
          <Button className="w-fit rounded-xl bg-white text-[#0D0B56]">
            get in touch
          </Button>
        </div>
      </div>
      <div className="relative flex flex-col items-center gap-12 py-6">
        <div className="absolute -top-24 -z-10 h-fit text-[350px] font-bold tracking-[3.2rem] text-[#F0EFEF]">
          RATF
        </div>
        <h1 className="text-3xl font-bold text-[#0D0B56]">testomonials</h1>
        <div className="flex flex-row gap-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="relative h-52 w-60 rounded-xl bg-[#FFFEFE] shadow-[rgba(216,215,215,1)_0px_0px_10px_5px]"
            >
              <div className="absolute -top-6 left-[50%] translate-x-[-50%]">
                <Image
                  alt="People 1"
                  src="/assets/images/practice/p1.png"
                  width={75}
                  height={75}
                  className="overflow-hidden rounded-full"
                />
              </div>
              <div className="mt-16 flex w-full flex-row justify-center gap-3">
                <Image
                  alt="Star"
                  src="/assets/images/practice/star.png"
                  width={25}
                  height={25}
                />
                <Image
                  alt="Star"
                  src="/assets/images/practice/star.png"
                  width={25}
                  height={25}
                />
                <Image
                  alt="Star"
                  src="/assets/images/practice/star.png"
                  width={25}
                  height={25}
                />
                <Image
                  alt="Star"
                  src="/assets/images/practice/star.png"
                  width={25}
                  height={25}
                />
                <Image
                  alt="Star"
                  src="/assets/images/practice/star.png"
                  width={25}
                  height={25}
                />
              </div>
              <div className="absolute -bottom-5 right-7 z-10 flex h-28 w-full flex-col justify-between rounded-br-xl rounded-tl-xl bg-[#FCFBFB] py-6 text-[14px] font-light shadow-[rgba(216,215,215,1)_0px_4px_10px_2px]">
                <p className="text-center">
                  Outstanding team with transformative solutions. Highly
                  endorsed!”
                </p>
                <p className="text-center">John Doe, CEO of XYZ Corporation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-[1100px] flex-col items-center gap-10 py-10">
        <h1 className="text-3xl font-bold text-[#0D0B56]">Flexible Pricing</h1>
        <div className="flex w-full flex-row gap-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="w-1/3 overflow-hidden rounded-md">
              <div className="flex h-12 w-full items-center justify-center bg-gradient-to-r from-[#2E3F83] to-[#BC208C] pb-2 font-medium text-white">
                <span className="w-fit">POPULAR</span>
              </div>
              <div className="-mt-2 flex h-fit w-full flex-col rounded-md bg-white">
                <div className="mx-auto mt-6 w-fit rounded-full bg-[#9BA5C5] px-6 text-white">
                  PROFESSIONAL
                </div>
                <h2 className="mx-auto my-4 text-3xl font-medium text-[#645757]">
                  Gold
                </h2>
                <div className="flex h-12 flex-row items-center gap-3 border-t border-[#898989] pl-12">
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
                <div className="flex h-12 flex-row items-center gap-3 border-t border-[#898989] pl-12">
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
                <div className="flex h-12 flex-row items-center gap-3 border-t border-[#898989] pl-12">
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
                <div className="flex h-12 flex-row items-center gap-3 border-t border-[#898989] pl-12">
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
              <div className="flex flex-col gap-2 bg-[#1A3476] p-3 pt-6">
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
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-28">
        <div className="flex flex-row items-center gap-1 font-extralight">
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
        <div className="flex flex-row items-center gap-1 font-extralight">
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
        <div className="flex flex-row items-center gap-1 font-extralight">
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
      <hr className="mx-auto my-10 w-80 border-[0.5px] border-[#47457E]"></hr>
      <div className="flex flex-row">
        <Image
          alt="Banner"
          src="/assets/images/practice/banner.png"
          width={1440}
          height={500}
        />
      </div>
      <hr className="mx-auto my-10 w-80 border-[0.5px] border-[#47457E]"></hr>
      <footer className="flex h-60 w-full flex-col justify-between bg-[#0D0B56] pt-10 text-white">
        <div className="flex flex-row justify-around">
          <div>
            <h1>BUSINESS</h1>
            <p className="font-extralight">
              Drive Your Business To <br></br> Success With Us
            </p>
          </div>
          <div>
            <h3>how to find us</h3>
            <p className="font-extralight">
              10 Downing Street <br></br> London <br></br> SW1A 2AA <br></br>{" "}
              United Kingdom
            </p>
          </div>
          <div className="flex flex-col">
            <h3>company</h3>
            <Link href="#" className="font-extralight">
              home
            </Link>
            <Link href="#" className="font-extralight">
              about us
            </Link>
            <Link href="#" className="font-extralight">
              services
            </Link>
            <Link href="#" className="font-extralight">
              contact us
            </Link>
          </div>
          <div>
            <h3>socila links</h3>
            <div className="flex flex-row gap-1">
              <Link href="#">
                <Image
                  alt="Facebook"
                  src="/assets/images/practice/fb.png"
                  width={35}
                  height={35}
                />
              </Link>
              <Link href="#">
                <Image
                  alt="Instagram"
                  src="/assets/images/practice/ins.png"
                  width={35}
                  height={35}
                />
              </Link>
              <Link href="#">
                <Image
                  alt="Youtube"
                  src="/assets/images/practice/ytb.png"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-8 items-center justify-center bg-[#645757] text-sm font-extralight">
          <span>Copyright © 2023 Business</span>
        </div>
      </footer>
    </div>
  );
}
