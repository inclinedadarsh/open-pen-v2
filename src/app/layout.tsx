import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { NAV_LINKS } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Open Pen v2",
    description: "Open source blog platform built with Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${inter.className} flex justify-between min-h-dvh flex-col`}
            >
                <Navbar links={NAV_LINKS} />
                {children}
                <Footer />
            </body>
        </html>
    );
}
