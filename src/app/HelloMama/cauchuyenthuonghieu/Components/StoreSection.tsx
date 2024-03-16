import Image from "next/image";

export default function StoreSection() {
  return (
    <section className="flex h-fit w-[100vw] flex-row gap-3 bg-[#F7F7F7] px-28 py-4 xl:flex-col xl:bg-white xl:px-3 xl:py-0">
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
          Được thành lập vào năm 2015, với tên gọi đầu tiên là Thủy Tiếp Baby –
          hệ thống cửa hàng mẹ và bé chuyên phân phối các sản phẩm dành cho mẹ
          và bé. Sau nhiều năm phấn đấu và phát triển không ngừng, năm 2021,
          công ty TNHH Hello Mama chính thức được thành lập. <br />
          Không chỉ là đơn vị sản xuất, phân phối các sản phẩm dinh dưỡng chất
          lượng mà còn cung cấp dịch vụ tư vấn setup mở các cửa hàng, phân phối
          các sản phẩm cho các hệ thống cửa hàng trên toàn quốc.
          <br />
          <br />
          Hello Mama đã và đang tiếp tục khẳng định mình với tinh thần luôn đổi
          mới, sáng tạo và phát triển không ngừng nghỉ. Phấn đấu để thương hiệu
          Hello Mama trở nên quen thuộc với mỗi gia đình, trở thành “cánh tay
          phải đắc lực” giúp các phụ huynh chăm sóc con yêu, trở thành “người
          bạn dinh dưỡng” đồng hành giúp mỗi người Việt Nam khỏe mạnh hơn.
          <br />
          <br />
          Hello Mama với mong muốn trở thành thương hiệu dinh dưỡng được yêu
          thích ở mọi miền đất nước. Vì thế, chúng tôi luôn tâm niệm rằng chất
          lượng sản phẩm luôn là yếu tố then chốt để chinh phục khách hàng.
          HelloMaMa luôn đặt khách hàng là trung tâm và cam kết mang đến những
          sản phẩm có chất lượng tốt nhất, đáp ứng mọi nhu cầu của khách hàng.{" "}
          <br />
          <br />
          Hello Mama luôn có trách nhiệm và thỏa mãn khách hàng bằng cách không
          ngừng đổi mới và sáng tạo nhằm đưa ra những sản phẩm dinh dưỡng với
          chất lượng vượt trội, đảm bảo an toàn vệ sinh thực phẩm với giá cả hợp
          lý nhất.
        </p>
      </div>
    </section>
  );
}
