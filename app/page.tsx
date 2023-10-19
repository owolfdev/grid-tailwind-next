import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-24 py-8">
        This project is a companion to this blog post:
        <Link href="https://www.owolf.com/blog/css-grid-tailwind">
          Using Grid with Tailwind CSS
        </Link>
      </div>
      <div className="flex flex-col px-24 font-bold text-lg">
        <div className="">1. Setting up a Grid Container</div>
        <div>2. Define Columns and Rows</div>

        <Link href="https://grid-tailwind-next.vercel.app/spanning-multiple-rows">
          <div className="">3. Spanning Multiple Columns or Rows</div>
        </Link>
      </div>
    </>
  );
}
