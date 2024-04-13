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
        <>
            <nav className='fixed top-0  bg-primary text-white flex justify-between p-4 lg:px-8 lg:py-3 items-center w-full '>
                {children}
            </nav>
        
        </>
    );
}
export function NavHamburger({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <nav className='bg-primary text-white flex lg:hidden'>
                {children}
            </nav>
        </>
    );
}
export function Navlink(props: Omit<ComponentProps<typeof Link>, "classname">) {
    const { href } = props;
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            {...props}
            className={`navlink hover:text-secondary lg:text-white lghover:text-white focus-visible:bg-secondary focus-visible:text-white ${isActive ? 'active text-secondary' : ''}`}

        />
    );
}