"use client";

import { DataTable } from "@components/Table/DataTable";
import { columns } from "@app/HelloMama/giohang/Components/Columns";
import { useOrder } from "@/zustand/useOrder";
import { OrderType, ProductType } from "@/utils/types";

export interface CartTableType {
  product: ProductType;
  product_quantity: number;
}

export default function CartTable() {
  const { order } = useOrder();

  if (!order) return <div className="text-center">No data</div>;
  const rows = transformOrderToList(order as OrderType);

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

function transformOrderToList(order: OrderType): CartTableType[] {
  const productList = order.products.map((product, index) => {
    return {
      product: product,
      product_quantity: order.product_quantities[index] || 1,
    };
  });

  return productList;
}
