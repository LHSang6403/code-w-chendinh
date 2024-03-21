import AddressSelects from "./Components/AddressSelects";
import SearchList from "./Components/SearchList";
import SelectedDaiLiImages from "./Components/SelectedDaiLiImages";

export default function page() {
  return (
    <div className="flex h-auto w-full flex-col items-center px-28 pb-20 pt-6 xl:px-3 sm:w-screen sm:px-3">
      <h1 className="mb-6 bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-3xl text-transparent">
        HỆ THỐNG ĐẠI LÝ
      </h1>
      <div className="flex w-[870px] justify-center xl:w-[600px] sm:w-full">
        <AddressSelects />
      </div>
      <div className="mt-3 flex w-full flex-row justify-center gap-2  xl:flex-col ">
        <SearchList />
        <SelectedDaiLiImages />
      </div>
    </div>
  );
}
