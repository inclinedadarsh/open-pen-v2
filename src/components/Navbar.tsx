"use client";

import { useState } from "react";

import Link from "next/link";
import { NavProps } from "@/types";
import { cn } from "@/helpers";
import { Button, buttonVariants } from "./ui/button";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

const Navbar = ({ links, className, ...props }: NavProps) => {
    const isAdmin = true;
    const isLoggedIn = true;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={cn(
                "flex justify-between nav-container py-6 border-b relative",
                className
            )}
            {...props}
        >
            <div className='text-2xl font-semibold flex gap-3 items-center '>
                <span className=''>Open Pen</span>
                <span className='text-xs px-2 py-1 border rounded-sm font-normal'>
                    v2
                </span>
            </div>
            <Button
                variant='outline'
                size='icon'
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
                aria-label='Toggle menu'
                className='md:hidden'
            >
                {isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
            </Button>
            <ul
                className={cn(
                    "flex gap-2 absolute md:static top-[85px] h-navbar-mobile md:h-auto flex-col md:flex-row w-screen md:w-auto z-10 bg-background md:bg-transparent transition-[left] ease-in-out duration-300 px-5 md:px-0 justify-center md:justify-end",
                    isOpen && "left-0",
                    !isOpen && "left-full"
                )}
            >
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            className={buttonVariants({
                                variant: "ghost",
                                stretch: true,
                            })}
                            href={link.path}
                            onClick={() => {
                                setIsOpen((prev) => !prev);
                            }}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
                {isLoggedIn ? (
                    <>
                        {isAdmin && (
                            <Link
                                className={buttonVariants({ variant: "ghost" })}
                                href='/admin'
                            >
                                Admin
                            </Link>
                        )}
                        <Button variant='outline'>Logout</Button>
                    </>
                ) : (
                    <Link className={buttonVariants()} href='/login'>
                        Login
                    </Link>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
