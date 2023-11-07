import Plus from "@/assets/icons/plus.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="linkBtn" href={"/"}>
        <div className="flex items-center justify-center">
          <Plus />
          <span className="pl-2">Create category</span>
        </div>
      </Link>
    </main>
  );
}
