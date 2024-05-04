import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RaycatTeams() {
  return (
    <>
      <div className="mt-36 h-auto w-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-4xl font-semibold text-white">
            Raycast for Teams
          </h1>
          <p className="-mt-2 text-center font-light text-[#9B999E]">
            Keep your team communicating efficiently and building faster with a
            shared space<br className="xl:hidden"></br> in Raycast.
          </p>
        </div>
        <div className="mt-20 flex h-[600px] w-full flex-row items-center rounded-2xl bg-gradient-to-r from-[#37B9EC] to-[#152871]">
          <div className="w-1/2 px-10 text-white xl:w-[70%] sm:py-6 sm:pl-6 sm:pr-0">
            <Image
              alt="Up"
              src="/assets/images/practice2/tick2.png"
              width={65}
              height={65}
            />
            <h2 className="mt-4 text-xl font-medium">
              Save time on everyday tasks{" "}
            </h2>
            <p className="mt-4 text-sm font-extralight text-[#D6EDF8]">
              Raycast isn’t just a tool for individuals. It’s also a tool,
              designed for sharing. From custom extensions, to Quicklinks and
              Snippets.
            </p>
            <p className="mt-4 text-sm font-extralight text-[#D6EDF8]">
              What your team needs to get done, we offer an fabulously rich
              toolkit to do it swiftly, and at ease with your whole organization
              in harmony.
            </p>
            <Button className="mt-6 h-fit bg-gradient-to-r from-[#24769B] to-[#226D93] py-2 font-normal opacity-100">
              Learn more
            </Button>
          </div>
          <div className="relative h-full w-1/2 xl:w-[30%]">
            <div className="absolute -right-20 top-1/2 w-[800px] -translate-y-1/2 xl:left-0 xl:right-0">
              <Image
                alt="People"
                src="/assets/images/practice2/img7.png"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid h-full grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
        <div className="aspect-square rounded-2xl bg-[#1E1A25] p-10 text-white xl:aspect-auto xl:h-full sm:p-6">
          <div>
            <Image
              alt="Return"
              src="/assets/images/practice2/return.png"
              width={65}
              height={65}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Shared Commands</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            Use React and TypeScript to build custom tooling that unlocks teams
            within your organization to do their best work, at speed. Share them
            in your private extension store.
          </p>
        </div>
        <div className="aspect-square rounded-2xl bg-[#1E1A25] p-10 text-white xl:aspect-auto xl:h-full sm:p-6">
          <div>
            <Image
              alt="Link"
              src="/assets/images/practice2/link.png"
              width={65}
              height={65}
            />
          </div>
          <h2 className="mt-5 text-xl font-medium">Shared Quicklinks</h2>
          <p className="mt-4 text-sm font-extralight text-[#D2D1D3]">
            Effortlessly share common links with your team, such as project
            documentation in Notion, GitHub repos, Linear projects, and data
            dashboards - all with Quicklinks.
          </p>
        </div>
        <div className="aspect-square rounded-2xl bg-[#1E1A25] p-10 text-white xl:aspect-auto xl:h-full sm:p-6">
          <div>
            <Image
              alt="Paragraph"
              src="/assets/images/practice2/para.png"
              width={65}
              height={65}
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
        <Link href="#" className="text-sm font-extralight text-white">
          Learn about developing for teams {"->"}
        </Link>
      </div>
    </>
  );
}
