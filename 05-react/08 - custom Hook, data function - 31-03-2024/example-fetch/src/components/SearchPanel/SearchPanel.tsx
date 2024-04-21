import { useEffect, useState } from "react";
import Post from "../../types/Post";
interface SearchPanelProps {
  query: string;
}

export default function SearchPanel({ query }: SearchPanelProps) {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://dummyjson.com/posts/search?q=${query}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((obj) => setPosts(obj.posts));

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      {/* {posts?.length} */}
      <div style={{ border: "1px solid black" }}>
        {posts?.map((post) => (
          <div key={post.id}>
            <b>{post.title}</b>
          </div>
        ))}
      </div>
    </>
  );
}
