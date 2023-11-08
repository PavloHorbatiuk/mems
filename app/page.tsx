import Plus from "@/assets/icons/plus.svg";
import Categories from "@/components/Categories/Categories";
import { Routes } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <Link className="btn" href={Routs.CREATE_CATEGORY}>
        <div className=" flex items-center justify-center">
          <Plus />
          <span className="pl-2">Create category</span>
        </div>
      </Link> */}
      <Categories />
    </main>
  );
}
