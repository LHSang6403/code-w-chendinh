import Link from "next/link";
import CartTable from "./Components/CartTable";
import TotalPay from "./Components/TotalPay";

export default function page() {
  return (
    <div className="flex h-auto w-full flex-col gap-10 xl:gap-6 items-center pb-10 pt-6 sm:w-screen sm:px-3">
      <div className="flex w-full flex-row items-center justify-between sm:flex-col sm:gap-4">
        <h1 className="text-3xl">Giỏ hàng của tôi</h1>
        <Link className="border-b border-black text-xl leading-none" href="#">
          Tiếp tục mua sắm
        </Link>
      </div>
      <div className="border-b border-[#A19C9C] pb-2 w-full">
        <CartTable />
      </div>
      <div className="flex w-full flex-row justify-end sm:justify-center">
        <TotalPay />
      </div>
    </div>
  );
}
