import { Link } from "react-router-dom";

const blogContent = [
  {
    logo: "1",
    text: "Why is it important to run ?",
    src: "https://www.shvoong.co.il/columns/%D7%90%D7%96-%D7%9C%D7%9E%D7%94-%D7%9B%D7%93%D7%90%D7%99-%D7%9C%D7%9A-%D7%9C%D7%A8%D7%95%D7%A5-%D7%94%D7%A0%D7%94-13-%D7%98%D7%99%D7%A4%D7%99%D7%9D-%D7%A9%D7%99%D7%A9%D7%9B%D7%A0%D7%A2%D7%95-%D7%90/"
  },

  {
    logo: "2",
    text: "Does running help the heart ?",
    src: "https://www.hadassah.org.il/physicalactivitycardioeffect/"
  },

  {
    logo: "3",
    text: "Running tracking aging",
    src: "https://www.e-med.co.il/indications/pain/2005/09/21/375457/"
  },

  {
    logo: "4",
    text: "Running develops muscle",
    src: "https://www.shvoong.co.il/%D7%94%D7%90%D7%9D-%D7%A8%D7%99%D7%A6%D7%94-%D7%91%D7%90%D7%9E%D7%AA-%D7%91%D7%95%D7%A0%D7%94-%D7%A9%D7%A8%D7%99%D7%A8/154108/"
  },
  {
    logo: "5",
    text: "Running affects the skin of the face",
    src: "https://www.mako.co.il/news-tip12/body_and_spirit/Article-d991a9a461f2881027.htm"
  },
  {
    logo: "6",
    text: "Running affects the mood",
    src: "http://www.shvoong.co.il/sections/%D7%90%D7%99%D7%9E%D7%95%D7%9F-%D7%95%D7%9B%D7%95%D7%A9%D7%A8/%D7%94%D7%A7%D7%A9%D7%A8-%D7%91%D7%99%D7%9F-%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%AA-%D7%A1%D7%A4%D7%95%D7%A8%D7%98%D7%99%D7%91%D7%99%D7%AA-%D7%95%D7%9E%D7%A6%D7%91-%D7%A8%D7%95%D7%97-%D7%98%D7%95%D7%91/"
  }
];

export default function BlogCard() {
  const el = blogContent.map((item) => {
    return (
      <Link className="card" key={item.id} to={item.src} target="_blank">
        <span>{item.logo}</span>
        <p>{item.text}</p>
      </Link>
    );
  });

  return (
    <>
      <main>
        <section className="blog-section">{el}</section>
      </main>
    </>
  );
}
