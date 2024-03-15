import { ImageItemType } from "../page";
import Image from "next/image";

export function Images({ items }: { items: ImageItemType[] }) {
  return (
    <div className="grid w-full grid-cols-3 gap-4 overflow-hidden lg:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex h-fit w-full flex-col items-center justify-start gap-2 ${
            index > items.length - 6 ? "lg:hidden" : ""
          }`}
        >
          <div key={index} className="max-h-[320px] w-full overflow-hidden">
            <Image
              alt="Hoạt động"
              src={item.image}
              width={934}
              height={934}
              quality={100}
            />
          </div>
          {item.description !== "" && (
            <p className="line-clamp-2 h-fit w-full overflow-ellipsis px-2 text-center font-light lg:line-clamp-4">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
