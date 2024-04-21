import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigvate = useNavigate();
  function handleClick() {
    navigvate("/about");
  }

  function handleClickWithData() {
    navigvate("/about", { state: { data: "Some extra data" } });
  }

  return (
    <>
      <div>Home sweet home</div>
      <Link to="/about">Go To About</Link>
      <button onClick={handleClick}>Click to About</button>
      <button onClick={handleClickWithData}>Click to About with Data</button>
      <Link to="/user/1">User 1</Link>
      <Link to="/user/2">User 2</Link>
      <Link to="/user/3">User 3</Link>
    </>
  );
}
