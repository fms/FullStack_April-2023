import { useContext } from "react";
import { UserPost } from "../../types/UserPost";
import PostContext from "../../contexts/PostContext";

// interface BodyProps {
//   post: UserPost;
// }

export default function Body() {
  const post = useContext(PostContext);

  return <div>Body: {post && post.body}</div>;
}
