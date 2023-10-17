import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-24">
      <Link href="https://grid-tailwind-next.vercel.app/spanning-multiple-rows">
        <div className="font-bold text-lg">
          3. Spanning Multiple Columns or Rows
        </div>
      </Link>
    </div>
  );
}
