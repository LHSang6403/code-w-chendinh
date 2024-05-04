import Image from "next/image";

export default function Footer() {
  return (
    <div className="grid w-full grid-cols-5 justify-around justify-items-center border-t p-16 xl:grid-cols-4 xl:gap-10 xl:px-6 sm:grid-cols-2 sm:justify-items-stretch sm:px-4">
      <div className="xl:col-span-4 sm:col-span-2">
        <Image
          alt="Mini logo"
          src="/assets/images/practice2/mini-logo.png"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="mb-3 text-[15px] font-light text-white">Product</h2>
        <p className="text-[15px] font-extralight text-[#9B999E]">Store</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Developer</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Teams</p>
        <p className="flex flex-row items-center gap-1 text-[15px] font-extralight text-[#9B999E]">
          <span>Pro</span>
          <div>
            <Image
              alt="Raycast"
              src="/assets/images/practice2/new.png"
              width={35}
              height={30}
            />
          </div>
        </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">
          Browser Extension
        </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">API Docs</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Pricing</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Changelog</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Manual</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">
          Troubleshooting
        </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">FAQ</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="mb-3 text-[15px] font-light text-white">Company</h2>
        <p className="text-[15px] font-extralight text-[#9B999E]">Careers</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Manifesto</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">
          Privacy Policy
        </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">
          Terms of Service
        </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">DPA</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Press Kit</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Contact</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="mb-3 text-[15px] font-light text-white">Community</h2>
        <p className="text-[15px] font-extralight text-[#9B999E]">
          Community Stories
        </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Slack</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Twitter </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">GitHub </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Dribbble</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="mb-3 text-[15px] font-light text-white">By Raycast</h2>
        <p className="text-[15px] font-extralight text-[#9B999E]">Snippets </p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Prompts</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">ray.so</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Icon Maker</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Merch</p>
        <p className="text-[15px] font-extralight text-[#9B999E]">Wallpapers</p>
      </div>
    </div>
  );
}
