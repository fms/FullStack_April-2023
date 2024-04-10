import PostContext from "../../contexts/PostContext";
import { UserPost } from "../../types/UserPost";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface PostProps {
  post: UserPost;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <PostContext.Provider value={post}>
        <Header />
        <Body />
        <Footer />
      </PostContext.Provider>
    </>
  );
}
