

import { Metadata } from 'next';
import { notFound } from 'next/navigation';


export const generateMetadata = ({ params }: { params: { postId: string } }): Metadata=> {
    return {
        title: `مقاله ${params.postId}`
    }
}

export default async function PostDetails({ params }: { params: { postId: string } }) {
    // const [article, setArticle] = useState<any>();
    // const [isLoading, setIsLoading] = useState<any>(false);
    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(`https://dummyjson.com/posts/${params.postId}`)
    //         .then((res) => res.json())
    //         .then((data) => setArticle(data));
    //     setIsLoading(false);
    // }, [params.postId]);
    const data = await fetch(`https://dummyjson.com/posts/${params.postId}`);
    const post = await data.json();

    if (parseInt(params.postId) > 100) {
        return notFound();
    }
    return (
        <div>

                <div>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>

        </div>
    );
}
