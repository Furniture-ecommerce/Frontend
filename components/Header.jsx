import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
