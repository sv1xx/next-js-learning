import Image from "next/image";
import Link from "next/link";
import { Menu } from "./sidebar.data";
import { Sun } from "lucide-react";
export default function Sidebar() {
  return (
    <>
      <div className="flex justify-start h-screen">
        <div className="flex flex-col items-center justify-between border-2 border-gray-400 p-5 rounded-xl ml-5 ">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
          </Link>
          <div className="flex flex-col gap-5">
            {Menu.map((item) => {
              return (
                <Link
                  className="group hover:bg-zinc-700 flex items-center gap-2 py-2 px-5 group bg-inherit rounded-xl transition-colors duration-100 ease-in-out"
                  key={item.url}
                  href={item.url}
                >
                  <item.icon
                    className="text-gray-400 group-hover:text-white transition-colors duration-100 ease-in-out"
                    size={35}
                  />
                  <p className="text-gray-400 group-hover:text-white text-base font-medium transition-colors duration-100 ease-in-out">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
          <button className="">
            <Sun size={35} />
          </button>
        </div>
      </div>
    </>
  );
}
