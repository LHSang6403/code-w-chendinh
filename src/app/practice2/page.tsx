import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="relative flex w-full flex-col items-center bg-[#05010D] pt-16">
      <Image
        alt="Search"
        src="/assets/images/practice2/main.png"
        width={1000}
        height={1000}
      ></Image>
      <div className="absolute top-6">
        <Image
          alt="Decor"
          src="/assets/images/practice2/bg.png"
          width={1000}
          height={1000}
          className="opacity-10"
        ></Image>
      </div>
      <div className="absolute left-36 top-80 h-[350px] w-[350px] rounded-full bg-[#F73A4B] opacity-20 shadow-[rgba(247,58,75,100)_0px_0px_400px_150px]"></div>
      <div className="absolute right-28 top-12 h-[400px] w-[400px] rounded-full bg-[#7000FF] opacity-20 shadow-[rgba(112,0,255,100)_0px_0px_400px_150px]"></div>
      <div className="absolute top-[590px] w-full text-center">
        <h1 className="w-full text-[70px] font-bold leading-[65px] text-white">
          <span className="w-full bg-gradient-to-r from-[#F73A4B] to-[#7000FF] bg-clip-text px-4 text-center italic text-transparent">
            Supercharged
          </span>{" "}
          <br></br>
          productivity
        </h1>
        <p className="mt-3 font-light text-[#86727A]">
          Raycast is a blazingly fast, totally extendable launcher. It lets you
          <br></br>
          complete tasks, calculate, share common links, and much more.
        </p>
      </div>
      <div className="mt-56 flex flex-col items-center justify-center">
        <Button className="bg-white px-6">Download for Mac</Button>
        <div className="mt-4 flex flex-row justify-center gap-4 text-[12px] font-extralight text-white">
          <div>v1.70.3</div>
          <div className="border-l border-r border-white px-4">macOS 12+</div>
          <div>Install via Homebrew</div>
        </div>
      </div>
      <div className="mt-28">
        <div className="h-full w-full rounded-xl bg-gradient-to-r from-[#882E20] to-[#62042D] p-[4px] shadow-[rgba(46,10,19,100)_0px_0px_8px_4px]">
          <div className="flex flex-row items-center justify-between rounded-[12px] border-[#321D20] bg-[#1E060A] py-8">
            <div className="text-white">
              <h2 className="text-xl">Raycast Merch</h2>
              <p className="mt-2 text-sm text-[#D2C0C8]">
                Exclusive collection of Raycast-branded apparel is now
                available.
              </p>
            </div>
            <Button className="h-fit bg-gradient-to-r from-[#330D10] to-[#2C0512] px-4 py-1">
              <span className="bg-gradient-to-r from-[#FC694D] to-[#BA2162] bg-clip-text font-light text-transparent">
                {"Get yours ->"}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-36 text-center">
        <h1 className="flex w-full flex-row items-center justify-center text-[55px] font-medium text-white">
          It’s as easy as <span className="ml-3 text-[#59D499]">installed</span>
          <div>
            <Image
              alt="Tick"
              src="/assets/images/practice2/tick.png"
              width={50}
              height={50}
            ></Image>
          </div>
        </h1>
        <p className="mt-2 font-light text-[#9B999E]">
          Say hello to the Store. A home for Extensions published by our
          community of<br></br> Developers using our API. Find extensions to the
          tools you use in your day-to-day.
        </p>
      </div>
      <div className="relative mt-16 w-full">
        <div className="h-[600px] w-full rounded-2xl bg-gradient-to-r from-[#ED88AA] via-[#7F1199] to-[#18164D]">
          <div className="w-1/2 p-10 pr-16 pt-28 text-white">
            <Image
              alt="Up"
              src="/assets/images/practice2/up.png"
              width={50}
              height={50}
            />
            <h2 className="mt-4 text-xl font-medium">
              One up your productivity
            </h2>
            <p className="mt-4 text-sm font-extralight">
              On top of the core Raycast Extensions already built in, you can
              install Extensions built by Developers from the community.
              Everything you’ve asked for, in one place. Search and browse
              Extensions for your tools, actions and more.
            </p>
            <Button className="mt-6 bg-gradient-to-r from-[#DC7DBE] to-[#BD4AC2] opacity-100">
              <span className="left-0 top-0 font-light text-white">
                Browse Extensions
              </span>
            </Button>
          </div>
        </div>
        <div className="absolute -right-20 top-6">
          <Image
            alt="Demo"
            src="/assets/images/practice2/img1.png"
            width={800}
            height={600}
          />
        </div>
        <div className="mt-6 flex flex-row gap-6 text-white">
          <div className="h-auto w-2/5 rounded-2xl bg-[#1E1A25] p-10">
            <div>
              <div>
                <Image
                  alt="Electric"
                  src="/assets/images/practice2/electric.png"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="mt-5 text-xl font-medium">
                Lightweight and snappy
              </h2>
              <p className="mt-4 font-extralight text-[#D2D1D3]">
                Designed to be seamless and instant. View an Extension and hit{" "}
                <Image
                  alt="Enter"
                  src="/assets/images/practice2/enter.png"
                  width={20}
                  height={20}
                  className="inline-block"
                />{" "}
                to simply install it in milliseconds.
              </p>
            </div>
            <Image
              alt="Todo"
              src="/assets/images/practice2/todos.png"
              width={500}
              height={500}
              className="mt-20"
            />
          </div>
          <div className="flex h-auto w-3/5 flex-col justify-between rounded-2xl bg-[#1E1A25] pt-10">
            <div>
              <div className="px-10">
                <Image
                  alt="Electric"
                  src="/assets/images/practice2/electric.png"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="mt-5 px-10 text-xl font-medium">
                An evergrowing collection
              </h2>
              <p className="mt-4 px-10 font-extralight text-[#D2D1D3]">
                Control Spotify or Apple Music with a hit of a button. Search
                through Figma, Notion, and Xcode. Check your internet speed and
                the weather without needing the browser, or even play a game of
                Snake.
              </p>
            </div>
            <Image
              alt="Todo"
              src="/assets/images/practice2/icons.png"
              width={1000}
              height={1000}
              className=""
            />
          </div>
        </div>
        <div className="my-10 flex flex-row justify-center">
          <Link href="#" className="font-extralight text-white">
            {"Explore the store ->"}
          </Link>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-bold text-white">
            Put the Pro in Productivity
          </h1>
          <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
            Turn Pro to harness the power of AI, make Raycast your own with
            custom themes,<br></br> keep your Macs in sync and more.
          </p>
          <Button className="h-fit rounded-full border border-[#5F4451] bg-gradient-to-r from-[#432331] to-[#41323B] py-1.5 text-white">
            Introducing Pro {"->"}
          </Button>
        </div>
        <div className="relative mt-36">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2">
            <Image
              alt="Code"
              src="/assets/images/practice2/code.png"
              width={700}
              height={700}
              quality={100}
            />
          </div>
          <Image
            alt="Chat"
            src="/assets/images/practice2/img2.png"
            width={1440}
            height={1000}
            quality={100}
          />
        </div>
      </div>
      <div className="mt-6 flex w-full flex-row gap-6 text-white">
        <div className="flex aspect-square w-1/3 flex-col justify-between rounded-xl bg-gradient-to-r from-[#14101B] to-[#100C18] p-5 pb-8">
          <Image
            alt="Item"
            src="/assets/images/practice2/img3.png"
            width={400}
            height={400}
          />
          <h3 className="px-3.5 text-lg font-semibold">Always-on ChatGPT</h3>
          <p className="px-3.5 text-sm font-light text-[#D0CFD1]">
            Ask anything, anytime, anywhere. Stuck while programming? Need some
            copy? Or just have a question - Ask AI.
          </p>
        </div>
        <div className="flex aspect-square w-1/3 flex-col justify-between rounded-xl bg-gradient-to-r from-[#14101B] to-[#100C18] p-5 pb-8">
          <Image
            alt="Item"
            src="/assets/images/practice2/img4.png"
            width={400}
            height={400}
          />
          <h3 className="px-3.5 text-lg font-semibold">Cloud Sync</h3>
          <p className="px-3.5 text-sm font-light text-[#D0CFD1]">
            Keep everything safe and updated across your Macs. Perfect to switch
            between personal and work setup.
          </p>
        </div>
        <div className="flex aspect-square w-1/3 flex-col justify-between rounded-xl bg-gradient-to-r from-[#14101B] to-[#100C18] p-5 pb-8">
          <Image
            alt="Item"
            src="/assets/images/practice2/img5.png"
            width={400}
            height={400}
          />
          <h3 className="px-3.5 text-lg font-semibold">Custom Themes & more</h3>
          <p className="px-3.5 text-sm font-light text-[#D0CFD1]">
            Make Raycast your own with gorgeous pre-made themes or design your
            own and share it with the community.
          </p>
        </div>
      </div>
      <div className="my-10">
        <Link href="#" className="text-sm font-light text-white">
          Learn about Raycast Pro {"->"}
        </Link>
      </div>
      <div className="h-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-bold text-white">
            Your Raycast. Your playground.
          </h1>
          <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
            Productivity is unique to everyone. Personalization is key. Extend
            Raycast the way<br></br> you want to, and build tools for you and
            your team with the API.
          </p>
        </div>
        <div className="relative mt-36 h-[600px] w-full rounded-2xl bg-gradient-to-r from-[#D4EAFA] via-[#571AA7] to-[#150539]">
          <div className="absolute -left-20 top-12">
            <Image
              alt="Code"
              src="/assets/images/practice2/code2.png"
              width={800}
              height={800}
            />
          </div>
          <div className="absolute left-56 top-20">
            <Image
              alt="Search"
              src="/assets/images/practice2/img6.png"
              width={500}
              height={500}
            />
          </div>
          <div className="ml-auto h-auto w-[500px] p-10 text-white">
            <Image
              alt="Build"
              src="/assets/images/practice2/build.png"
              width={50}
              height={50}
              className="mt-6"
            />
            <h2 className="mt-4 text-xl font-medium">
              Build what you’ve always wanted
            </h2>
            <p className="mt-4 text-sm font-extralight">
              Start building your perfect tools with the Raycast API, and
              streamline your workflows. Simply create Extensions with ease and
              publish directly to the Raycast Store seamlessly.
            </p>
            <p className="mt-4 text-sm font-extralight">
              Get started with the integrated developer tools in Raycast and
              build your first extension in no time.
            </p>
            <Button className="mt-6 bg-gradient-to-r from-[#290B53] to-[#1F0843] opacity-100">
              <span className="left-0 top-0 font-light text-white">
                Learn more
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-row gap-6">
        <div className="w-3/5 rounded-2xl bg-[#1D1B26] p-8 text-white">
          <div>
            <Image
              alt="Return"
              src="/assets/images/practice2/return.png"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Open source community</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            Build in the open and collaborate with other Developers on yours and
            their Extensions. Contribute as you’d like, and help others by
            building on top of existing Extensions.
          </p>
        </div>
        <div className="w-2/5 rounded-2xl bg-[#1D1B26] p-8 text-white">
          <div>
            <Image
              alt="Book"
              src="/assets/images/practice2/book.png"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Be part of the story</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            We listen to our community and build Raycast in collaboration with
            developers, to build the best product and developer experience
            across the platform.
          </p>
        </div>
      </div>
      <div className="my-10">
        <Link href="#" className="text-sm font-light text-white">
          Explore the docs {"->"}
        </Link>
      </div>
      <div className="h-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-bold text-white">
            Raycast for Teams
          </h1>
          <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
            Keep your team communicating efficiently and building faster with a
            shared space<br></br> in Raycast.
          </p>
        </div>
        <div className="relative mt-20 h-[600px] w-full rounded-2xl bg-gradient-to-r from-[#37B9EC] to-[#152871]">
          <div className="w-1/2 p-10 pr-16 pt-28 text-white">
            <Image
              alt="Up"
              src="/assets/images/practice2/tick2.png"
              width={50}
              height={50}
            />
            <h2 className="mt-4 text-xl font-medium">
              Save time on everyday tasks{" "}
            </h2>
            <p className="mt-4 text-sm font-extralight">
              Raycast isn’t just a tool for individuals. It’s also a tool,
              designed for sharing. From custom extensions, to Quicklinks and
              Snippets.
            </p>
            <p className="mt-4 text-sm font-extralight">
              What your team needs to get done, we offer an fabulously rich
              toolkit to do it swiftly, and at ease with your whole organization
              in harmony.
            </p>
            <Button className="mt-6 bg-gradient-to-r from-[#24769B] to-[#216B92] opacity-100">
              <span className="left-0 top-0 font-light text-white">
                Learn more
              </span>
            </Button>
          </div>
          <div className="absolute -right-16 top-6">
            <Image
              alt="People"
              src="/assets/images/practice2/img7.png"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-row gap-6">
        <div className="aspect-square w-1/3 rounded-2xl bg-[#1D1B26] p-10 text-white">
          <div>
            <Image
              alt="Return"
              src="/assets/images/practice2/return.png"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Shared Commands</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            Use React and TypeScript to build custom tooling that unlocks teams
            within your organization to do their best work, at speed. Share them
            in your private extension store.
          </p>
        </div>
        <div className="aspect-square w-1/3 rounded-2xl bg-[#1D1B26] p-10 text-white">
          <div>
            <Image
              alt="Link"
              src="/assets/images/practice2/link.png"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Shared Quicklinks</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            Effortlessly share common links with your team, such as project
            documentation in Notion, GitHub repos, Linear projects, and data
            dashboards - all with Quicklinks.
          </p>
        </div>
        <div className="aspect-square w-1/3 rounded-2xl bg-[#1D1B26] p-10 text-white">
          <div>
            <Image
              alt="Paragraph"
              src="/assets/images/practice2/para.png"
              width={50}
              height={50}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Shared Snippets</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            Create consistency with saved support responses, common text such as
            emails or addresses, and use dynamic placeholders for smart keyword
            expansion.
          </p>
        </div>
      </div>
      <div className="my-10">
        <Link href="#" className="text-sm font-light text-white">
          Learn about developing for teams {"->"}
        </Link>
      </div>
      <div className="mt-20 h-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-bold text-white">
            Productivity,<br></br> levelled up.
          </h1>
          <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
            Make Raycast your own, using the bundle of features available from
            day one.
          </p>
        </div>
        <div className="mt-16 flex h-fit w-full flex-col gap-4 px-20">
          <div className="flex h-fit w-full flex-row gap-4">
            <div className="flex w-1/3 flex-col gap-4">
              <div className="flex h-[450px] flex-col justify-center rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8">
                <div>
                  <Image
                    alt="Icon"
                    src="/assets/images/practice2/play.png"
                    width={40}
                    height={40}
                  />
                </div>
                <h2 className="mt-5 text-xl font-medium text-white">
                  Script Commands
                </h2>
                <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                  Write scripts in your favorite programming language to connect
                  to web APIs, control apps, tools, and more.
                </p>
                <Link
                  className="mt-4 flex flex-row items-center justify-between pr-2 text-sm font-light"
                  href="#"
                >
                  <span className="pr-4 text-[#D1CFD3]">
                    Check out more than 600 scripts from the community
                  </span>
                  <div>
                    <Image
                      alt="Link"
                      src="/assets/images/practice2/link2.png"
                      width={35}
                      height={35}
                      className="mt-2"
                    />
                  </div>
                </Link>
              </div>
              <div className="h-fit overflow-hidden rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22]">
                <div className="flex h-fit w-full flex-col bg-gradient-to-br from-[#7754AC] to-[#9D2C3A]">
                  <div className="relative h-8">
                    <div className="absolute left-0 top-0 flex h-full w-full bg-black opacity-30"></div>
                    <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-row items-center justify-between px-4">
                      <Image
                        alt="Cancel"
                        src="/assets/images/practice2/x.png"
                        width={35}
                        height={35}
                      />
                      <Image
                        alt="Cancel"
                        src="/assets/images/practice2/upload.png"
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                  <div className="px-6 py-5 text-sm text-white">
                    <p>
                      Knight Rider. A shadowy flight into the dangerous world of
                      a man who does not exist.
                    </p>
                    <p className="mt-4">
                      "And to our future. No matter who it may take us up
                      against or where."
                    </p>
                  </div>
                  <div className="relative h-8">
                    <div className="absolute left-0 top-0 flex h-full w-full bg-black opacity-30"></div>
                    <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-row items-center justify-between px-4">
                      <Image
                        alt="Paint"
                        src="/assets/images/practice2/paint.png"
                        width={35}
                        height={35}
                      />
                      <div className="text-[14px] font-extralight text-[#E0D4D8]">
                        31 words · 125 characters
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-[360px] flex-col justify-center p-8">
                  <div className="h-fit">
                    <div>
                      <Image
                        alt="Icon"
                        src="/assets/images/practice2/T.png"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h2 className="mt-5 text-xl font-medium text-white">
                      Floating Notes
                    </h2>
                    <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                      Floating Notes are a quick way to jot down a thought while
                      working on something else. Always handy when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-col gap-4">
              <div className="h-fit rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8">
                <div>
                  <Image
                    alt="Icon"
                    src="/assets/images/practice2/siri.png"
                    width={40}
                    height={40}
                  />
                </div>
                <h2 className="mt-5 text-xl font-medium text-white">
                  Shortcuts
                </h2>
                <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                  Search and run your macOS Shortcuts directly from Raycast.
                  Keeping everything in one place for fast access.
                </p>
              </div>
              <div className="h-fit rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22]">
                <div className="p-8">
                  <div>
                    <Image
                      alt="Icon"
                      src="/assets/images/practice2/siri.png"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h2 className="mt-5 text-xl font-medium text-white">
                    System Commands
                  </h2>
                  <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                    Control your Mac with over 20 system commands built in. From
                    turning up or down volume, to emptying your trash, sleep or
                    restarting your system, and much more.
                  </p>
                </div>
                <Image
                  alt="Icons"
                  src="/assets/images/practice2/icons2.png"
                  width={500}
                  height={400}
                  className="my-4"
                />
              </div>
              <div className="flex h-full flex-col justify-center rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] px-8 py-6">
                <div className="flex w-full justify-center">
                  <Image
                    alt="Icon"
                    src="/assets/images/practice2/settings.png"
                    width={40}
                    height={40}
                  />
                </div>
                <h2 className="mt-5 text-center font-medium text-white">
                  Build your own {"->"}
                </h2>
              </div>
            </div>
            <div className="flex w-1/3 flex-col gap-4">
              <div className="flex h-[450px] flex-col justify-center rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8">
                <div>
                  <Image
                    alt="Icon"
                    src="/assets/images/practice2/siri.png"
                    width={40}
                    height={40}
                  />
                </div>
                <h2 className="mt-5 text-xl font-medium text-white">
                  Search Files
                </h2>
                <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                  Search for files and folders the simple way, view metadata,
                  and perform common actions.
                </p>
                <div className="mt-6">
                  <Image
                    alt="Files"
                    src="/assets/images/practice2/files.png"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22]">
                <div className="flex h-full flex-col justify-center p-8">
                  <div>
                    <Image
                      alt="Icon"
                      src="/assets/images/practice2/siri.png"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h2 className="mt-5 text-xl font-medium text-white">
                    Quicklinks
                  </h2>
                  <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                    Open links in the browser, folders in the terminal or
                    projects in any text editor. And search the web much more
                    efficiently.
                  </p>
                  <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                    Use queries to perform searches on Google, Dribbble or other
                    websites, like below.
                  </p>
                </div>
                <div className="ml-3">
                  <Image
                    alt="Files"
                    src="/assets/images/practice2/search_dialog.png"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row justify-between rounded-xl bg-[#190F21]">
            <div className="mt-8 p-8 pr-0">
              <div>
                <Image
                  alt="Calculator"
                  src="/assets/images/practice2/cal.png"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="mt-5 text-xl font-medium text-white">
                Calculator
              </h2>
              <p className="mt-4 max-w-72 text-sm font-extralight text-[#A29EA6]">
                Solve simple math expressions, convert units, check timezones,
                calculate differences between days, months, and years, and do
                much more in natural language. Copy the answer to your clipboard
                to carry on with what you were doing before.
              </p>
            </div>
            <div>
              <Image
                alt="Search"
                src="/assets/images/practice2/search_dialog2.png"
                width={700}
                height={500}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-1 flex h-full w-full flex-row items-center justify-between rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] px-8">
              <div className="py-8">
                <h2 className="text-xl font-medium text-white">
                  Window Management
                </h2>
                <p className="mt-4 max-w-48 text-sm font-extralight text-[#A29EA6]">
                  Clean up your window mess with handy commands for organizing
                  your desktop on the fly and resizing app windows.
                </p>
              </div>
              <div>
                <Image
                  alt="Apps"
                  src="/assets/images/practice2/apps.png"
                  width={335}
                  height={300}
                />
              </div>
            </div>
            <div className="col-span-1 row-span-2 flex h-full flex-col justify-between rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22]">
              <div className="p-8 pb-0">
                <h2 className="text-xl font-medium text-white">Launch Apps</h2>
                <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                  Launch and switch app windows with just a few keystrokes. Quit
                  running ones, copy details, search menu items and more.
                </p>
              </div>
              <div className="-ml-2">
                <Image
                  alt="Search"
                  src="/assets/images/practice2/search_dialog4.png"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1 h-full rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8">
              <div>
                <Image
                  alt="Icon"
                  src="/assets/images/practice2/play.png"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="mt-5 text-xl font-medium text-white">
                Clipboard History
              </h2>
              <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                Search for text, images, files, links and colors that you copied
                earlier and paste it again. Pin your frequently used items to
                access them quicker.
              </p>
            </div>
            <div className="col-span-1 row-span-1 h-full rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8">
              <div>
                <Image
                  alt="Icon"
                  src="/assets/images/practice2/para-red.png"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="mt-5 text-xl font-medium text-white">
                Script Commands
              </h2>
              <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                Write faster by inserting frequently typed text such as canned
                emails, code pieces and more. Use keywords to auto-expand
                snippets in- place.
              </p>
            </div>
          </div>
          <div className="relative flex w-full flex-row justify-between rounded-xl bg-[#190F21]">
            <div>
              <Image
                alt="Search"
                src="/assets/images/practice2/search_dialog3.png"
                width={950}
                height={700}
              />
            </div>
            <div className="absolute right-10 top-0 mt-8 p-8 pr-0 pt-7">
              <div>
                <Image
                  alt="Calendar"
                  src="/assets/images/practice2/calendar.png"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="mt-5 text-xl font-medium text-white">
                My Schedule
              </h2>
              <p className="mt-4 max-w-48 text-[16px] font-extralight text-[#A29EA6]">
                Never miss another meeting. Join Zoom, Google Meet, Around
                meetings, and more, without digging around for a link and jump
                straight in to your calls. Check your upcoming schedule, block
                focus time or get an overview of your daily plan.
              </p>
              <div className="mt-4">
                <Image
                  alt="Apps"
                  src="/assets/images/practice2/apps2.png"
                  width={250}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Link href="#" className="text-sm font-light text-white">
          Explore the manuals {"->"}
        </Link>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-bold text-white">
            More focus, <span className="text-[#69676E]">less clutter.</span>
          </h1>
          <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
            Keep your workspace centralized, clean and tidy. Engineered with
            performance<br></br> and your privacy in mind.
          </p>
        </div>
        <div className="mt-16 flex flex-row gap-2 px-6">
          <div className="h-64 w-1/4 rounded-xl bg-[#0D0914] p-6">
            <Image
              alt="Icon"
              src="/assets/images/practice2/security.png"
              width={40}
              height={40}
            />
            <h2 className="mt-4 text-sm text-[#9B999E]">
              Security by default, always
            </h2>
            <p className="mt-3 text-sm font-extralight text-[#626067]">
              Everything is stored encrypted on your local disk, and nothing
              sensitive is tracked. You and your personal data stay anonymous.
            </p>
          </div>
          <div className="h-64 w-1/4 rounded-xl bg-[#0D0914] p-6">
            <Image
              alt="Icon"
              src="/assets/images/practice2/security.png"
              width={40}
              height={40}
            />
            <h2 className="mt-4 text-sm text-[#9B999E]">
              Make it your own, tailor it to you
            </h2>
            <p className="mt-3 text-sm font-extralight text-[#626067]">
              Enable the built-in extensions for an initial productivity boost.
              Use script commands and our API to build custom extensions to
              optimize your workflow.
            </p>
          </div>
          <div className="h-64 w-1/4 rounded-xl bg-[#0D0914] p-6">
            <Image
              alt="Icon"
              src="/assets/images/practice2/security.png"
              width={40}
              height={40}
            />
            <h2 className="mt-4 text-sm text-[#9B999E]">
              Learn once, remember forever
            </h2>
            <p className="mt-3 text-sm font-extralight text-[#626067]">
              Inspired by the command line interface, your tools are unified as
              commands, and follow the same structure to make you more
              productive.
            </p>
          </div>
          <div className="h-64 w-1/4 rounded-xl bg-[#0D0914] p-6">
            <Image
              alt="Icon"
              src="/assets/images/practice2/security.png"
              width={40}
              height={40}
            />
            <h2 className="mt-4 text-sm text-[#9B999E]">
              Perform tasks in a matter of seconds
            </h2>
            <p className="mt-3 text-sm font-extralight text-[#626067]">
              Raycast is built natively to be faster, lightweight, and
              efficient. Every action is optimized for speed and accessibility.
            </p>
          </div>
        </div>
      </div>
      <div className="my-52">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-bold text-white">
            Ready for take-off?
          </h1>
          <p className="-mt-2 text-center text-sm font-extralight text-[#9B999E]">
            Download the Raycast app and start taking your productivity to new
            heights.
          </p>
          <div className="h-fit w-fit rounded-[10px] bg-[#504D56] p-0.5">
            <Button className="w-56 bg-white">Download for Mac</Button>
          </div>
          <p className="font-light text-[#69676E]">or</p>
          <div className="relative h-11 w-56">
            <div className="absolute left-0 top-0 h-11 w-1/2 rounded-l-[8px] bg-gradient-to-r from-[#3C3A40] via-[#05010D] to-[#242227]"></div>
            <div className="absolute right-0 top-0 h-11 w-1/2 rounded-r-[8px] bg-gradient-to-l from-[#3C3A40] via-[#05010D] to-[#242227]"></div>
            <Button className="absolute bottom-[1px] left-[1px] right-[1px] top-[1px] h-auto w-auto bg-[#05010D] font-light text-[#69676E] hover:cursor-default">
              <p>$ brew install --cask raycast</p>
            </Button>
          </div>
          <p className="font-light text-[#69676E]">macOS 12+</p>
        </div>
      </div>
      <div className="flex h-44 w-full flex-row gap-6">
        <div className="flex h-full w-1/2 flex-col justify-center gap-4 rounded-xl bg-gradient-to-r from-[#315A6C] via-[#182955] to-[#0F0724] px-12 py-6">
          <div>
            <Image
              alt="Twitter"
              src="/assets/images/practice2/twitter.png"
              width={25}
              height={25}
            />
          </div>
          <h3 className="text-sm font-medium text-white">Stay up to date</h3>
          <p className="text-sm font-light text-[#A6B2C2]">
            We’d love to stay connected with you. If the feeling’s mutual,
            follow <span className="font-medium text-white">@raycastapp</span>{" "}
            on Twitter for the latest news and updates.
          </p>
        </div>
        <div className="flex h-full w-1/2 flex-col justify-center gap-4 rounded-xl bg-gradient-to-r from-[#643A66] via-[#3B0B1E] to-[#170410] px-12 py-6">
          <div>
            <Image
              alt="Twitter"
              src="/assets/images/practice2/slack.png"
              width={25}
              height={25}
            />
          </div>
          <h3 className="text-sm font-medium text-white">
            Help shape the product
          </h3>
          <p className="text-sm font-light text-[#A6B2C2]">
            Lots of the best and brightest ideas come from you. Join our Slack
            Community to help create the future of Raycast.
          </p>
        </div>
      </div>
      <div className="my-24 flex h-fit w-full flex-row gap-6 px-24">
        <div className="flex h-full w-1/2 flex-col justify-start gap-3 rounded-xl py-6">
          <h3 className="text-sm font-medium text-white">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm font-light text-[#9B999E]">
            Get a summary of what we’ve shipped during the last month, behind
            the scenes updates, and team picks.
          </p>
        </div>
        <div className="flex h-full w-1/2 flex-col justify-start gap-4 rounded-xl py-6">
          <div className="flex flex-row gap-4">
            <Input
              placeholder="james@java-lang.ca"
              className="border-[#1D1924] bg-[#120E19] opacity-60"
            ></Input>
            <Button className="bg-[#CFCFD1] px-8 font-light">Subscribe</Button>
          </div>
          <p className="text-[14px] font-light text-[#69676E]">
            By submitting your email address, you agree to receive Raycast’s
            monthly newsletter. For more information, please read our privacy
            policy. You can always withdraw your consent.
          </p>
        </div>
      </div>
    </div>
  );
}
