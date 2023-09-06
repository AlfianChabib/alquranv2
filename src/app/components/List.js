import Image from "next/image";
import { listMenu } from "../constants/index";
import Link from "next/link";

export default function List() {
  return (
    <section className="grid grid-cols-3 w-full mt-4 gap-4">
      {listMenu.map((item) => (
        <Link
          className="flex flex-col col-span-1 py-2 items-center border-2 dark:border-[#0A5356] border-[#0A535620] bg-gradient-to-br from-[#4DBBA5] to-[#76C497] dark:bg-none rounded-xl"
          key={item.id}
          href={item.id}
          rel="preload"
        >
          <Image
            src={item.src}
            alt={item.name}
            width={60}
            height={60}
            priority
            className="drop-shadow-xl"
          />
          <p className="text-xs font-semibold mt-2 dark:text-[#E3F5F8] text-[#0A5356]">
            {item.name}
          </p>
        </Link>
      ))}
      <div className="col-span-1 h-24"></div>
    </section>
  );
}
