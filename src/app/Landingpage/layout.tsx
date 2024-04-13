"use client"
import { Nav, NavHamburger, Navlink } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import metalogo from "../../images/metalogo.png"
import { Menu } from 'lucide-react';
import { useState } from "react";
export default function Landingpage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("toggled", isDrawerOpen);

    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Nav>
        <div>
          <Link href='/' className="flex gap-4 items-center" >
            <Image src={metalogo} alt="metalogic company logo" className="h-12 w-12"></Image>
            <div className="tracking-widest font-exo font-bold text-3xl">MetaLogic</div>
          </Link>
        </div>
        <NavHamburger>
          <button onClick={toggleDrawer}>
            <Menu className="w-8 h-8 text-secondary" />
          </button>
        </NavHamburger>
        <div className=" font-semibold gap-8 hidden lg:flex">
          <Navlink href="/Landingpage">Home</Navlink>
          <Navlink href="/admin/product">Services</Navlink>
          <Navlink href="/admin/us">Career</Navlink>
          <Navlink href="/admin/aboutus">Blogs</Navlink>
          <Navlink href="/admin/aboutus">About Us</Navlink>
        </div>
        <div className="hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2 bg-secondary text-white"  >
          <Link href='/contact'>Get in touch</Link>
        </div>

      </Nav>
      <div className={`fixed inset-y-0 right-0 z-50 bg-white w-64 transition duration-300 ease-in-out transform shadow-2xl ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex items-center justify-between p-6  border-b">
          <div className="tracking-widest font-exo font-bold text-2xl">MetaLogic</div>
          <button onClick={toggleDrawer}>
            <Menu className="w-8 h-8 text-secondary" />
          </button>
        </div>
        <div className="p-4 text-black flex flex-col gap-4 font-semibold text-lg">
          <Navlink href="/Landingpage">Home</Navlink>
          <Navlink href="/admin/product">Services</Navlink>
          <Navlink href="/admin/us">Career</Navlink>
          <Navlink href="/admin/aboutus">Blogs</Navlink>
          <Navlink href="/admin/aboutus">About Us</Navlink>
        </div>
      </div>
      <div>
        {children}
      </div>
    </>
  );
}