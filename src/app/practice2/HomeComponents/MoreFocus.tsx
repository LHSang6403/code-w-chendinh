import Image from "next/image";

export default function MoreFocus() {
  return (
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
            commands, and follow the same structure to make you more productive.
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
            Raycast is built natively to be faster, lightweight, and efficient.
            Every action is optimized for speed and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
}
