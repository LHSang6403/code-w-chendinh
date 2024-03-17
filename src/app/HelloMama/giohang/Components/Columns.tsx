"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CartType } from "@app/HelloMama/giohang/Components/CartTable";
import Image from "next/image";
import QuantityButtons from "./QuantityButtons";
import formatCurrency from "@utils/functions/formatCurrency";

export const columns: ColumnDef<CartType>[] = [
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
            <div className="w-40 xl:w-32 sm:w-24 bg-gradient-to-r from-[#F5E45F] via-[#FCF9A0] to-[#E9CD91] p-[2px]">
              <Image
                alt="Sản phẩm"
                src={data.image}
                className="object-fit !relative h-full !w-full bg-white xl:object-cover"
                layout="fill"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="line-clamp-2 overflow-ellipsis text-left text-xl font-light sm:text-lg">
                {data.product}
              </span>
              <span className="overflow-ellipsis line-clamp-1 text-left font-light text-[#A19C9C]">
                {data.description}
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
          {formatCurrency(data.price)}đ
        </div>
      );
    },
  },
];
