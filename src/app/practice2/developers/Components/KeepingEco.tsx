import Image from "next/image";

export default function KeepingEco() {
  return (
    <div className="mt-24 w-full xl:px-0">
      <h1 className="text-4xl font-medium text-white">
        Keeping our<br></br> ecosystem beautiful
      </h1>
      <div className="mt-20 grid grid-cols-3 gap-2 xl:grid-cols-2 lg:grid-cols-1">
        <div className="flex flex-col gap-2 rounded-lg bg-[#120E1A] p-6 sm:p-6">
          <Image
            alt="Settings"
            src="/assets/images/developers/settings.png"
            width={45}
            height={45}
          />
          <h3 className="mt-1 text-sm font-medium text-white">
            Powerful and familiar tooling
          </h3>
          <p className="text-[15px] text-[#A09FA3]">
            Extensions are built with TypeScript, React and Node. Leverage npm's
            ecosystem to quickly build what you imagine.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-[#120E1A] p-6 sm:p-6">
          <Image
            alt="Settings"
            src="/assets/images/developers/settings.png"
            width={45}
            height={45}
          />
          <h3 className="mt-1 text-sm font-medium text-white">
            Powerful and familiar tooling
          </h3>
          <p className="text-[15px] text-[#A09FA3]">
            Extensions are built with TypeScript, React and Node. Leverage npm's
            ecosystem to quickly build what you imagine.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-[#120E1A] p-6 sm:p-6">
          <Image
            alt="Settings"
            src="/assets/images/developers/settings.png"
            width={45}
            height={45}
          />
          <h3 className="mt-1 text-sm font-medium text-white">
            Powerful and familiar tooling
          </h3>
          <p className="text-[15px] text-[#A09FA3]">
            Extensions are built with TypeScript, React and Node. Leverage npm's
            ecosystem to quickly build what you imagine.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-[#120E1A] p-6 sm:p-6">
          <Image
            alt="Settings"
            src="/assets/images/developers/settings.png"
            width={45}
            height={45}
          />
          <h3 className="mt-1 text-sm font-medium text-white">
            A developer-first experience
          </h3>
          <p className="text-[15px] text-[#A09FA3]">
            A strongly typed API, hot- reloading and modern tooling that make it
            a blast to work with.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-[#120E1A] p-6 sm:p-6">
          <Image
            alt="Settings"
            src="/assets/images/developers/settings.png"
            width={45}
            height={45}
          />
          <h3 className="mt-1 text-sm font-medium text-white">
            Easy to start, flexible to scale
          </h3>
          <p className="text-[15px] text-[#A09FA3]">
            Start with a simple script, add a static UI or use React to go wild.
            Anything goes.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-[#120E1A] p-6 sm:p-6">
          <Image
            alt="Settings"
            src="/assets/images/developers/settings.png"
            width={45}
            height={45}
          />
          <h3 className="mt-1 text-sm font-medium text-white">
            Publish to the world
          </h3>
          <p className="text-[15px] text-[#A09FA3]">
            Submit your extension to the Raycast Store for thousands of Raycast
            users to use as part of their daily process.
          </p>
        </div>
      </div>
    </div>
  );
}
