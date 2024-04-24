import Image from "next/image";

export default function Logos() {
  return (
    <div className="mx-auto grid w-fit grid-cols-4 content-end justify-items-center gap-4 xl:grid-cols-2 xl:gap-20 sm:grid-cols-1">
      <div className="mt-0.5">
        <Image
          alt="Forbes"
          src="/assets/images/practice/forbes.png"
          width={180}
          height={50}
        />
      </div>
      <div className="mt-2.5">
        <Image
          alt="Microsoft"
          src="/assets/images/practice/Microsoft.png"
          width={210}
          height={50}
        />
      </div>
      <div>
        <Image
          alt="Dell"
          src="/assets/images/practice/Dell.png"
          width={115}
          height={50}
        />
      </div>
      <div className="mt-1.5">
        <Image
          alt="Equinor"
          src="/assets/images/practice/Equinor.png"
          width={190}
          height={70}
        />
      </div>
    </div>
  );
}
