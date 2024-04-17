import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { UserPost } from "./types/UserPost";
import Post from "./components/Post/Post";
import PostContext from "./contexts/PostContext";

function App() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState<UserPost>({});

  const nextPost = useCallback(() => {
    setPostId((prev) => prev + 1);
  }, [postId]);

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`);
      const result = await response.json();
      setPost(result);
    }

    getPost();
  }, [postId]);

  return (
    <>
      <PostContext.Provider value={{ post, nextPost }}>
        <div>
          <input
            type="number"
            value={postId}
            onChange={(ev) => {
              ev.target.valueAsNumber >= 1 &&
                setPostId(ev.target.valueAsNumber);
            }}
          />
        </div>
        {post && (
          // <Post post={post} nextPost={() => setPostId((prev) => prev + 1)} />
          // <Post post={post} nextPost={nextPost} />
          <Post />
        )}
      </PostContext.Provider>
    </>
  );
}

export default App;
