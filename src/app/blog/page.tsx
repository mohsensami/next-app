import { Metadata } from 'next';
import Link from 'next/link';
// import { useEffect, useState } from 'react';

export const metadata: Metadata = {
    title: {
        absolute: 'Blog'
    },
    description: 'Blog description',
};

export default async function Blog() {
    // const [articles, setArticles] = useState<any>();
    // const [isLoading, setIsLoading] = useState<any>(false);
    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch('https://dummyjson.com/posts')
    //         .then((res) => res.json())
    //         .then((data) => setArticles(data));
    //     setIsLoading(false);
    // }, []);
    const data = await fetch('https://dummyjson.com/posts');
    const posts = await data.json();
    return (
        <div>
            <h1>Blog</h1>
            <div>
                {posts?.posts?.map((item: any, index: number) => (
                    <div key={index}>
                        <h4>
                            <Link href={`blog/${item.id}`}>{item.title}</Link>
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
