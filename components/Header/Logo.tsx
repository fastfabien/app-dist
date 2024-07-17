import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="mr-[100px]">
      <Image src="/logo.png" alt="logo" width={50} height={48} />
    </Link>
  );
};
