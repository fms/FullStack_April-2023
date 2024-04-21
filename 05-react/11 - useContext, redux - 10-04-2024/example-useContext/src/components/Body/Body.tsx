import { useContext } from "react";
import { UserPost } from "../../types/UserPost";
import PostContext from "../../contexts/PostContext";
import Footer from "../Footer/Footer";

// interface BodyProps {
//   post: UserPost;
// }

export default function Body() {
  const { post, nextPost } = useContext(PostContext);

  return (
    <>
      <div>Body: {post && <p onClick={() => nextPost()}>{post.body}</p>}</div>
      <div style={{ border: "solid black 3px" }}>
        An extra footer:
        <Footer />
      </div>
    </>
  );
}
