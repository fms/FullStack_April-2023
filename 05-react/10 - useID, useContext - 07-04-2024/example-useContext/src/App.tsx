import { useEffect, useState } from "react";
import "./App.css";
import { UserPost } from "./types/UserPost";
import Post from "./components/Post/Post";

function App() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState<UserPost>();

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
      <div>
        <input
          type="number"
          value={postId}
          onChange={(ev) => setPostId(ev.target.valueAsNumber)}
        />
      </div>
      {post && <Post post={post} />}
    </>
  );
}

export default App;
