'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Blog() {
    const [articles, setArticles] = useState<any>();
    const [isLoading, setIsLoading] = useState<any>(false);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((data) => setArticles(data));
        setIsLoading(false);
    }, []);
    return (
        <div>
            <h1>Blog</h1>
            <div>
                {!isLoading &&
                    articles?.posts?.map((item: any, index: number) => (
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
