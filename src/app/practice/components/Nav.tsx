"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const urls = [
  { href: "/practice", label: "home" },
  { href: "/practice/aboutus", label: "about us" },
  { href: "#", label: "services" },
  { href: "#", label: "contact us" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="z-10 flex w-fit flex-row gap-4 overflow-x-auto font-medium sm:text-sm">
      {urls.map(({ href, label }, index) => (
        <button
          key={index}
          onClick={() => router.push(href)}
          className={`w-fit hover:cursor-pointer ${
            pathname === href ? "border-b-[4px]" : ""
          } px-1.5 sm:px-0`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
