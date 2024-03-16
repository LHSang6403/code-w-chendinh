import Image from "next/image";
import { Button } from "../Shadcn/Button";

export default function page() {
  const icons = [
    {
      image: "/assets/images/HelloMama/cauchuyenthuonghieu/icons/instagram.png",
      name: "Instagram",
    },
    {
      image: "/assets/images/HelloMama/cauchuyenthuonghieu/icons/facebook.png",
      name: "Facebook",
    },
    {
      image: "/assets/images/HelloMama/cauchuyenthuonghieu/icons/gmail.png",
      name: "Gmail",
    },
  ];

  const cauchuyenImages = [
    {
      image:
        "/assets/images/HelloMama/cauchuyenthuonghieu/cauchuyenImages/c1.png",
      name: "Câu chuyện thương hiệu",
    },
    {
      image:
        "/assets/images/HelloMama/cauchuyenthuonghieu/cauchuyenImages/c2.png",
      name: "Câu chuyện thương hiệu",
    },
  ];

  return (
    <div className=" flex h-auto w-full flex-col items-center gap-4 px-28 pb-4 pt-6 xl:px-3 sm:w-screen sm:px-3">
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent">
        CÂU CHUYỆN THƯƠNG HIỆU
      </h1>
      <p className="text-center text-xl">
        Người bạn đồng hành của nhiều gia đình Việt
      </p>
      <div className="mb-2 flex w-full flex-row items-center justify-end gap-4 xl:hidden">
        {icons.map((icon, index) => (
          <div key={index} className="h-5 w-5 hover:cursor-pointer">
            <Image alt={icon.name} src={icon.image} width={94} height={94} />
          </div>
        ))}
      </div>
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
          Công ty TNHH Hello Mama - Chúng tôi mang trong mình sứ mệnh nâng cao
          tầm vóc trẻ em Việt Nam, nâng cao sức khỏe của người dân Việt Nam bằng
          những sản phẩm dinh dưỡng chất lượng với giá thành hợp lý
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
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent">
        HỆ THỐNG CỬA HÀNG
      </h1>
      <p className="px-56 text-center font-light xl:px-28 sm:px-0">
        Hiện nay, các sản phẩm của Hello Mama đã có mặt ở gần 200 đại lý, cửa
        hàng, nhà phân phối trên toàn quốc
      </p>
      <Button className="group mb-4 mt-2 w-fit px-3 xl:mb-2 sm:mt-0">
        <span className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-lg font-light text-transparent group-hover:text-white">
          Hệ thống đại lý
        </span>
      </Button>
      <section className="flex h-fit w-[100vw] flex-row gap-4 bg-[#F7F7F7] px-28 py-4 xl:flex-col xl:bg-white xl:px-3 xl:py-0">
        <div className="flex h-fit w-2/5 flex-col gap-2 xl:w-full xl:flex-col-reverse">
          <h1 className="mt-3 bg-gradient-to-r from-[#D0A436] via-[#F7F1AB] to-[#EECD6B] bg-clip-text text-center text-4xl font-extrabold text-transparent">
            HELLO MAMA
          </h1>
          <div className="w-full">
            <Image
              alt="Câu chuyện thương hiệu"
              src="/assets/images/HelloMama/cauchuyenthuonghieu/cauchuyenImages/c3.png"
              width={1920}
              height={960}
              quality={100}
            />
          </div>
        </div>
        <div className="h-fit w-3/5 xl:w-full xl:pb-4">
          <p className="font-light xl:text-center">
            Được thành lập vào năm 2015, với tên gọi đầu tiên là Thủy Tiếp Baby
            – hệ thống cửa hàng mẹ và bé chuyên phân phối các sản phẩm dành cho
            mẹ và bé. Sau nhiều năm phấn đấu và phát triển không ngừng, năm
            2021, công ty TNHH Hello Mama chính thức được thành lập. <br />
            Không chỉ là đơn vị sản xuất, phân phối các sản phẩm dinh dưỡng chất
            lượng mà còn cung cấp dịch vụ tư vấn setup mở các cửa hàng, phân
            phối các sản phẩm cho các hệ thống cửa hàng trên toàn quốc.
            <br />
            <br />
            Hello Mama đã và đang tiếp tục khẳng định mình với tinh thần luôn
            đổi mới, sáng tạo và phát triển không ngừng nghỉ. Phấn đấu để thương
            hiệu Hello Mama trở nên quen thuộc với mỗi gia đình, trở thành “cánh
            tay phải đắc lực” giúp các phụ huynh chăm sóc con yêu, trở thành
            “người bạn dinh dưỡng” đồng hành giúp mỗi người Việt Nam khỏe mạnh
            hơn.
            <br />
            <br />
            Hello Mama với mong muốn trở thành thương hiệu dinh dưỡng được yêu
            thích ở mọi miền đất nước. Vì thế, chúng tôi luôn tâm niệm rằng chất
            lượng sản phẩm luôn là yếu tố then chốt để chinh phục khách hàng.
            HelloMaMa luôn đặt khách hàng là trung tâm và cam kết mang đến những
            sản phẩm có chất lượng tốt nhất, đáp ứng mọi nhu cầu của khách hàng.{" "}
            <br />
            <br />
            Hello Mama luôn có trách nhiệm và thỏa mãn khách hàng bằng cách
            không ngừng đổi mới và sáng tạo nhằm đưa ra những sản phẩm dinh
            dưỡng với chất lượng vượt trội, đảm bảo an toàn vệ sinh thực phẩm
            với giá cả hợp lý nhất.
          </p>
        </div>
      </section>
    </div>
  );
}
