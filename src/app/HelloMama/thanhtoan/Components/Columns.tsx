"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import formatCurrency from "@/utils/functions/formatCurrency";
import QuantityButtons from "./QuantityButtons";
import { CartTableType } from "@/utils/types";

export const columns: ColumnDef<CartTableType>[] = [
  {
    accessorKey: "product",
    header: () => {
      return <div className="hidden"></div>;
    },
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex flex-col">
          <div className="flex w-full flex-row items-center justify-start gap-3">
            <div className="w-24 bg-gradient-to-r from-[#F5E45F] via-[#FCF9A0] to-[#E9CD91] p-[2px] xl:w-20 sm:w-16">
              <Image
                alt="Sản phẩm"
                src={data.product.images[0]}
                className="object-fit !relative h-full !w-full bg-white xl:object-cover"
                layout="fill"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="line-clamp-2 overflow-ellipsis text-left font-light sm:text-lg">
                {data.product.name}
              </span>
              <span className="line-clamp-1 overflow-ellipsis text-left font-light">
                {formatCurrency(data.product.price * data.product_quantity)}đ
              </span>
              <div className="mt-3">
                <QuantityButtons row={data} />
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
];
