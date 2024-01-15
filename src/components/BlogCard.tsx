import { cn } from "@/helpers";
import { BlogCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
    title,
    description,
    imagePath,
    blogPath,
    className,
    ...props
}: BlogCardProps) => {
    return (
        <Link
            className={cn(
                "block p-4 border-2 border-dashed rounded-xl hover:bg-white/5 transition-colors",
                className
            )}
            href={blogPath}
            {...props}
        >
            <Image
                src={imagePath}
                alt={title}
                className='rounded aspect-video object-cover'
                width={500}
                height={500}
            />
            <h2 className='text-xl font-semibold mt-4'>{title}</h2>
            <p className='text-sm text-white/75'>{description}</p>
        </Link>
    );
};

export default BlogCard;
