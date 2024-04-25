import Image from "next/image";
import Nav from "../components/Nav";
import Items from "./Components/Items";
import Footer from "../components/Footer";
import People from "./Components/People";
import LeftBanner from "./Components/LeftBanner";

export default function page() {
  return (
    <div className="flex h-auto w-full max-w-[1600px] flex-col overflow-hidden bg-[#F5F4F4]">
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center bg-[#282660] opacity-80">
          <span className="text-[80px] font-bold text-white xl:text-[65px] sm:text-[45px]">
            Who We Are?
          </span>
        </div>
        <div className="absolute left-0 top-5 z-20 flex h-fit w-full flex-row justify-between px-28 text-white xl:px-6 sm:flex-col sm:gap-2 sm:px-4">
          <h1 className="text-2xl font-bold">BUSINESS</h1>
          <Nav />
        </div>
        <Image
          alt="Main"
          src="/assets/images/practice/aboutus/main.png"
          width={1600}
          height={700}
          className="xl:h-[400px] xl:object-cover"
        />
      </div>
      <div className="relative px-8 py-16 xl:px-6 xl:py-10 sm:px-4">
        <div className="absolute -right-2 top-6 -scale-[0.8]">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={175}
            height={175}
          />
        </div>
        <div className="mr-auto w-fit rounded-full bg-gradient-to-r from-[#1B377D] to-[#3060DB] px-6 py-1 text-2xl font-medium text-white">
          About Company
        </div>
        <div className="mb-16 mt-12 flex flex-row items-center justify-between xl:items-start sm:mt-8 sm:flex-col">
          <h2 className="text-4xl font-semibold text-[#514B4B] xl:w-1/2 sm:w-full">
            Discover Our Story of <br className="sm:hidden"></br> Success
          </h2>
          <p className="font-light leading-8 text-[#898989] xl:w-1/2 sm:w-full">
            From humble beginnings to industry leadership, we’ve{" "}
            <br className="sm:hidden"></br> taken bold steps towards excellence.
            Join us in our ongoing <br className="sm:hidden"></br> pursuit of
            innovation. Welcome to our journey.
          </p>
        </div>
        <Items />
      </div>
      <div className="relative my-4">
        <hr className="mx-auto w-[96%] border-[#1B367C] sm:hidden"></hr>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1C3880] to-[#3061DE] px-6 py-1.5 shadow-[rgba(216,215,215,1)_0px_4px_8px_4px] sm:w-[90%]">
          <Image
            alt="Talk"
            src="/assets/images/practice/aboutus/talk-icon.png"
            width={35}
            height={35}
          />
          <span className="whitespace-nowrap font-extralight text-white underline decoration-1 underline-offset-4">
            GOT SOMETHING IN MIND?
          </span>
        </div>
      </div>
      <div className="relative mb-12 flex flex-row gap-8 px-8 pt-16 xl:mb-16 xl:flex-col xl:px-6 sm:px-4">
        <div className="absolute right-28 top-4 -scale-[0.9]">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={175}
            height={175}
          />
        </div>
        <div className="absolute -right-[225px] top-1/2 z-0 h-[500px] w-[500px] -translate-y-1/3 rounded-full bg-[#DEDDE4]"></div>
        <LeftBanner />
        <div className="z-10 flex w-1/2 flex-col gap-6 xl:w-full sm:mt-20">
          <div className="mr-auto w-fit rounded-full bg-gradient-to-r from-[#1B377D] to-[#3060DB] px-6 py-1 text-2xl font-medium text-white">
            Our Values
          </div>
          <h2 className="mt-2 text-4xl font-semibold text-[#514B4B]">
            Empowering Success <br></br> Through Insightful <br></br> Solutions
          </h2>
          <p className="font-light leading-8 text-[#898989]">
            At our consulting firm, we are dedicated to delivering <br></br>{" "}
            insightful and innovative solutions tailored to each <br></br>{" "}
            client’s unique needs. Our unwavering commitment <br></br> is to
            drive our clients’ success, treating their <br></br> objectives as
            our own. 
          </p>
          <div className="flex flex-row gap-4">
            <Image
              alt="Left"
              src="/assets/images/practice/aboutus/narrowleft.png"
              width={40}
              height={40}
            />
            <Image
              alt="right"
              src="/assets/images/practice/aboutus/narrowright.png"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-center text-4xl font-semibold text-[#514B4B]">
          We Are Here to Help You
        </h1>
        <People />
      </div>
      <div className="relative mb-20 mt-8 xl:mb-16 xl:mt-6">
        <hr className="mx-auto w-[96%] border-[#1B367C] sm:hidden"></hr>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center gap-2 rounded-full bg-gradient-to-r from-[#1C3880] to-[#3061DE] px-6 py-1.5 shadow-[rgba(216,215,215,1)_0px_4px_8px_4px] sm:w-[90%]">
          <span className="w-full whitespace-nowrap text-center font-extralight text-white underline decoration-1 underline-offset-4">
            Book Free Consultation
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
