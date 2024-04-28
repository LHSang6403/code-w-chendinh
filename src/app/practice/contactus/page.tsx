import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Forms from "./Components/Forms";

export default function page() {
  return (
    <div className="flex h-auto w-full max-w-[1600px] flex-col overflow-hidden bg-[#F5F4F4]">
      <div className="relative z-10">
        <div className="absolute -bottom-[110px] right-4 -z-10">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black opacity-60">
          <span className="text-[80px] font-bold text-white xl:text-[65px] sm:mt-10 sm:text-[45px]">
            Contact Us
          </span>
        </div>
        <div className="absolute left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center">
          <span className="text-[80px] font-bold text-white xl:text-[65px] sm:mt-10 sm:text-[45px]">
            Contact Us
          </span>
        </div>
        <div className="absolute left-0 top-5 z-20 flex h-fit w-full flex-row justify-between px-28 text-white xl:px-6 sm:flex-col sm:gap-2 sm:px-4">
          <h1 className="text-2xl font-bold">BUSINESS</h1>
          <Nav />
        </div>
        <Image
          alt="Main"
          src="/assets/images/practice/contactus/main.png"
          width={1600}
          height={700}
          className="xl:h-[400px] xl:object-cover"
        />
      </div>
      <div className="flex flex-row items-center justify-between gap-10 px-10 pb-8 pt-16 xl:flex-col xl:px-6 sm:px-4">
        <h1 className="text-4xl font-medium text-[#514B4B] sm:text-3xl">
          Want to make your business better? Contact us today!
        </h1>
        <p className="text-lg font-light text-[#898989]">
          Our team is ready to assist you and address any queries you may have.
          We eagerly await your communication.{" "}
        </p>
      </div>
      <div className="h-fit w-full">
        <Image
          alt="Map"
          src="/assets/images/practice/contactus/map.png"
          width={1650}
          height={500}
          className="-pr-4"
        />
      </div>
      <div className="z-10 px-10 pb-16 pt-4 xl:px-6 sm:px-4">
        <div className="w-fit rounded-full bg-gradient-to-r from-[#1B377D] to-[#3060DB] px-6 py-1 text-3xl font-medium text-white xl:mx-auto xl:mt-4 sm:mx-4 sm:text-2xl">
          GET IN TOUCH WITH US
        </div>
        <div className="relative flex w-full flex-col items-center">
          <div className="absolute -top-10 right-3 rotate-[13.5deg]">
            <Image
              alt="Decor"
              src="/assets/images/practice/bg-decor.png"
              width={150}
              height={150}
            />
          </div>
          <div className="absolute left-4 top-4 rotate-[13.5deg]">
            <Image
              alt="Decor"
              src="/assets/images/practice/bg-decor.png"
              width={140}
              height={140}
            />
          </div>
          <h1 className="mb-16 mt-12 text-4xl text-[#514B4B] sm:text-3xl">
            How we can assist you?
          </h1>
          <Forms />
        </div>
      </div>
      <div className="relative">
        <div className="absolute -right-52 -top-[350px] z-0 h-[700px] w-[700px] rounded-full bg-[#DEDDE4]"></div>
      </div>
      <div className="relative z-10 mb-20 mt-4">
        <hr className="mx-10 w-auto border-[#1B367C] xl:mx-6 sm:mx-4 sm:hidden"></hr>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1C3880] to-[#3061DE] px-10 py-1.5 shadow-[rgba(216,215,215,1)_0px_4px_8px_4px] sm:w-[calc(_100vw_-_2.5rem)]">
          <span className="whitespace-nowrap text-lg font-extralight text-white underline decoration-1 underline-offset-4">
            Book Free Consultation
          </span>
        </div>
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
}
