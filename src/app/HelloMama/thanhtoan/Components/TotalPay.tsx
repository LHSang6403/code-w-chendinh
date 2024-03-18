"use client";

import { useOrder } from "@/zustand/useOrder";
import formatCurrency from "@/utils/functions/formatCurrency";

export default function TotalPay() {
  const { order } = useOrder();

  return (
    <div className="mt-3 flex w-full flex-row text-right font-light">
      <div className="mx-auto w-fit">Tổng tiền:</div>{" "}
      <div className="min-w-24">
        {order ? formatCurrency(order?.total_price) : 0}đ
      </div>
    </div>
  );
}
