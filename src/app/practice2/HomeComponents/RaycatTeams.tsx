import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RaycatTeams() {
  return (
    <>
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
    </>
  );
}
