"use client";

import { useOrder } from "@/zustand/useOrder";
import { Button } from "../../Shadcn/Button";
import formatCurrency from "@utils/functions/formatCurrency";

export default function TotalPay() {
  const { order } = useOrder();

  function handlePayment() {
    // Call API
    console.log("order", order);
  }

  return (
    <div className="flex w-64 flex-col sm:w-full">
      <div className="flex flex-row justify-between text-xl">
        <span className="font-light">Tổng tiền:</span>
        <span className="line-clamp-1 overflow-ellipsis font-medium">
          {order ? formatCurrency(order?.total_price) : 0}đ
        </span>
      </div>
      <span className="text-center text-[12px] font-light text-[#A19C9C]">
        Thuế và phí vận chuyển được tính khi thanh toán
      </span>
      <Button onClick={handlePayment} className="group mt-2 w-full">
        <span className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-lg font-light text-transparent group-hover:text-white">
          Tiến hành thanh toán
        </span>
      </Button>
    </div>
  );
}
