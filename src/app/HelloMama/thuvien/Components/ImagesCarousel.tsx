import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Shadcn/Carousel";
import { ImageItemType } from "../page";
import Image from "next/image";

export function ImagesCarousel({ items }: { items: ImageItemType[] }) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="h-fit w-full pb-0"
    >
      <CarouselContent className="pb-0">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3 pb-0 lg:basis-1/2"
          >
            <div className="flex h-fit w-full flex-col items-center justify-start gap-2">
              <div className="max-h-[320px] w-full">
                <Image
                  alt="Thư viện ảnh"
                  src={item.image}
                  width={934}
                  height={670}
                  quality={100}
                />
              </div>
              {item.description !== "" && (
                <p className="line-clamp-2 h-fit w-full overflow-ellipsis px-2 text-center font-light lg:line-clamp-4">
                  {item.description}
                </p>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
