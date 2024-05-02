import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full flex-row items-center justify-between py-3">
      <div className="w-44">
        <Image
          alt="Raycast"
          src="/assets/images/practice2/raycast.png"
          width={120}
          height={80}
        ></Image>
      </div>
      <div className="flex flex-row">
        <Button className="bg- border-none font-light text-white">Store</Button>
        <Button className="bg- border-none font-light text-white">
          Developer
        </Button>
        <Button className="bg- border-none font-light text-white">Teams</Button>
        <Button className="bg- flex flex-row gap-1 border-none font-light text-white">
          <span>Pro</span>
          <Image
            alt="Raycast"
            src="/assets/images/practice2/new.png"
            width={35}
            height={30}
          ></Image>
        </Button>
        <Button className="bg- border-none font-light text-white">
          Changelog
        </Button>
        <Button className="bg- border-none font-light text-white">
          Pricing
        </Button>
        <Button className="bg- border-none font-light text-white">Blog</Button>
      </div>
      <div className="flex w-44 flex-row justify-end">
        <Button className="bg- border-none font-light text-white">
          Log in
        </Button>
        <Button className="bg- border-none font-light text-white">
          Download
        </Button>
      </div>
    </header>
  );
}
