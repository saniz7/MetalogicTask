'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps } from 'react';

export function Nav({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <nav className='bg-primary text-white lg:flex justify-between px-8 py-3 items-center w-full '>
            {children}
        </nav>
    );
}

export function Navlink(props: Omit<ComponentProps<typeof Link>, "classname">) {
    const pathname = usePathname();
    return (
        <Link
            {...props}
            className={
                " text-white hover:bg-secondary hover:text-white focus-visible:bg-secondary focus-visible:text-white " +
                (pathname === props.href ? "bg-[#e53b3a] text-white" : "")
            }

        />
    );
}