import { Button } from "@/components/ui/button";
import Header from "./Components/Header";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex h-auto w-full max-w-[1600px] flex-col items-center pb-20">
      <Header />
      <div className="flex h-auto w-full flex-col items-center px-10">
        <div className="relative w-full">
          <div className="absolute left-0 right-0 top-20 -z-10 h-[1000px] w-full">
            <Image
              src="/assets/images/practice3/grid-bg.png"
              alt="Logo"
              width={1600}
              height={1400}
              className="scale-[1.4]"
            />
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center gap-4">
          <h1 className="text-center text-6xl font-bold">
            The{" "}
            <span className="appearance-none bg-gradient-to-r from-[#9733ED] via-[#F22B9C] to-[#FD7A36] bg-clip-text text-transparent">
              visual builder
            </span>{" "}
            for
            <br className="xl:hidden"></br> your tech stack
          </h1>
          <p className="text-center font-light">
            Plasmic is an open-source visual editing and content platform for
            building<br className="xl:hidden"></br> websites and apps. Integrate
            with existing codebases. Ship incredibly fast.
          </p>
          <Button className="h-fit rounded-full bg-black px-6 py-2 text-[15px] font-light text-white">
            Get started free
          </Button>
        </div>
        <div className="mt-10">
          <Image
            src="/assets/images/practice3/main.png"
            alt="Logo"
            width={1400}
            height={1200}
          />
        </div>
        <div className="mt-10 flex w-full flex-col items-center">
          <p className="mb-4 text-sm font-light">
            Loved by teams around the world
          </p>
          <div className="flex flex-row items-center gap-2">
            <div>
              <Image
                src="/assets/images/practice3/logo1.png"
                alt="Logo"
                width={220}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo2.png"
                alt="Logo"
                width={110}
                height={50}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo3.png"
                alt="Logo"
                width={200}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo4.png"
                alt="Logo"
                width={220}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo5.png"
                alt="Logo"
                width={220}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo6.png"
                alt="Logo"
                width={220}
                height={150}
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              <Image
                src="/assets/images/practice3/logo7.png"
                alt="Logo"
                width={220}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo8.png"
                alt="Logo"
                width={260}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo9.png"
                alt="Logo"
                width={200}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo10.png"
                alt="Logo"
                width={200}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo11.png"
                alt="Logo"
                width={200}
                height={150}
              />
            </div>
            <div>
              <Image
                src="/assets/images/practice3/logo12.png"
                alt="Logo"
                width={210}
                height={150}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div>
              <Image
                src="/assets/images/practice3/logo13.png"
                alt="Logo"
                width={220}
                height={150}
              />
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="">
            <Button className="mb-2 h-fit rounded-full border border-[#E9DFFF] bg-white px-2 py-0.5 text-[15px] font-light text-[#7F4AFD]">
              HOW IT WORKS
            </Button>
          </div>
          <h1 className="text-center text-6xl font-bold">
            Build experience
            <br className="xl:hidden"></br>
            <span className="appearance-none bg-gradient-to-r from-[#03A7FF] to-[#8439F8] bg-clip-text px-4 text-center text-transparent">
              blazingly fast
            </span>
          </h1>
          <p className="text-center font-light">
            Get started with a growing library of ready-made components and
            popular data and<br className="xl:hidden"></br> app integrations.
            Build custom experiences with interactions and dynamic values.
          </p>
          <div className="mt-8 flex flex-row justify-center gap-3">
            <Button className="h-fit w-fit rounded-full bg-gradient-to-r from-[#707FFB] to-[#8537F8] p-[1px]">
              <span className="h-fit w-fit rounded-full border bg-white px-4 py-0.5 text-[15px] font-light text-black">
                Connect
              </span>
            </Button>
            <Button className="mb-2 h-fit rounded-full border border-[#E9DFFF] bg-white px-4 py-1 text-[15px] font-light text-black">
              Drag & Drop
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="relative w-full">
            <div className="absolute left-0 right-0 top-0 -z-10 h-[800px] w-full">
              <Image
                src="/assets/images/practice3/grid-bg2.png"
                alt="Logo"
                width={1600}
                height={1400}
                className="scale-[1.23]"
              />
            </div>
          </div>
          <div className="mt-6 bg-white">
            <Image
              src="/assets/images/practice3/main2.png"
              alt="Logo"
              width={1400}
              height={1200}
            />
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="">
            <Button className="mb-2 h-fit rounded-full border border-[#FFE9DE] bg-white px-2 py-0.5 text-[15px] font-light text-[#FC834C]">
              HOW IT WORKS
            </Button>
          </div>
          <h1 className="text-center text-6xl font-bold">
            Integrate with any
            <br></br>
            <span className="appearance-none bg-gradient-to-r from-[#FFB503] to-[#F83A79] bg-clip-text text-transparent">
              codebase
            </span>
          </h1>
          <p className="text-center font-light">
            Unlike other no-code and low-code builders, Plasmic integrates with
            your existing<br className="xl:hidden"></br> codebase, so you're
            never confined to a walled garden.
          </p>
        </div>
        <div className="mt-10 flex h-full flex-row items-center gap-8">
          <div className="flex h-full max-w-[500px] flex-col items-start justify-center gap-8 pr-10">
            <div>
              <Image
                src="/assets/images/practice3/cube.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-4xl">
              Build with your<br></br>
              <span className="appearance-none bg-gradient-to-r from-[#FFC123] to-[#f74882] bg-clip-text text-transparent">
                components
              </span>
            </h2>
            <p className="text-sm font-light">
              Harness the flexibility to create apps that fit
              <br className="xl:hidden"></br> your exact requirements. Bring
              your data<br className="xl:hidden"></br> sources, React
              components, deployment<br className="xl:hidden"></br>{" "}
              environments, design system, and more.
            </p>
          </div>
          <div className="h-fit">
            <Image
              src="/assets/images/practice3/components.png"
              alt="Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mt-4 flex h-fit flex-row items-center gap-8">
          <div>
            <Image
              src="/assets/images/practice3/dashboard.png"
              alt="Logo"
              width={550}
              height={550}
            />
          </div>
          <div className="flex h-full max-w-[500px] flex-col items-start justify-center gap-8 pl-10">
            <div>
              <Image
                src="/assets/images/practice3/cube2.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-4xl">
              Build within<br></br>{" "}
              <span className="appearance-none bg-gradient-to-r from-[#FFC123] to-[#f74882] bg-clip-text text-transparent">
                existing apps
              </span>
            </h2>
            <p className="text-sm font-light">
              Instead of iframes, Plasmic lets you build
              <br className="xl:hidden"></br> pages that integrate seamlessly
              within your<br className="xl:hidden"></br> current applications.
              Leverage your existing<br className="xl:hidden"></br> components
              and code for better<br className="xl:hidden"></br> performance and
              more cohesive user<br className="xl:hidden"></br> experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full flex-col items-center overflow-hidden rounded-3xl bg-[#060218] pb-20">
        <div className="relative w-full">
          <div className="absolute left-0 right-0 top-0 h-fit w-full">
            <Image
              src="/assets/images/practice3/black-blur-bg.png"
              alt="Logo"
              width={1600}
              height={1400}
            />
          </div>
          <div className="absolute left-0 right-0 top-52 h-fit w-full">
            <h1 className="text-center text-6xl font-bold text-white">
              Design experiences
              <br className="xl:hidden"></br> your users will{" "}
              <span className="appearance-none bg-gradient-to-r from-[#B153EA] to-[#FD9252] bg-clip-text text-transparent">
                love
              </span>
            </h1>
            <p className="mt-4 text-center font-light text-[#B5B3BA]">
              Design custom UIs with responsive layouts and styling that set
              <br className="xl:hidden"></br> you apart and delight your users.
            </p>
          </div>
        </div>
        <div className="mt-[900px] grid h-full w-fit grid-cols-2 gap-10">
          <div className="flex flex-col justify-center gap-6 pl-6">
            <div>
              <Image
                src="/assets/images/practice3/paint.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-4xl text-white">
              Create<br className="xl:hidden"></br> completely
              <br className="xl:hidden"></br> custome UIs
            </h2>
            <p className="text-sm text-[#B4B3BA]">
              Create unique, custom UIs with arbitrary
              <br className="xl:hidden"></br> layouts and styling that can be
              tailored to<br className="xl:hidden"></br> your specific needs and
              requirements.
            </p>
          </div>
          <div className="">
            <Image
              src="/assets/images/practice3/uis.png"
              alt="Logo"
              width={550}
              height={400}
            />
          </div>
          <div className="">
            <Image
              src="/assets/images/practice3/figma.png"
              alt="Logo"
              width={550}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center gap-6 pl-20">
            <div>
              <Image
                src="/assets/images/practice3/flower.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-4xl text-white">
              Import with<br className="xl:hidden"></br> Figma
            </h2>
            <p className="text-sm text-[#B4B3BA]">
              Quickly turn your Figma designs into React
              <br className="xl:hidden"></br> code for production in Plasmic
              Studio using<br className="xl:hidden"></br> the best-in-class
              Figma to code plugin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
