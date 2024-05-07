import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SocialForm() {
  return (
    <>
      <div className="flex h-44 w-full flex-row gap-6 xl:gap-4 lg:h-fit lg:flex-col">
        <div className="flex h-full w-1/2 flex-col justify-center gap-4 rounded-xl bg-gradient-to-r from-[#315A6C] via-[#182955] to-[#0F0724] px-12 py-6 lg:w-full sm:px-6">
          <div>
            <Image
              alt="Twitter"
              src="/assets/images/practice2/twitter.png"
              width={25}
              height={25}
            />
          </div>
          <h3 className="-mb-2 text-sm font-medium text-white">
            Stay up to date
          </h3>
          <p className="text-sm font-light text-[#A6B2C2]">
            We’d love to stay connected with you. If the feeling’s mutual,
            follow <span className="font-medium text-white">@raycastapp</span>{" "}
            on Twitter for the latest news and updates.
          </p>
        </div>
        <div className="flex h-full w-1/2 flex-col justify-center gap-4 rounded-xl bg-gradient-to-r from-[#643A66] via-[#3B0B1E] to-[#170410] px-12 py-6 lg:w-full sm:px-6">
          <div>
            <Image
              alt="Twitter"
              src="/assets/images/practice2/slack.png"
              width={25}
              height={25}
            />
          </div>
          <h3 className="-mb-3 text-sm font-medium text-white">
            Help shape the product
          </h3>
          <p className="text-sm font-light text-[#A6B2C2]">
            Lots of the best and brightest ideas come from you. Join our Slack
            Community to help create the future of Raycast.
          </p>
        </div>
      </div>
      <div className="my-24 flex h-fit w-full flex-row gap-6 px-24 lg:flex-col lg:px-0">
        <div className="flex h-full w-1/2 flex-col justify-start gap-3 rounded-xl py-6 lg:w-full">
          <h3 className="text-sm font-medium text-white">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm font-light text-[#9B999E]">
            Get a summary of what we’ve shipped during the last month, behind
            the scenes updates, and team picks.
          </p>
        </div>
        <div className="flex h-full w-1/2 flex-col justify-start gap-4 rounded-xl py-6 lg:w-full">
          <div className="flex flex-row gap-4">
            <Input
              placeholder="james@java-lang.ca"
              className="border-[#1D1924] bg-[#120E19] opacity-60"
            ></Input>
            <Button className="bg-[#CFCFD1] px-8 text-sm font-light">
              Subscribe
            </Button>
          </div>
          <p className="text-[14px] font-light text-[#69676E]">
            By submitting your email address, you agree to receive Raycast’s
            monthly newsletter. For more information, please read our privacy
            policy. You can always withdraw your consent.
          </p>
        </div>
      </div>
    </>
  );
}
