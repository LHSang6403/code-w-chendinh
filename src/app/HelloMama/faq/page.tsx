import Search from "./Components/Search";
import RightQuestions from "./Components/RightQuestions";
import LeftQuestions from "./Components/LeftQuestions";

export default function page() {
  return (
    <div className="flex h-auto min-h-screen w-full max-w-[1150px] flex-col items-center gap-4 px-28 pb-10 pt-6 xl:gap-2 xl:px-3 xl:pb-6 sm:px-3 sm:pb-2">
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent xl:px-6 xl:text-2xl">
        CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?
      </h1>
      <div className="flex w-full flex-col items-center gap-1 xl:gap-4">
        <div className="w-[600px] overflow-hidden rounded-md bg-gradient-to-r from-[#CD9F2D] via-[#F7EF8A] to-[#EDC967] p-[1px] xl:mt-1 xl:w-full">
          <Search />
        </div>
        <p className="text-[12.5px] font-extralight">
          Bạn không tìm thấy câu trả lời? Gọi ngay 1900 066 878 hoặc gửi email
          đến địa chỉ hellomama379@gmail.com nhé!
        </p>
      </div>
      <h1 className="mr-auto mt-3 max-w-[220px] bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-start text-2xl text-transparent xl:mb-2 xl:mr-0 xl:mt-2 xl:max-w-full xl:text-center">
        CÂU HỎI THƯỜNG GẶP
      </h1>
      <div className="-mt-2 flex w-full flex-row gap-6 xl:mt-0 xl:flex-col xl:gap-0">
        <div className="w-1/3 xl:w-full">
          <LeftQuestions />
        </div>
        <div className="w-2/3 xl:w-full">
          <RightQuestions />
        </div>
      </div>
    </div>
  );
}
