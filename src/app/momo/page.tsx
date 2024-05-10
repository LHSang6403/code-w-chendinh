"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import crypto from "crypto";

const MOMO_URL = "/";

export default function page() {
  const item = {
    id: "---",
    name: "YOMOST Bac Ha&Viet Quat 170ml",
    description: "YOMOST Sua Chua Uong Bac Ha&Viet Quat 170ml/1 Hop",
    category: "beverage",
    imageUrl: "https://momo.vn/uploads/product1.jpg",
    manufacturer: "Vinamilk",
    price: 11000,
    curency: "VND",
    quantity: 5,
    unit: "hộp",
    totalPrice: 55000,
    taxAmount: "200",
  };

  const deliveryInfo = {
    deliveryAddress: "Phu My Hung Tower",
    deliveryFee: "30000",
    quantity: "2",
  };

  const userInfo = {
    name: "Nguyen Van A",
    phoneNumber: "0999888999",
    email: "demo@email.com",
  };

  const data = {
    partnerCode: "---",
    partnerName: "Chen Dinh Solutions",
    storeId: "---",
    requestType: "captureWallet",
    ipnUrl: "---/ipn",
    redirectUrl: "---/cart",
    orderId: "---",
    amount: 150000,
    lang: "vi",
    orderInfo: "Online buy and payment at ... Store.",
    requestId: "---",
    extraData: "",
    signature: createSignature(
      "accessKey",
      "amount",
      "extraData",
      "ipnUrl",
      "orderId",
      "orderInfo",
      "partnerCode",
      "redirectUrl",
      "requestId",
      "requestType",
      "secretKey"
    ),
    items: [item],
    userInfo: userInfo,
    deliveryInfo: deliveryInfo,
  };

  const createPaymentMutation = useMutation({
    mutationFn: (data: any) =>
      axios.post(MOMO_URL + "/v2/gateway/api/create", data, {
        headers: {
          "Content-Type": "application",
        },
      }),
    onSuccess: (data) => {
      console.log("ok:", data);
    },
    onError: (error) => {
      console.log("err:", error);
    },
    retry: 3,
  });

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 pt-20">
      <h1>Momo</h1>
      <Button
        onClick={() => {
          createPaymentMutation.mutate(data);
        }}
        className="text-white"
      >
        Momo
      </Button>
    </div>
  );
}

function createSignature(
  accessKey: string,
  amount: string,
  extraData: string,
  ipnUrl: string,
  orderId: string,
  orderInfo: string,
  partnerCode: string,
  redirectUrl: string,
  requestId: string,
  requestType: string,
  secretKey: string
) {
  const data = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;
  const sortedData = data.split("&").sort().join("&");

  const hmac = crypto.createHmac("sha256", secretKey);
  hmac.update(sortedData);
  const signature = hmac.digest("hex");
  return signature;
}
