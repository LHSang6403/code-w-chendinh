import Image from "next/image";

export default function IconsSection() {
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
  
  return (
    <div className="mb-2 flex w-full flex-row items-center justify-end gap-4 xl:hidden">
      {icons.map((icon, index) => (
        <div key={index} className="h-5 w-5 hover:cursor-pointer">
          <Image alt={icon.name} src={icon.image} width={94} height={94} />
        </div>
      ))}
    </div>
  );
}
