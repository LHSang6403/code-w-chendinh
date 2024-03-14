"use client";

import { DataTable } from "@components/Table/DataTable";
import { columns } from "@app/HelloMama/giohang/Components/Columns";

export interface CartType {
  product: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
}

const data: CartType[] = [
  {
    product: "GOCARE Premium A+",
    description: "Trẻ 6-24 tháng tuổi",
    image: "/assets/images/HelloMama/giohang/product1.png",
    quantity: 1,
    price: 625000,
  },
  {
    product: "GOCARE Premium A+",
    description: "Trẻ 2-15 tuổi",
    image: "/assets/images/HelloMama/giohang/product2.png",
    quantity: 1,
    price: 625000,
  },
];

export default function CartTable() {
  return (
    <DataTable
      columns={columns}
      data={data as CartType[]}
      isPaginationEnabled={false}
      isCollumnVisibilityEnabled={false}
      isSearchEnabled={false}
    />
  );
}
