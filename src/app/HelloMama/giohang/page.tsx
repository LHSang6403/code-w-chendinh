import Link from "next/link";
import CartTable from "./Components/CartTable";
import TotalPay from "./Components/TotalPay";

export default function page() {
  return (
    <div className="flex h-auto w-full flex-col items-center gap-10 px-28 pb-10 pt-6 xl:gap-6 xl:px-3 sm:px-3">
      <div className="flex w-full flex-row items-center justify-between sm:flex-col sm:gap-4">
        <h1 className="text-3xl">Giỏ hàng của tôi</h1>
        <Link className="border-b border-black text-xl leading-none" href="#">
          Tiếp tục mua sắm
        </Link>
      </div>
      <div className="w-full border-b border-[#A19C9C] pb-2">
        <CartTable />
      </div>
      <div className="flex w-full flex-row justify-end sm:justify-center">
        <TotalPay />
      </div>
    </div>
  );
}
