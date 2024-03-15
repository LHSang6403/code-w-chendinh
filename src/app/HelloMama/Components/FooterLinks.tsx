import Link from "next/link";

export function FooterLinks() {
  return (
    <div className="flex flex-row items-center gap-6">
      <Link href="#">Trang chủ</Link>
      <Link href="#">Cửa hàng</Link>
      <Link href="#">Hệ thống đại lý</Link>
      <Link href="#">Liên hệ</Link>
      <Link href="#">Hỗ trợ</Link>
    </div>
  );
}

export function FooterLinksMobile() {
  return (
    <div className="text-sm flex flex-col items-center gap-4 font-light">
      <Link href="#">Liên hệ</Link>
      <Link href="#">Cửa hàng</Link>
      <Link href="#">Hệ thống đại lý</Link>
      <Link href="#">Câu chuyện thương hiệu</Link>
    </div>
  );
}
