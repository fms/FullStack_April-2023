import { useContext } from "react";
import PostContext from "../../contexts/PostContext";

// interface HeaderProps {
//   post: UserPost;
// }

export default function Header() {
  const { post } = useContext(PostContext);

  return <div>Header: {post?.title}</div>;
}
