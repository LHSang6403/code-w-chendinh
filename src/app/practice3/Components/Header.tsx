"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex h-12 w-full flex-row items-end justify-between px-4 sm:px-2">
      <Image
        src="/assets/images/practice3/logo.png"
        alt="Logo"
        width={150}
        height={60}
      />
      <div className="text-[16px] font-light">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[16px] font-light">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink>Documentation</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink>Customers</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[16px] font-light">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink>Pricing</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[16px] font-light">
                Github
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row items-center justify-end gap-3">
        <Button className="h-fit rounded-full bg-white py-1 text-[16px] font-light text-[#0D0C13]">
          Sign in
        </Button>
        <Button className="h-fit rounded-full bg-[#0D0C13] py-1 text-[16px] font-light text-white">
          Sign up
        </Button>
      </div>
    </div>
  );
}
