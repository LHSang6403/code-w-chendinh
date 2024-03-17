"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import QuantityButtons from "./QuantityButtons";
import formatCurrency from "@utils/functions/formatCurrency";
import { CartTableType } from "./CartTable";

export const columns: ColumnDef<CartTableType>[] = [
  {
    accessorKey: "product",
    header: () => {
      return (
        <div className="mb-2 border-b border-[#A19C9C] pb-3 text-xl font-light text-[#A19C9C]">
          Sản phẩm
        </div>
      );
    },
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="flex flex-col">
          <div className="flex w-[700px] flex-row items-center justify-start gap-6 xl:w-full lg:gap-2">
            <div className="w-40 bg-gradient-to-r from-[#F5E45F] via-[#FCF9A0] to-[#E9CD91] p-[2px] xl:w-32 sm:w-24">
              <Image
                alt="Sản phẩm"
                src={data.product.images[0]}
                className="object-fit !relative h-full !w-full bg-white xl:object-cover"
                layout="fill"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="line-clamp-2 overflow-ellipsis text-left text-xl font-light sm:text-lg">
                {data.product.name}
              </span>
              <span className="line-clamp-1 overflow-ellipsis text-left font-light text-[#A19C9C]">
                {data.product.description}
              </span>
            </div>
          </div>
          <div className="ml-auto hidden sm:mt-1 sm:block">
            <QuantityButtons row={data} />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => {
      return (
        <div className="mb-2 w-full border-b border-[#A19C9C] pb-3 text-left text-xl font-light text-[#A19C9C] xl:w-full sm:hidden">
          Số lượng
        </div>
      );
    },
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="w-full gap-4 text-left sm:hidden">
          <QuantityButtons row={data} />
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => {
      return (
        <div className="mb-2 w-full border-b border-[#A19C9C] pb-3 text-right text-xl font-light text-[#A19C9C] xl:w-full">
          Tổng tiền
        </div>
      );
    },
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div className="text-right text-xl font-light sm:pb-10">
          {formatCurrency(data.product.price * data.product_quantity)}đ
        </div>
      );
    },
  },
];
