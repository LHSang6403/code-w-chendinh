import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Cards from "./Components/Cards";

export default function page() {
  return (
    <div className="flex h-auto w-full max-w-[1600px] flex-col overflow-hidden bg-[#F5F4F4]">
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black opacity-60"></div>
        <div className="absolute left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center">
          <span className="text-[80px] font-bold text-white xl:text-[65px] sm:mt-10 sm:text-[45px]">
            Services
          </span>
        </div>
        <div className="absolute left-0 top-5 z-20 flex h-fit w-full flex-row justify-between px-28 text-white xl:px-6 sm:flex-col sm:gap-2 sm:px-4">
          <h1 className="text-2xl font-bold">BUSINESS</h1>
          <Nav />
        </div>
        <Image
          alt="Main"
          src="/assets/images/practice/services/main.png"
          width={1600}
          height={700}
          className="xl:h-[400px] xl:object-cover"
        />
      </div>
      <div className="relative flex flex-row justify-center gap-10 py-16 xl:flex-col-reverse xl:px-6 sm:px-4 sm:pb-16">
        <div className="absolute -left-44 top-20 z-0 h-80 w-80 rounded-full bg-[#DEE0E7]"></div>
        <div className="z-10 flex h-fit w-[520px] flex-col bg-white shadow-[rgba(216,215,215,1)_0px_4px_8px_4px] xl:mt-16 xl:w-full">
          <div className="flex h-28 flex-row items-center gap-6 px-10 xl:justify-center">
            <h1 className="text-[55px] font-semibold text-[#1A367C]">
              99.9<span>%</span>
            </h1>
            <p className="text-xl font-light leading-5">
              Monitor And <br></br> Analyze Data
            </p>
          </div>
          <div className="flex h-28 flex-row items-center gap-6 border-b border-t px-10 xl:justify-center">
            <h1 className="text-[75px] font-bold text-[#1A367C]">4.9</h1>
            <div className="flex w-36 flex-col">
              <Image
                alt="Stars"
                src="/assets/images/practice/services/5stars.png"
                width={150}
                height={40}
              />
              <p className="ml-auto text-xl font-light">High Rated</p>
            </div>
          </div>
          <div className="flex h-28 flex-row items-center gap-6 px-10 xl:justify-center">
            <h1 className="text-[55px] font-semibold text-[#1A367C]">
              1000<span>+</span>
            </h1>
            <p className="text-xl font-light leading-5">
              Satisfied <br></br> Customers
            </p>
          </div>
        </div>
        <div className="relative h-full w-fit xl:-mt-6 xl:w-full sm:pb-6">
          <div className="mr-auto w-fit rounded-full bg-gradient-to-r from-[#1B377D] to-[#3060DB] px-6 py-1 text-2xl font-medium text-white">
            The Way We Work
          </div>
          <h1 className="mt-6 text-3xl font-semibold text-[#514B4B]">
            Achieving Your Business <br></br> Goals Efficiently
          </h1>
          <p className="mt-4 max-w-[670px] font-light leading-[38px] text-[#898989] xl:max-w-full">
            From humble beginnings to industry leadership, we’ve taken bold
            steps towards excellence. Join us in our ongoing pursuit of
            innovation. <br className="xl:hidden"></br> Welcome to our journey.
            From humble beginnings to industry leadership, we’ve taken bold
            steps towards excellence.{" "}
          </p>
          <div className="absolute -bottom-16 left-0 flex h-fit w-fit flex-row items-center gap-2 rounded-md rounded-br-[35px] bg-gradient-to-r from-[#22207F] to-[#0A80B2] py-1 pl-4 pr-24 sm:-bottom-16 sm:pr-4">
            <Image
              alt="Award"
              src="/assets/images/practice/services/award.png"
              width={40}
              height={40}
            />
            <div className="text-2xl text-white">
              Winner Agency of <br className="hidden sm:visible"></br> Decade
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-16 w-full">
        <div className="absolute -top-10 right-56 -rotate-[10deg]">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={150}
            height={120}
          />
        </div>
        <div className="absolute -top-12 left-52 -rotate-[40deg]">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={150}
            height={150}
          />
        </div>
        <h1 className="mx-4 text-center text-4xl font-medium text-[#514B4B] sm:text-3xl">
          Our Services
        </h1>
      </div>
      <div className="z-10 flex justify-center bg-[#1A367C]">
        <Cards />
      </div>
      <div className="relative flex justify-center pb-20 pt-32 xl:pb-16 sm:pb-12">
        <div className="absolute -right-[300px] -top-16 z-0 h-[550px] w-[550px] rounded-full bg-[#DFE1E8]"></div>
        <div className="absolute right-56 top-4 -rotate-[40deg] sm:right-10">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute left-52 top-4 sm:left-12">
          <Image
            alt="Decor"
            src="/assets/images/practice/bg-decor.png"
            width={130}
            height={130}
          />
        </div>
        <div className="z-10 w-fit xl:px-6 sm:px-4">
          <div className="ml-auto w-fit rounded-full bg-gradient-to-r from-[#1B377D] to-[#3060DB] px-6 py-1 text-3xl font-medium text-white sm:mx-0 sm:w-full sm:text-2xl">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="mt-6 flex flex-row items-start justify-center gap-10 lg:flex-col lg:items-center">
            <div className="">
              <Image
                alt="Man"
                src="/assets/images/practice/services/man.png"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col items-end gap-8 xl:items-center">
              <h2 className="max-w-[500px] text-3xl font-semibold text-[#514B4B] xl:max-w-full sm:px-4 sm:text-center">
                How We Can Benefit You and Your Business
              </h2>
              <div className="max-w-[500px] rounded-[45px] bg-[#EAEAEA] py-6 shadow-[rgba(216,215,215,1)_0px_4px_8px_4px] xl:max-w-full">
                <div className="px-10">
                  <h3 className="font-medium">
                    What challenges does business face today?
                  </h3>
                  <p className="mt-1 font-extralight">
                    Business is currently facing challenges in scaling and
                    market penetration
                  </p>
                </div>
                <hr className="my-4 w-full border-[0.4px] border-[#898989]"></hr>
                <div className="px-10">
                  <h3 className="font-medium">How to measure success?</h3>
                  <p className="mt-1 font-extralight">
                    Measure success through customer satisfaction, revenue
                    growth, and market share
                  </p>
                </div>
                <hr className="my-4 w-full border-[0.4px] border-[#898989]"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-20 mt-4 sm:mb-16">
        <hr className="mx-auto w-[96%] border-[#1B367C] sm:hidden"></hr>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1C3880] to-[#3061DE] px-10 py-1.5 shadow-[rgba(216,215,215,1)_0px_4px_8px_4px] sm:w-[calc(100vw_-_3rem)]">
          <span className="whitespace-nowrap text-lg font-extralight text-white underline decoration-1 underline-offset-4">
            Book Free Consultation
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
