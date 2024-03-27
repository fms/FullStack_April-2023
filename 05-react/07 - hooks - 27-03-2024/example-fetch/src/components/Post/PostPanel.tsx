import { useEffect, useState } from "react";
import Post from "../../types/Post";
interface PostProps {
  id: number;
}

export default function PostPanel({ id }: PostProps) {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://dummyjson.com/posts/${id}`, { signal: controller.signal })
      .then((res) => res.json())
      .then((obj) => {
        setPost(obj);
      });
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <h1>
        {post?.title} {post?.id}
      </h1>
      <p>{post?.body}</p>
    </>
  );
}
