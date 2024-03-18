import { create } from "zustand";
import type { ProductType, PaymentType } from "@utils/types/index";
import type { ShipmentNameType, OrderType } from "@utils/types/index";
import { generate } from "randomstring";

interface OrderState {
  order: OrderType | null;
  shipment_name: ShipmentNameType;
  shipment_label_code: string | null;
  setNewID: () => void;
  setShipment: (
    shipment_name: ShipmentNameType,
    shipment_label_code: string
  ) => void;
  setCustomer: (id: string, name: string) => void;
  setFees: (shipping_fee: number, insurance_fee: number) => void;
  setPayment: (payment: PaymentType) => void;
  addProduct: (prod: ProductType) => void;
  removeProduct: (id: string) => void;
  removeAll: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

// *** initProducts and initORder are used for demo
const initProducts: ProductType[] = [
  {
    id: "1",
    name: "GOCARE Premium A+",
    description: "Trẻ 6-24 tháng tuổi",
    images: ["/assets/images/HelloMama/giohang/product1.png"],
    price: 600000,
    created_at: "",
    brand: "",
    options: [],
    rate: 0,
    sold_quantity: 0,
    description_id: "",
    category: "",
    is_deleted: false,
  },
  {
    id: "2",
    name: "GOCARE Premium A+",
    description: "Trẻ 2-15 tuổi",
    images: ["/assets/images/HelloMama/giohang/product2.png"],
    price: 300000,
    created_at: "",
    brand: "",
    options: [],
    rate: 0,
    sold_quantity: 0,
    description_id: "",
    category: "",
    is_deleted: false,
  },
  {
    id: "2",
    name: "GOCARE Premium A+",
    description: "Trẻ 2-15 tuổi",
    images: ["/assets/images/HelloMama/giohang/product2.png"],
    price: 300000,
    created_at: "",
    brand: "",
    options: [],
    rate: 0,
    sold_quantity: 0,
    description_id: "",
    category: "",
    is_deleted: false,
  },
  {
    id: "2",
    name: "GOCARE Premium A+",
    description: "Trẻ 2-15 tuổi",
    images: ["/assets/images/HelloMama/giohang/product2.png"],
    price: 300000,
    created_at: "",
    brand: "",
    options: [],
    rate: 0,
    sold_quantity: 0,
    description_id: "",
    category: "",
    is_deleted: false,
  },
  {
    id: "1",
    name: "GOCARE Premium A+",
    description: "Trẻ 6-24 tháng tuổi",
    images: ["/assets/images/HelloMama/giohang/product1.png"],
    price: 600000,
    created_at: "",
    brand: "",
    options: [],
    rate: 0,
    sold_quantity: 0,
    description_id: "",
    category: "",
    is_deleted: false,
  },
];

const initORder: OrderType = {
  id: generate(12),
  created_at: new Date().toISOString(),
  shipment_name: "",
  shipment_label_code: "",
  products: initProducts,
  state: "pending",
  customer_id: "",
  customer_name: "",
  price: 2100000,
  shipping_fee: 0,
  insurance_fee: 0,
  total_price: 2100000,
  payment: "cod",
  note: "",
  address: "",
  ward: "",
  district: "",
  province: "",
  pick_address: "",
  pick_ward: "",
  pick_district: "",
  pick_province: "",
  weight: 500,
};
// ***

export const useOrder = create<OrderState>((set) => ({
  order: initORder,
  shipment_name: "GHTK",
  shipment_label_code: null,
  setNewID: () =>
    set((state: OrderState) => {
      if (state.order) {
        return {
          order: {
            ...state.order,
            id: generate(12),
          },
        };
      } else {
        return state;
      }
    }),
  setShipment: (name: ShipmentNameType, label_code: string) =>
    set((state: OrderState) => {
      if (state.order) {
        return {
          order: {
            ...state.order,
            shipment_name: name,
            shipment_label_code: label_code,
          },
        };
      } else {
        return state;
      }
    }),
  setCustomer(id: string, name: string) {
    set((state: OrderState) => {
      if (state.order) {
        return {
          order: {
            ...state.order,
            customer_id: id,
            customer_name: name,
          },
        };
      } else {
        return state;
      }
    });
  },
  setFees: (shipping_fee: number, insurance_fee: number) => {
    set((state: OrderState) => {
      if (state.order) {
        return {
          order: {
            ...state.order,
            shipping_fee: shipping_fee,
            insurance_fee: insurance_fee,
            total_price: state.order.price + shipping_fee + insurance_fee,
          },
        };
      } else {
        return state;
      }
    });
  },
  setPayment: (payment: PaymentType) =>
    set((state: OrderState) => {
      if (state.order) {
        return {
          order: {
            ...state.order,
            payment: payment,
          },
        };
      } else {
        return state;
      }
    }),
  addProduct: (prod: ProductType) =>
    set((state: OrderState) => {
      if (!state.order) {
        return { order: createOrderFromProduct(prod) };
      }

      const updatedOrder = { ...state.order };
      updatedOrder.products.push(prod);

      updatedOrder.price += prod.price;
      updatedOrder.total_price = calTotalPrice(updatedOrder);

      return {
        order: updatedOrder,
      };
    }),
  removeProduct: (id: string) =>
    set((state: OrderState) => {
      if (state.order) {
        const updatedOrder = { ...state.order };

        const indexesToRemove: number[] = [];
        let removedProductPrice = 0;

        updatedOrder.products.forEach((prod, index) => {
          if (prod.id === id) {
            indexesToRemove.push(index);
            removedProductPrice += prod.price;
          }
        });

        if (indexesToRemove.length > 0) {
          indexesToRemove.reverse().forEach((index) => {
            updatedOrder.products.splice(index, 1);
          });

          updatedOrder.price -= removedProductPrice;
          updatedOrder.total_price = calTotalPrice(updatedOrder);
        }

        if (updatedOrder.products.length === 0) {
          return { order: null };
        }

        return { order: updatedOrder };
      } else {
        return state;
      }
    }),
  removeAll: () => set(() => ({ order: null })),
  increaseQuantity: (id: string) =>
    set((state: OrderState) => {
      if (state.order) {
        const updatedOrder = { ...state.order };
        const index = updatedOrder.products.findIndex((prod) => prod.id === id);

        if (index !== -1) {
          updatedOrder.products.push(updatedOrder.products[index]);
          updatedOrder.price += updatedOrder.products[index].price;
          updatedOrder.total_price = calTotalPrice(updatedOrder);
        }

        return { order: updatedOrder };
      } else {
        return state;
      }
    }),
  decreaseQuantity: (id: string) =>
    set((state: OrderState) => {
      if (state.order) {
        const updatedOrder = { ...state.order };
        const index = updatedOrder.products.findIndex((prod) => prod.id === id);

        if (index !== -1) {
          const prodTemp = updatedOrder.products[index];
          updatedOrder.products.splice(index, 1);
          updatedOrder.price -= prodTemp.price;
          updatedOrder.total_price = calTotalPrice(updatedOrder);
        }

        if (updatedOrder.products.length === 0) {
          return { order: null };
        }

        return { order: updatedOrder };
      } else {
        return state;
      }
    }),
}));

function createOrderFromProduct(prod: ProductType): OrderType {
  return {
    id: generate(12),
    created_at: new Date().toISOString(),
    shipment_name: "",
    shipment_label_code: "",
    products: [prod],
    state: "pending",
    customer_id: "",
    customer_name: "",
    price: prod.price,
    shipping_fee: 0,
    insurance_fee: 0,
    total_price: 0,
    payment: "cod",
    note: "",
    address: "",
    ward: "",
    district: "",
    province: "",
    pick_address: "",
    pick_ward: "",
    pick_district: "",
    pick_province: "",
    weight: 500,
  };
}

function calTotalPrice(order: OrderType): number {
  let totalPrice = 0;

  order.products.forEach((prod) => {
    totalPrice += prod.price;
  });

  if (order.shipping_fee > 0) totalPrice += order.shipping_fee;
  if (order.insurance_fee > 0) totalPrice += order.insurance_fee;

  return totalPrice;
}
