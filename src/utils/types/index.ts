export interface CustomerType {
  id: string; // p_key
  created_at: string;
  name: string; // p_key
  dob: string;
  phone: string;
  email: string;
  level: number;
  image: string;
  address: string;
  ward: string;
  district: string;
  province: string;
}

export interface ProductType {
  id: string; // p_key
  created_at: string;
  brand: string;
  name: string; // p_key
  description: string;
  images: string[];
  price: number;
  options: string[];
  rate: number;
  sold_quantity: number;
  description_id: string; // f_key
  category: string;
  is_deleted: boolean;
}

export type ShipmentNameType = "" | "GHTK" | "GHN" | null;

export interface OrderType {
  id: string;
  created_at: string;
  shipment_name: ShipmentNameType;
  shipment_label_code: string | null;
  products: ProductType[];
  product_quantities: number[];
  state: "pending" | "shipping" | "delivered" | "canceled" | "returned";
  customer_id: string; // f_key
  customer_name: string; // f_key
  price: number;
  shipping_fee: number; // api call
  insurance_fee: number; // api call
  total_price: number;
  note: string;
  address: string;
  ward: string;
  district: string;
  province: string;
  pick_address: string;
  pick_ward: string;
  pick_district: string;
  pick_province: string;
  weight: number;
}

export interface StorageType {
  id: string; // p_key
  created_at: string;
  address: string;
  prod_id: string; // f_key
  prod_name: string; // f_key
  quantity: number;
}

export interface CartTableType {
  product: ProductType;
  product_quantity: number;
}
