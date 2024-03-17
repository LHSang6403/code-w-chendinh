import PaymentCartTable from "./Components/PaymentCartTable";
import VoucherInput from "./Components/VoucherInput";
import PaymentCheckboxs from "./Components/PaymentCheckboxs";
import ShipmentForm from "./Components/ShipmentForm";
import QRPayment from "./Components/QRPayment";
import TotalPay from "./Components/TotalPay";

export default function page() {
  return (
    <div className="flex h-auto w-full flex-row items-start justify-center px-36 pb-10 pt-6 xl:flex-col xl:px-3 ">
      <div className="flex w-fit flex-col items-center gap-3 px-3 xl:w-full xl:px-1">
        <PaymentCheckboxs />
        <div className="mt-1 flex flex-col gap-3 border-t border-t-[#9D9B9B]">
          <h1 className="mt-3 bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-[45px] font-light text-transparent lg:text-2xl">
            THÔNG TIN GIAO HÀNG
          </h1>
          <ShipmentForm />
        </div>
        <div className="-mt-2 flex flex-col xl:-mt-0">
          <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-[45px] font-light text-transparent lg:text-2xl">
            THANH TOÁN VÍ ĐIỆN TỬ
          </h1>
          <QRPayment />
        </div>
      </div>
      <div className="min-h-screen w-fit min-w-[360px] bg-[#F9F9F9] px-6 xl:hidden">
        <PaymentCartTable />
        <VoucherInput />
        <TotalPay />
      </div>
    </div>
  );
}
