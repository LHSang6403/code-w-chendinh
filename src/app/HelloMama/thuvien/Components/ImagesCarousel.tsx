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
      className="w-full"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/2 pb-0">
            <div className="flex h-fit w-full flex-col items-center justify-start gap-2">
              <div className="max-h-[320px] w-full">
                <Image
                  alt="Thư viện ảnh"
                  src={item.image}
                  width={934}
                  height={934}
                  quality={100}
                />
              </div>
              {item.description !== "" && (
                <p className="line-clamp-2 lg:line-clamp-4 h-fit w-full overflow-ellipsis px-2 text-center font-light">
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
