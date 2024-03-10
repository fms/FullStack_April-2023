import "./App.css";
import Box from "./components/Box/Box";
import { articles } from "./data/articles";

function App() {
  return (
    <>
      {articles.map((article) => (
        <Box key={article.id} title={article.title}>
          {article.text}
        </Box>
      ))}

      {/* <button onClick={() => (articles[1].text = "new text")}>
        Change text
      </button> */}
      {/* <Box title="My title">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          voluptates nihil officiis. Ad beatae atque amet ullam illum officia
          nobis, reiciendis, provident alias nemo, corporis perspiciatis enim
          cumque quo repellendus?
        </p>
      </Box>
      <Box title="another one">
        <p>Hello world</p>
      </Box>
      <Box>This one doesn't have a title</Box> */}
    </>
  );
}

export default App;
