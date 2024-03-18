import { OrderType, CartTableType } from "@/utils/types";

export function transformOrderToListProducts(
  order: OrderType
): CartTableType[] {
  const productMap = new Map();

  order?.products.forEach((prod) => {
    const existingProduct = productMap.get(prod.id);

    if (existingProduct) {
      existingProduct.product_quantity++;
    } else {
      productMap.set(prod.id, { product: prod, product_quantity: 1 });
    }
  });

  return Array.from(productMap.values());
}
