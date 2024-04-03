import "./App.css";
import Controlled from "./components/Controlled/Controlled";
import UncontrolledPassword from "./components/UncontrolledPassword/UncontrolledPassword";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import ControlledPassword from "./components/ControlledPassword/ControlledPassword";

function App() {
  return (
    <>
      <Controlled />
      <Uncontrolled />
      <ControlledPassword />
      <UncontrolledPassword />
    </>
  );
}

export default App;
