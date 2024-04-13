import { Nav, Navlink } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import metalogo from "../../images/metalogo.png"
export default function Landingpage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <div>
          <Link href='/' className="flex gap-4 items-center" >
            <Image src={metalogo} alt="metalogic company logo" className="h-12 w-12"></Image>
            <div className="tracking-widest font-exo font-semibold text-3xl">MetaLogic</div>
          </Link>
        </div>
        <div className="flex font-semibold gap-8">
          <Navlink href="/Landingpage">Home</Navlink>
          <Navlink href="/admin/product">Services</Navlink>
          <Navlink href="/admin/us">Career</Navlink>
          <Navlink href="/admin/aboutus">Blogs</Navlink>
          <Navlink href="/admin/aboutus">About Us</Navlink>
        </div>
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-secondary text-white"  >
          <Link href='/contact'>Get in touch</Link>
        </div>
      </Nav>
      <div>
        {children}
      </div>
    </>
  );
}