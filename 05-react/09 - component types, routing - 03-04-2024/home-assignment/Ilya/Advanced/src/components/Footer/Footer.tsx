import { useContext } from "react";
import PostContext from "../../contexts/PostContext";

export default function Footer() {
  const post = useContext(PostContext);

  return (
    <div>Footer: {post && post.tags?.map((tag) => `#${tag}`).join(", ")}</div>
  );
}
