import Image from "next/image";
import Link from "next/link";

export default function ProductivityLevelled() {
  return (
    <>
      <div className="mt-36 h-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-semibold text-white">
            Productivity,<br></br> levelled up.
          </h1>
          <p className="-mt-2 text-center font-light text-[#9B999E]">
            Make Raycast your own, using the bundle of features available from
            day one.
          </p>
        </div>
        <div className="mx-auto mt-16 flex h-fit w-full max-w-[1440px] flex-col gap-4 px-20 lg:px-0">
          <div className="grid h-fit w-full grid-cols-3 gap-4 xl:grid-cols-2">
            <div className="flex h-fit w-full flex-col gap-4 sm:col-span-2">
              <div className="flex h-[450px] flex-col justify-center rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8 sm:h-fit sm:w-full">
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
              <div className="h-fit overflow-hidden rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] sm:w-full">
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
                  <div className="px-6 py-5 text-sm font-light text-white">
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
                <div className="flex h-[360px] flex-col justify-center p-8 sm:h-fit">
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
            <div className="flex h-full w-full flex-col gap-4 sm:col-span-2">
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
            <div className="flex h-full w-full flex-col gap-4 xl:col-span-2 xl:flex-row sm:flex-col">
              <div className="flex h-[450px] flex-col justify-center rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8 xl:h-full xl:w-1/2 sm:h-fit sm:w-full">
                <div>
                  <Image
                    alt="Icon"
                    src="/assets/images/practice2/search-red.png"
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
              <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] xl:w-1/2 sm:w-full">
                <div className="flex h-full flex-col justify-center p-8">
                  <div>
                    <Image
                      alt="Icon"
                      src="/assets/images/practice2/search-red.png"
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
                <div className="ml-3 sm:ml-1">
                  <Image
                    alt="Files"
                    src="/assets/images/practice2/search_dialog.png"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between rounded-xl bg-[#190F21] sm:flex-col">
            <div className="mt-8 p-8 pr-0 xl:w-1/2 sm:w-full">
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
              <p className="mt-4 max-w-64 text-sm font-extralight text-[#A29EA6]">
                Solve simple math expressions, convert units, check timezones,
                calculate differences between days, months, and years, and do
                much more in natural language. Copy the answer to your clipboard
                to carry on with what you were doing before.
              </p>
            </div>
            <div className="xl:w-1/2 sm:w-full sm:pb-4">
              <Image
                alt="Search"
                src="/assets/images/practice2/search_dialog2.png"
                width={700}
                height={500}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 xl:grid-cols-2 xl:grid-rows-1">
            <div className="col-span-2 row-span-1 flex h-full w-full flex-row items-center justify-between rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] px-8 lg:h-fit">
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
            <div className="col-span-1 row-span-2 flex h-full flex-col justify-between rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] lg:col-span-2 lg:row-span-1 lg:h-full lg:flex-row sm:flex-col">
              <div className="p-8 pb-0 lg:pb-8 sm:pb-0">
                <h2 className="text-xl font-medium text-white">Launch Apps</h2>
                <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                  Launch and switch app windows with just a few keystrokes. Quit
                  running ones, copy details, search menu items and more.
                </p>
              </div>
              <div className="-ml-3 flex flex-row items-end justify-end">
                <Image
                  alt="Search"
                  src="/assets/images/practice2/search_dialog4.png"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="col-span-1 row-span-1 h-full rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8 sm:col-span-2">
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
            <div className="col-span-1 row-span-1 h-full rounded-xl bg-gradient-to-r from-[#160E23] to-[#170F22] p-8 sm:col-span-2">
              <div>
                <Image
                  alt="Icon"
                  src="/assets/images/practice2/para-red.png"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="mt-5 text-xl font-medium text-white">Snippets</h2>
              <p className="mt-4 text-sm font-extralight text-[#A29EA6]">
                Write faster by inserting frequently typed text such as canned
                emails, code pieces and more. Use keywords to auto-expand
                snippets in- place.
              </p>
            </div>
          </div>
          <div className="relative flex w-full flex-row justify-between rounded-xl bg-[#190F21]">
            <div className="xl:mx-auto">
              <Image
                alt="Search"
                src="/assets/images/practice2/search_dialog3.png"
                width={950}
                height={700}
              />
            </div>
            <div className="absolute right-10 top-0 mt-8 p-8 pr-0 pt-7 xl:pt-0 sm:left-0 sm:right-0">
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
              <p className="mt-4 max-w-48 text-[16px] font-extralight text-[#A29EA6] lg:hidden">
                Never miss another meeting. Join Zoom, Google Meet, Around
                meetings, and more, without digging around for a link and jump
                straight in to your calls. Check your upcoming schedule, block
                focus time or get an overview of your daily plan.
              </p>
              <div className="mt-3.5">
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
        <Link href="#" className="text-sm font-extralight text-white">
          Explore the manuals {"->"}
        </Link>
      </div>
    </>
  );
}
