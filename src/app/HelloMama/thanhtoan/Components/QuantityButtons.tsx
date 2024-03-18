import { CartTableType } from "@/utils/types";
import { useOrder } from "@/zustand/useOrder";

export default function QuantityButtons({ row }: { row: CartTableType }) {
  const { increaseQuantity, decreaseQuantity } = useOrder();

  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <div className="flex h-6 w-fit flex-row items-center justify-between rounded-md border border-black px-2 sm:w-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mr-2 h-3.5 w-3.5 hover:cursor-pointer"
          onClick={() => {
            increaseQuantity(row.product.id);
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="h-full w-9 border-l border-r border-black pt-[2px] text-center text-[16px] font-light">
          {row.product_quantity || 0}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="ml-2 h-3.5 w-3.5 hover:cursor-pointer"
          onClick={() => {
            decreaseQuantity(row.product.id);
          }}
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </div>
    </div>
  );
}
