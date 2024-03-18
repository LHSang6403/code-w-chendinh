"use client";

import { DataTable } from "@components/Table/DataTable";
import { columns } from "./Columns";
import { useOrder } from "@/zustand/useOrder";
import { OrderType, CartTableType } from "@/utils/types";
import { transformOrderToListProducts } from "@/app/HelloMama/giohang/_actions";

export default function CartTable() {
  const { order } = useOrder();

  if (!order)
    return <div className="my-2 text-center">Bạn chưa chọn sản phẩm.</div>;
  const rows = transformOrderToListProducts(order as OrderType);

  return (
    <DataTable
      columns={columns}
      data={rows as CartTableType[]}
      isPaginationEnabled={false}
      isCollumnVisibilityEnabled={false}
      isSearchEnabled={false}
    />
  );
}
