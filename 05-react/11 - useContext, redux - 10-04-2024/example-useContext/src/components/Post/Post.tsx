import PostContext from "../../contexts/PostContext";
import { UserPost } from "../../types/UserPost";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface PostProps {
  post: UserPost;
  nextPost: () => void;
}

// export default function Post({ post, nextPost }: PostProps) {
export default function Post() {
  return (
    <>
      {/* <PostContext.Provider value={{ post, nextPost }}> */}
      <Header />
      <Body />
      <Footer />
      {/* </PostContext.Provider> */}
    </>
  );
}
