"use client";

import { DataTable } from "@components/Table/DataTable";
import { columns } from "./Columns";
import { useOrder } from "@/zustand/useOrder";
import { OrderType, CartTableType } from "@/utils/types";

export interface CartType {
  product: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
}

export default function PaymentCartTable() {
  const { order } = useOrder();

  if (!order) return <div className="my-2 text-center">No data</div>;
  const rows = transformOrderToList(order as OrderType);
  return (
    <div className="-mt-16 pt-3">
      <DataTable
        columns={columns}
        data={rows as CartTableType[]}
        isPaginationEnabled={false}
        isCollumnVisibilityEnabled={false}
        isSearchEnabled={false}
      />
    </div>
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
