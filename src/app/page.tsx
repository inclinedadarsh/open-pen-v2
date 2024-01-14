import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className='view-container grow mt-16 space-y-10'>
            <h1 className='text-4xl lg:text-5xl font-semibold flex flex-col gap-2 md:gap-5'>
                <span>Open Pen:</span>
                <span>Simplify, Express, Share.</span>
            </h1>
            <p className='max-w-4xl'>
                Streamline your blogging experience with our minimalist platform
                designed for easy content creation and seamless sharing. Focus
                on what matters most - your ideas - while enjoying a
                user-friendly interface that lets your creativity shine. Join us
                today and discover the joy of effortless blogging.
            </p>
            <div className='flex gap-5'>
                <Link className={buttonVariants()} href='/login'>
                    Login
                </Link>
                <Link
                    className={buttonVariants({ variant: "secondary" })}
                    href='/about'
                >
                    About us
                </Link>
            </div>
        </main>
    );
}
