import { Button } from "../Shadcn/Button";
import StorySection from "./Components/StorySection";
import StoreSection from "./Components/StoreSection";
import IconsSection from "./Components/IconsSection";

export default function page() {
  return (
    <div className=" flex h-auto w-full flex-col items-center gap-4 px-28 pb-4 pt-6 xl:px-3 sm:w-screen sm:px-3">
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent">
        CÂU CHUYỆN THƯƠNG HIỆU
      </h1>
      <p className="text-center text-xl xl:pb-2">
        Người bạn đồng hành của nhiều gia đình Việt
      </p>
      <IconsSection />
      <StorySection />
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent">
        HỆ THỐNG CỬA HÀNG
      </h1>
      <p className="px-56 text-center font-light xl:px-28 sm:px-0">
        Hiện nay, các sản phẩm của Hello Mama đã có mặt ở gần 200 đại lý, cửa
        hàng, nhà phân phối trên toàn quốc
      </p>
      <Button className="group mb-4 mt-2 w-fit px-3 xl:mb-2 sm:mt-0">
        <span className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-lg font-light text-transparent group-hover:text-white">
          Hệ thống đại lý
        </span>
      </Button>
      <StoreSection />
    </div>
  );
}
