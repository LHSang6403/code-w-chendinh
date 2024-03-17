import Image from "next/image";

export default function QRPayment() {
  return (
    <div className="mx-auto w-96 text-center text-xl sm:text-lg">
      <div className="px-4 sm:px-8">
        <Image
          alt="QR Thanh Toán"
          src="/assets/images/HelloMama/thanhtoan/qr.png"
          width={1800}
          height={1800}
          layout="responsive"
        />
      </div>
      <p className="font-light">
        Tên:{" "}
        <span className="font-normal sm:font-light">Công ty Hello MaMa</span>
      </p>
      <p className="mt-1 font-light">
        Số điện thoại:{" "}
        <span className="font-normal sm:font-light">079999999</span>
      </p>
    </div>
  );
}
