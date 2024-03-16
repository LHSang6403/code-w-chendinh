import { Images } from "./Components/Images";
import { LargeCarousel } from "./Components/LargeCarousel";
import { ImagesCarousel } from "./Components/ImagesCarousel";

export interface ImageItemType {
  image: string;
  description: string;
}

export default function page() {
  const largeItems: ImageItemType[] = [
    {
      image: "/assets/images/HelloMama/thuvien/largeCarousel/l1.png",
      description: "Khai trương đại lý phân phối tại Nghệ An",
    },
    {
      image: "/assets/images/HelloMama/thuvien/largeCarousel/l2.png",
      description: "Logo công ty",
    },
  ];

  const thuVienItems: ImageItemType[] = [
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv1.png",
      description: "Khai trương đại lý phân phối tại Nghệ An",
    },
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv2.png",
      description: "Logo công ty",
    },
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv3.png",
      description: "Khai trương đại lý phân phối tại Phú Thọ",
    },
  ];

  const hoatDongItems: ImageItemType[] = [
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv4.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv5.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv6.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv4.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv5.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/activityImages/tv6.png",
      description: "",
    },
  ];

  const khachHangItems: ImageItemType[] = [
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k1.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k2.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k3.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k4.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k5.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k6.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k7.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k8.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/khachhangImages/k9.png",
      description: "",
    },
  ];

  return (
    <div className="flex h-auto w-full flex-col items-center gap-6 px-28 pb-10 pt-6 xl:px-3 sm:w-screen sm:px-6">
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent lg:text-2xl">
        THƯ VIỆN
      </h1>
      <section className="h-fit w-[99vw] max-w-[1600px]">
        <LargeCarousel items={largeItems} />
      </section>
      <section className="h-fit w-full">
        <ImagesCarousel items={thuVienItems} />
      </section>
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent lg:text-2xl">
        HOẠT ĐỘNG CÔNG TY
      </h1>
      <section className="h-fit w-full">
        <ImagesCarousel items={hoatDongItems} />
      </section>
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent lg:text-2xl">
        KHÁCH HÀNG MAY MẮN
      </h1>
      <section className="h-fit w-full">
        <Images items={khachHangItems} />
      </section>
    </div>
  );
}
