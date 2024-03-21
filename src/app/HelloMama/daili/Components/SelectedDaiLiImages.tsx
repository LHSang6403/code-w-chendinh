"use client";

import Image from "next/image";
import { useDaiLiSelect } from "@/zustand/useDaiLiSelect";

export default function SelectedDaiLiImages() {
  const { selectedDaiLi } = useDaiLiSelect();
  return (
    <div className="h-fit w-96 xl:w-full">
      <Image
        alt="Dai li"
        src={
          selectedDaiLi.images[0] ||
          "/assets/images/HelloMama/daili_ads_image.png"
        }
        className="object-fit !relative z-0 h-full !w-full xl:object-cover"
        layout="fill"
        quality={100}
      />
    </div>
  );
}
