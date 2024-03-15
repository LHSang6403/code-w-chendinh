import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="mt-1 w-20">
      <Image
        alt="Hello Mama"
        src="/assets/images/HelloMama/footer/logo.png"
        className="object-fit !relative z-0 h-full !w-full xl:object-cover"
        layout="fill"
        quality={100}
      />
    </div>
  );
}
