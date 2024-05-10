"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const VNPAY_URL = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";

export default function page() {
  const vnp_Command = "pay";
  const vnp_CreateDate = "20210801153333";
  const vnp_CurrCode = "VND";
  const vnp_IpAddr = "127.0.0.1";
  const vnp_Locale = "vn";
  const vnp_OrderInfo = "Thanh toan don hang :5";
  const vnp_OrderType = "other";
  const vnp_TmnCode = "DEMOV210";
  const vnp_Amount = "1806000";
  const vnp_ReturnUrl = "https://domainmerchant.vn/ReturnUrl";
  const vnp_TxnRef = "5";
  const vnp_Version = "2.1.0";
  const vnp_SecureHash =
    "3e0d61a0c0534b2e36680b3f7277743e8784cc4e1d68fa7d276e79c23be7d6318d338b477910a27992f5057bb1582bd44bd82ae8009ffaf6d141219218625c42";

  const parameters =
    "?vnp_Amount=1806000&vnp_Command=" +
    vnp_Command +
    "&vnp_Tmn_Code=" +
    vnp_TmnCode +
    "&vnp_Amount=" +
    vnp_Amount +
    "&vnp_CreateDate=" +
    vnp_CreateDate +
    "&vnp_CurrCode=" +
    vnp_CurrCode +
    "&vnp_IpAddr=" +
    vnp_IpAddr +
    "&vnp_Locale=" +
    vnp_Locale +
    "&vnp_OrderInfo=" +
    vnp_OrderInfo +
    "&vnp_OrderType=" +
    vnp_OrderType +
    "&vnp_ReturnUrl=" +
    vnp_ReturnUrl +
    "&vnp_TxnRef=" +
    vnp_TxnRef +
    "&vnp_Version=" +
    vnp_Version +
    "&vnp_SecureHash=" +
    vnp_SecureHash;

  const createPaymentMutation = useMutation({
    mutationFn: () => axios.get(VNPAY_URL + parameters),
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
      <h1>VNPAY</h1>
      <Button
        onClick={() => {
          createPaymentMutation.mutate();
        }}
        className="text-white"
      >
        VNPay
      </Button>
    </div>
  );
}
