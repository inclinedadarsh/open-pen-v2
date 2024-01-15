import { BlogCardProps, LinkType } from "@/types";

export const NAV_LINKS: LinkType[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

export const BLOG_POSTS: BlogCardProps[] = [
    {
        title: "Some blog title!",
        description: "Some blog description!",
        imagePath:
            "https://images.unsplash.com/photo-1704972841788-86fac20fc87e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogPath: "/blog/blog-1",
    },
    {
        title: "Another blog title!",
        description: "Another blog description!",
        imagePath:
            "https://images.unsplash.com/photo-1705200225027-37f2371df0e0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogPath: "/blog/blog-2",
    },
    {
        title: "Yet another blog title!",
        description: "Yet another blog description!",
        imagePath:
            "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogPath: "/blog/blog-3",
    },
    {
        title: "Some blog title!",
        description: "Some blog description!",
        imagePath:
            "https://images.unsplash.com/photo-1704815737135-b0982904509f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogPath: "/blog/blog-4",
    },
    {
        title: "Another blog title!",
        description: "Another blog description!",
        imagePath:
            "https://images.unsplash.com/photo-1705113165376-b14041df2059?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        blogPath: "/blog/blog-5",
    },
];
