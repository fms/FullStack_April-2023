import { createContext } from "react";
import { UserPost } from "../types/UserPost";

const PostContext = createContext<UserPost>({});

export default PostContext;
