import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Shadcn/Carousel";
import { CarouselItemType } from "../page";
import Image from "next/image";

export function ImagesCarousel({ items }: { items: CarouselItemType[] }) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3 xl:basis-1/2">
            <div className="flex h-fit w-full flex-col items-center justify-start gap-2 p-1">
              {item.images.map((image, index) => (
                <div key={index} className="my-2 h-fit w-full">
                  <Image
                    alt="Thư viện ảnh"
                    src={image}
                    className="object-fit !relative z-0 h-full !w-full xl:object-cover"
                    layout="fill"
                    quality={100}
                  />
                </div>
              ))}
              {item.description !== "" && (
                <p className="line-clamp-2 h-fit w-full overflow-ellipsis px-2 text-center font-light">
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
