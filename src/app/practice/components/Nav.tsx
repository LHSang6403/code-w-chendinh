import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-row gap-4 font-medium sm:text-sm">
      <Link href="#" className="border-b-[4px] px-1.5">
        home
      </Link>
      <Link href="#" className="px-1">
        about us
      </Link>
      <Link href="#" className="px-1">
        services
      </Link>
      <Link href="#" className="px-1">
        contact us
      </Link>
    </div>
  );
}
