"use client";

import { useOrder } from "@/zustand/useOrder";
import formatCurrency from "@/utils/functions/formatCurrency";

export default function TotalPay() {
  const { order } = useOrder();

  return (
    <div className="mt-3 w-full text-right font-light">
      <span className="mr-10 w-full">Tổng tiền:</span>{" "}
      <span className="w-fit">
        {order ? formatCurrency(order?.total_price) : 0}đ
      </span>
    </div>
  );
}
