export interface SearchListItemProps {
  name: string;
  province: string;
  district: string;
  address: string;
  phones: string[];
  images: string[];
}

export default function SearchListItem({ row }: { row: SearchListItemProps }) {
  return (
    <li className="group rounded-lg bg-gradient-to-r from-[#CD9F2D] via-[#F7EF8A] to-[#EDC967] p-[1px] hover:cursor-pointer hover:bg-gradient-to-b hover:from-[#1E588F] hover:via-[#0E7BB8] hover:to-[#0E7BB8]">
      <div className="h-16 w-72 rounded-lg bg-white px-2 py-1 group-hover:bg-gradient-to-b group-hover:from-[#1E588F] group-hover:via-[#0E7BB8] group-hover:to-[#0E7BB8] xl:w-full ">
        <div className="line-clamp-1 overflow-ellipsis text-sm text-black group-hover:text-white">
          {row.name}
        </div>
        <div className="line-clamp-1 overflow-ellipsis text-[14px] text-[#1c1c1c] group-hover:text-white">
          {row.address}, {row.province}, {row.district}
        </div>
        <div className="flex flex-row  items-center gap-1 text-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-3 w-3 group-hover:text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span className="line-clamp-1 overflow-ellipsis text-[#1c1c1c] group-hover:text-white">
            {row.phones.join(" - ")}
          </span>
        </div>
      </div>
    </li>
  );
}

{
  /* <li>
  <div className="h-16 w-72 rounded-lg bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] px-2 py-1 text-white xl:w-full">
    <div className="line-clamp-1 overflow-ellipsis text-sm">
      Hello Mama Yên Thành
    </div>
    <div className="line-clamp-1 overflow-ellipsis text-[14px]">
      Xóm 6 Viên Thánh , Yên Thành , Nghệ An
    </div>
    <div className="flex flex-row items-center gap-1 text-[14px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
      <span className="line-clamp-1 overflow-ellipsis">
        097 768 8327 - 086 810 0190
      </span>
    </div>
  </div>
</li>; */
}
