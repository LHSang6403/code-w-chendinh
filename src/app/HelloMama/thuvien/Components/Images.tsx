import { ImageItemType } from "../page";
import Image from "next/image";

export function Images({ items }: { items: ImageItemType[] }) {
  return (
    <div className="grid w-full grid-cols-3 gap-4 overflow-hidden lg:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex h-fit w-full flex-col items-center justify-start gap-2 p-1"
        >
          <div key={index} className="h-fit w-full">
            <Image
              alt="Thư viện ảnh"
              src={item.image}
              className="object-fit !relative z-0 h-full !w-full xl:object-cover"
              layout="fill"
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
