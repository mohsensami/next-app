'use client';

import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function PostDetails({ params }: { params: { postId: string } }) {
    const [article, setArticle] = useState<any>();
    const [isLoading, setIsLoading] = useState<any>(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://dummyjson.com/posts/${params.postId}`)
            .then((res) => res.json())
            .then((data) => setArticle(data));
        setIsLoading(false);
    }, [params.postId]);
    if (parseInt(params.postId) > 100) {
        return notFound();
    }
    return (
        <div>
            {!isLoading && (
                <div>
                    <h1>{article?.title}</h1>
                    <p>{article?.body}</p>
                </div>
            )}
        </div>
    );
}
