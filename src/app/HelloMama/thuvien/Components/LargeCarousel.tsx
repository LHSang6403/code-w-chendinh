import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Shadcn/Carousel";
import { CarouselItemType } from "../page";
import Image from "next/image";

export function LargeCarousel({ items }: { items: CarouselItemType[] }) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="flex h-fit w-full flex-col items-center justify-start gap-2">
              <div key={index} className="h-[450px] lg:h-[300px] w-full">
                <Image
                  alt="Thư viện ảnh"
                  src={item.images[0]}
                  className="object-fit !relative z-0 h-full !w-full xl:object-cover"
                  layout="fill"
                  quality={100}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
