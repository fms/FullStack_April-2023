import { useEffect, useState } from "react";
import "./App.css";
import PostPanel from "./components/Post/PostPanel";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import { useDebouncedState } from "@wojtekmaj/react-hooks";

function App() {
  const [id, setId] = useState(1);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useDebouncedState("", 100);

  function updateId() {
    setId((prev) => prev + 1);
  }

  useEffect(() => setQuery(search), [search]);
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <SearchPanel query={query} />
        <SearchPanel query={search} />
      </div>
      <hr />
      <button onClick={updateId}>Get new post {id}</button>
      <PostPanel id={id} />
    </>
  );
}

export default App;
