import Link from "next/link";
import CartTable from "./Components/CartTable";
import TotalPay from "./Components/TotalPay";

export default function page() {
  return (
    <div className="flex h-auto max-w-[1440px] flex-col items-center gap-10 overflow-hidden pb-20 pt-6 xl:w-[98vw] sm:w-screen sm:gap-6 sm:px-3">
      <div className="flex w-full flex-row items-center justify-between sm:flex-col sm:gap-4">
        <h1 className="text-3xl">Giỏ hàng của tôi</h1>
        <Link className="border-b border-black text-xl leading-none" href="#">
          Tiếp tục mua sắm
        </Link>
      </div>
      <div className="w-fit border-b border-[#A19C9C] pb-2 xl:w-full">
        <CartTable />
      </div>
      <div className="flex w-full flex-row justify-end sm:justify-center">
        <TotalPay />
      </div>
    </div>
  );
}
