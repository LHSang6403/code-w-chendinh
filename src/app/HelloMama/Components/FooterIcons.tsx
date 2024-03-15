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
    <div className="items flex h-fit flex-row items-center justify-center gap-8 xl:gap-4 sm:gap-3">
      {icons.map((icon, index) => (
        <Link href={icon.link} key={index} className="h-fit w-8 xl:w-6">
          <Image
            alt={icon.name}
            src={icon.image}
            width={48}
            height={48}
            quality={100}
          />
        </Link>
      ))}
    </div>
  );
}
