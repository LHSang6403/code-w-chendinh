import Image from "next/image";
import Link from "next/link";

export default function FooterIcons() {
  const icons = [
    {
      name: "Facebook",
      image: "/assets/images/HelloMama/footer/facebook.png",
      link: "#",
    },
    {
      name: "Instagram",
      image: "/assets/images/HelloMama/footer/instagram.png",
      link: "#",
    },
    {
      name: "Youtube",
      image: "/assets/images/HelloMama/footer/youtube.png",
      link: "#",
    },
  ];

  return (
    <div className="items flex h-fit flex-row items-center justify-center gap-8 sm:gap-3">
      {icons.map((icon, index) => (
        <Link href={icon.link} key={index} className="h-fit w-10 sm:w-6">
          <Image
            alt={icon.name}
            src={icon.image}
            className="object-fit !relative z-0 !w-full xl:object-cover"
            layout="fill"
            quality={100}
          />
        </Link>
      ))}
    </div>
  );
}
