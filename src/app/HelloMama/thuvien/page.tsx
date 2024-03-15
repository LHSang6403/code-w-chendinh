import { Images } from "./Components/Images";
import { LargeCarousel } from "./Components/LargeCarousel";
import { ImagesCarousel } from "./Components/ImagesCarousel";

export interface CarouselItemType {
  images: string[];
  description: string;
}

export interface ImageItemType {
  image: string;
  description: string;
}

export default function page() {
  const largeItems: CarouselItemType[] = [
    {
      images: ["/assets/images/HelloMama/thuvien/tv1.png"],
      description: "Khai trương đại lý phân phối tại Nghệ An",
    },
    {
      images: ["/assets/images/HelloMama/thuvien/tv2.png"],
      description: "Logo công ty",
    },
    {
      images: ["/assets/images/HelloMama/thuvien/tv3.png"],
      description: "Khai trương đại lý phân phối tại Phú Thọ",
    },
  ];

  const thuVienItems: ImageItemType[] = [
    {
      image: "/assets/images/HelloMama/thuvien/tv1.png",
      description: "Khai trương đại lý phân phối tại Nghệ An",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv2.png",
      description: "Logo công ty",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv3.png",
      description: "Khai trương đại lý phân phối tại Phú Thọ",
    },
  ];

  const hoatDongItems: CarouselItemType[] = [
    {
      images: ["/assets/images/HelloMama/thuvien/tv4.png"],
      description: "",
    },
    {
      images: ["/assets/images/HelloMama/thuvien/tv5.png"],
      description: "",
    },
    {
      images: ["/assets/images/HelloMama/thuvien/tv6.png"],
      description: "",
    },
    {
      images: ["/assets/images/HelloMama/thuvien/tv4.png"],
      description: "",
    },
    {
      images: ["/assets/images/HelloMama/thuvien/tv5.png"],
      description: "",
    },
    {
      images: ["/assets/images/HelloMama/thuvien/tv6.png"],
      description: "",
    },
  ];

  const khachHangItems: ImageItemType[] = [
    {
      image: "/assets/images/HelloMama/thuvien/tv7.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv8.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv9.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv10.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv11.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv12.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv13.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv14.png",
      description: "",
    },
    {
      image: "/assets/images/HelloMama/thuvien/tv15.png",
      description: "",
    },
  ];

  return (
    <div className="flex h-auto w-full flex-col items-center gap-2 pb-10 pt-6 sm:w-screen xl:px-3 sm:px-8">
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-3xl text-transparent">
        THƯ VIỆN
      </h1>
      <section className="h-fit w-screen">
        <LargeCarousel items={largeItems} />
      </section>
      <section className="h-fit w-full">
        <Images items={thuVienItems} />
      </section>
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-3xl text-transparent">
        HOẠT ĐỘNG CÔNG TY
      </h1>
      <section className="h-fit w-full">
        <ImagesCarousel items={hoatDongItems} />
      </section>
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-3xl text-transparent">
        KHÁCH HÀNG MAY MẮN
      </h1>
      <section className="h-fit w-full">
        <Images items={khachHangItems} />
      </section>
    </div>
  );
}
