import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex h-fit w-full flex-col justify-between bg-[#0D0B56] text-white">
      <div className="mx-auto my-16 flex w-fit flex-row justify-center gap-28 px-6 xl:gap-10 md:my-6 md:flex-col sm:gap-10 sm:px-4">
        <div className="mt-8 w-full xl:mt-4">
          <h1 className="text-3xl font-semibold">BUSINESS</h1>
          <p className="ml-5 mt-2 font-extralight">
            Drive Your Business To <br className="md:hidden"></br> Success With
            Us
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-medium">how to find us</h3>
          <p className="mt-3 font-extralight leading-5 md:ml-5">
            10 Downing Street <br className="md:hidden"></br> London{" "}
            <br className="md:hidden"></br> SW1A 2AA{" "}
            <br className="md:hidden"></br> United Kingdom
          </p>
        </div>
        <div className="flex w-full flex-col">
          <h3 className="text-2xl font-medium">company</h3>
          <div className="flex flex-col pl-3 md:pl-5">
            <Link href="#" className="mt-3 font-extralight">
              home
            </Link>
            <Link href="#" className="mt-3 font-extralight">
              about us
            </Link>
            <Link href="#" className="mt-3 font-extralight">
              services
            </Link>
            <Link href="#" className="mt-3 font-extralight">
              contact us
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h3 className="w-fit text-center text-xl font-medium xl:text-start">
            socila links
          </h3>
          <div className="flex flex-row gap-1 md:mt-3 md:gap-4 md:pl-5">
            <Link href="#">
              <Image
                alt="Facebook"
                src="/assets/images/practice/fb.png"
                width={50}
                height={50}
              />
            </Link>
            <Link href="#">
              <Image
                alt="Instagram"
                src="/assets/images/practice/ins.png"
                width={45}
                height={45}
              />
            </Link>
            <Link href="#">
              <Image
                alt="Youtube"
                src="/assets/images/practice/ytb.png"
                width={50}
                height={50}
                className="-mt-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-7 items-center justify-center bg-[#645757] text-sm font-extralight">
        <span>Copyright © 2023 Business</span>
      </div>
    </footer>
  );
}
