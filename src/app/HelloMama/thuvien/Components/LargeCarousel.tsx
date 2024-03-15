import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Shadcn/Carousel";
import { ImageItemType } from "../page";
import Image from "next/image";

export function LargeCarousel({ items }: { items: ImageItemType[] }) {
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
            <div className="flex max-h-[650px] w-full flex-col items-center justify-start gap-2 lg:h-fit">
              <Image
                alt="Thư viện ảnh"
                src={item.image}
                width={1920}
                height={800}
                quality={100}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
