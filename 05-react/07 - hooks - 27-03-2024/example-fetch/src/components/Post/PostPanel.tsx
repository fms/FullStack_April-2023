import { useEffect, useState } from "react";
import Post from "../../types/Post";
interface PostProps {
  id: number;
}

export default function PostPanel({ id }: PostProps) {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetch(`https://dummyjson.com/posts/${id}`, { signal: controller.signal })
      .then((res) => res.json())
      .then((obj) => {
        setPost(obj);

        // We can't use .finally, as it will also be called after an abort.
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>
            {post?.title} {post?.id}
          </h1>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
}
