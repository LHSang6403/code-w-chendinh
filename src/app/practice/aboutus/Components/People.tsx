import Image from "next/image";

export default function People() {
  return (
    <div className="mx-6 my-12 grid w-auto grid-cols-4 justify-center gap-3 xl:grid-cols-2 xl:gap-6 sm:mx-4 sm:grid-cols-1 sm:gap-4 sm:px-0">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="relative">
          <Image
            alt="Person"
            src="/assets/images/practice/aboutus/person.png"
            width={500}
            height={600}
          />
          <div className="absolute bottom-0 left-0 flex h-1/2 w-full flex-row items-end justify-between px-4 pb-4">
            <div>
              <p className="-mb-1 text-white">John Mcnab</p>
              <p className="text-[#D9D9D9]">Director</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <span className="text-lg font-medium text-black">in</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
