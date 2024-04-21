import { createContext } from "react";
import { UserPost } from "../types/UserPost";

const PostContext = createContext<{
  post: UserPost;
  nextPost: () => void;
}>({});

export default PostContext;
