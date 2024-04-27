import Image from "next/image";

export default function Cards() {
  return (
    <div className="z-10 grid h-fit w-fit grid-cols-3 justify-center gap-4 px-6 lg:grid-cols-2 sm:grid-cols-1 sm:px-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="flex h-fit w-80 flex-col items-center gap-4 bg-white font-light shadow-xl xl:w-full"
        >
          <Image
            alt="People"
            src="/assets/images/practice/services/people.png"
            width={500}
            height={500}
          />
          <div className="mt-2 text-lg">Strategy planning</div>
          <p className="text-center text-[#898989]">
            Strategy defines how to <br></br> reach business goals
          </p>
          <button className="mt-2 flex w-full flex-row items-center justify-center gap-2 border-t border-t-[#E3E3E3] py-4 font-normal text-[#0D0B56]">
            <Image
              alt="Right"
              src="/assets/images/practice/services/arrow.png"
              width={20}
              height={20}
            />
            <span>Explore Services</span>
          </button>
        </div>
      ))}
    </div>
  );
}
