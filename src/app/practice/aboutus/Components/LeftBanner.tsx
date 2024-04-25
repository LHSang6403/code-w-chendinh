import Image from "next/image";

export default function LeftBanner() {
  return (
    <div className="z-10 flex h-fit w-1/2 justify-center pl-28 pr-10 xl:w-full xl:px-10 lg:-ml-6 lg:mb-20 sm:-ml-12 sm:px-0">
      <div className="relative h-fit w-fit">
        <div className="relative sm:w-full">
          <Image
            alt="People"
            src="/assets/images/practice/aboutus/people1.png"
            width={300}
            height={400}
            className="lg:w-[380px] sm:w-44"
          />
          <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-black opacity-30"></div>
        </div>
        <div className="absolute -right-24 top-36 lg:top-44 ">
          <Image
            alt="People"
            src="/assets/images/practice/aboutus/people2.png"
            width={250}
            height={400}
            className="lg:w-[300px] sm:w-44"
          />
        </div>
        <div className="absolute -left-10 top-20 sm:top-24">
          <div className="relative h-32 w-32 rounded-full bg-[#0F29B2] p-4 text-5xl text-white shadow-lg">
            <p className="mr-4 text-center font-extrabold">10</p>
            <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FBB90F] pt-1 font-extrabold text-white">
              <Image
                alt="Plus"
                src="/assets/images/practice/aboutus/plus.png"
                width={30}
                height={30}
              />
            </div>
            <p className="text-center text-sm font-bold">
              Years In Gobal Market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
