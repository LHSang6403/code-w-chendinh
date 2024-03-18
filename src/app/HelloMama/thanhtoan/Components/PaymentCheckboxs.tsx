"use client";

import { Checkbox } from "@components/ui/checkbox";
import Image from "next/image";
import { useOrder } from "@/zustand/useOrder";
import { PaymentType } from "@/utils/types";

export default function PaymentCheckboxs() {
  const { order, setPayment } = useOrder();

  const methods = [
    {
      id: "momo",
      name: "VÍ ĐIỆN TỬ",
      icon: "/assets/images/HelloMama/thanhtoan/icons/momo.png",
    },
    {
      id: "cod",
      name: "TIỀN MẶT",
      icon: "/assets/images/HelloMama/thanhtoan/icons/cod.png",
    },
  ];

  // console.log("order payment", order?.payment);

  return (
    <div className="flex h-fit w-fit flex-row justify-center gap-3 xl:w-full sm:gap-1">
      {methods.map((method, index) => (
        <div
          key={index}
          className="rounded bg-gradient-to-r from-[#CD9F2D] via-[#F7EF8A] to-[#EDC967] p-[1px] sm:w-1/2"
        >
          <div className="flex h-fit w-52 flex-row items-center justify-between rounded bg-white px-1.5 sm:w-full">
            <Checkbox
              id={method.id}
              checked={order?.payment === method.id}
              onCheckedChange={(value) => {
                if (value) setPayment(method.id as PaymentType);
              }}
              className="text-white sm:h-4 sm:w-4"
            />
            <label
              htmlFor="terms"
              className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sm:text-[15px]"
            >
              {method.name}
            </label>
            <div className="my-1 w-10 sm:my-1.5 sm:w-6">
              <Image
                alt="Dai li"
                src={method.icon}
                layout="responsive"
                width={45}
                height={45}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
