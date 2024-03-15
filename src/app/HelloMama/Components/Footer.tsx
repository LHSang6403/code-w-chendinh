import FooterIcons from "./FooterIcons";
import FooterLogo from "./FooterLogo";
import { FooterLinks, FooterLinksMobile } from "./FooterLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex h-fit w-full flex-col items-center gap-8 bg-gradient-to-b from-[#0E7BB8] via-[#1E588F] to-[#1E588F] pt-20 text-white xl:pt-0 lg:bg-gradient-to-t">
      <div className="hidden xl:block">
        <FooterLogo />
      </div>
      <h1 className="text-5xl font-medium xl:hidden">HELLO MAMA</h1>
      <p className="line-clamp-4 w-[500px] overflow-ellipsis text-sm font-light xl:hidden">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna
      </p>
      <div className="xl:hidden">
        <FooterIcons />
      </div>
      <div className="-mt-4 hidden xl:block">
        <FooterLinksMobile />
      </div>
      <div className="mt-6 h-16 w-full bg-[#2378AF] px-28 font-light xl:w-[96vw] xl:border-t xl:bg-transparent xl:px-0 lg:mt-0 lg:w-[94vw]">
        <div className="mx-auto flex h-full max-w-[1320px] flex-row items-center justify-between">
          <span className="font-extralight sm:w-full sm:text-[14px]">
            @Bản quyền thuộc <Link href="#">hellomama.com.vn</Link>
          </span>
          <div className="xl:hidden">
            <FooterLinks />
          </div>
          <div className="hidden xl:block">
            <FooterIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
