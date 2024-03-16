import Image from "next/image";

export default function StorySection() {
  return (
    <section>
      <div className="w-full">
        <Image
          alt="Câu chuyện thương hiệu"
          src="/assets/images/HelloMama/cauchuyenthuonghieu/cauchuyenImages/c1.png"
          width={1920}
          height={960}
          quality={100}
        />
      </div>
      <p className="my-8 text-center font-light sm:my-3">
        Công ty TNHH Hello Mama - Chúng tôi mang trong mình sứ mệnh nâng cao tầm
        vóc trẻ em Việt Nam, nâng cao sức khỏe của người dân Việt Nam bằng những
        sản phẩm dinh dưỡng chất lượng với giá thành hợp lý
      </p>
      <div className="w-full">
        <Image
          alt="Câu chuyện thương hiệu"
          src="/assets/images/HelloMama/cauchuyenthuonghieu/cauchuyenImages/c2.png"
          width={1920}
          height={960}
          quality={100}
        />
      </div>
    </section>
  );
}
