import Image from "next/image";

export default function Items() {
  return (
    <div className="realtive grid grid-cols-4 items-center justify-center gap-20 xl:grid-cols-2 xl:gap-6 sm:grid-cols-1">
      <div className="absolute left-52 top-64 rotate-[13deg] -scale-[0.75]">
        <Image
          alt="Decor"
          src="/assets/images/practice/bg-decor.png"
          width={175}
          height={175}
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          alt="Trust"
          src="/assets/images/practice/aboutus/trust.png"
          width={60}
          height={50}
          className="-mt-4"
        />
        <h3 className="mt-1.5 text-center text-lg font-semibold text-[#0D0B56]">
          Trusted Business
        </h3>
        <p className="mt-1 text-center text-lg font-light leading-8 text-[#898989]">
          We deliver success to <br></br> your business.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          alt="Action"
          src="/assets/images/practice/aboutus/action.png"
          width={70}
          height={50}
        />
        <h3 className="mt-4 text-center text-lg font-semibold text-[#0D0B56]">
          Expertise in Action
        </h3>
        <p className="mt-1 text-center text-lg font-light leading-8 text-[#898989]">
          We assist our clients to <br></br> set right strategy.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          alt="Medal"
          src="/assets/images/practice/aboutus/medal.png"
          width={70}
          height={50}
        />
        <h3 className="mt-4 text-center text-lg font-semibold text-[#0D0B56]">
          Recognized Excellence
        </h3>
        <p className="mt-1 text-center text-lg font-light leading-8 text-[#898989]">
          We see challenges as <br></br> opportunities.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          alt="Ask"
          src="/assets/images/practice/aboutus/ask.png"
          width={70}
          height={50}
        />
        <h3 className="mt-4 text-center text-lg font-semibold text-[#0D0B56]">
          Always Ready to Help
        </h3>
        <p className="mt-1 text-center text-lg font-light leading-8 text-[#898989]">
          We Deliver success to <br></br> your business.
        </p>
      </div>
    </div>
  );
}
