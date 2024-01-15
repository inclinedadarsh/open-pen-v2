import BlogCard from "@/components/BlogCard";

import { BLOG_POSTS } from "@/constants";

const Blog = () => {
    return (
        <div className='my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 view-container gap-5'>
            {BLOG_POSTS.map((post, index) => (
                <BlogCard
                    key={index}
                    title={post.title}
                    imagePath={post.imagePath}
                    description={post.description}
                    blogPath={post.blogPath}
                />
            ))}
        </div>
    );
};

export default Blog;
