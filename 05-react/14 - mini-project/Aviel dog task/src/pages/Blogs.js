import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <>
      <main>
        <section className="blog-content">
          <section className="blog-section">
            <BlogCard />
          </section>
        </section>

        <section className="footer-section">
          <Footer />
        </section>
      </main>
    </>
  );
}
