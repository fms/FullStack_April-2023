import { useEffect, useState } from "react";
import Post from "../../types/Post";
import getData from "../../utils/getData";
interface PostProps {
  id: number;
}

export default function PostPanel({ id }: PostProps) {
  const [post, setPost] = useState<Post>();
  const [isLoading, setIsLoading] = useState(true);

  async function getPost(num: number, signal: AbortSignal) {
    const data = await getData<Post>(
      `https://dummyjson.com/posts/${num}`,
      signal
    );
    setPost(data);
  }

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    getPost(id, controller.signal);
    setIsLoading(false);

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
