import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex w-fit flex-row gap-4 overflow-x-auto font-medium sm:text-sm">
      <Link
        href="#"
        className="w-fit text-nowrap border-b-[4px] px-1.5 sm:px-0"
      >
        home
      </Link>
      <Link href="#" className="w-fit text-nowrap px-1 sm:px-0">
        about us
      </Link>
      <Link href="#" className="w-fit text-nowrap px-1 sm:px-0">
        services
      </Link>
      <Link href="#" className="w-fit text-nowrap px-1 sm:px-0">
        contact us
      </Link>
    </div>
  );
}
