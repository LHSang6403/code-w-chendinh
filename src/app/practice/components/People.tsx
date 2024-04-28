import Image from "next/image";

export default function People() {
  return (
    <div className="mx-auto grid w-fit grid-cols-3 gap-3 xl:w-full xl:grid-cols-1 xl:gap-24 sm:pr-4 sm:pl-12">
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className="relative h-52 w-60 rounded-xl bg-[#FFFEFE] shadow-[rgba(216,215,215,1)_0px_0px_10px_5px] xl:mx-auto xl:w-[80%] sm:w-full"
        >
          <div className="absolute -top-10 left-[50%] translate-x-[-50%]">
            <Image
              alt="People 1"
              src="/assets/images/practice/p1.png"
              width={100}
              height={100}
              className="overflow-hidden rounded-full"
            />
          </div>
          <div className="mt-16 flex w-full flex-row justify-center gap-1.5">
            {Array.from({ length: 5 }, (_, index) => (
              <Image
                key={index}
                alt="Star"
                src="/assets/images/practice/star.png"
                width={38}
                height={38}
              />
            ))}
          </div>
          <div className="absolute -bottom-5 right-7 z-10 flex h-28 w-full flex-col justify-between rounded-br-xl rounded-tl-xl bg-[#FCFBFB] py-6 text-[14px] font-light italic shadow-[rgba(216,215,215,1)_0px_4px_10px_2px]">
            <p className="text-center">
              Outstanding team with transformative solutions. Highly endorsed!”
            </p>
            <p className="text-center">John Doe, CEO of XYZ Corporation</p>
          </div>
        </div>
      ))}
    </div>
  );
}
