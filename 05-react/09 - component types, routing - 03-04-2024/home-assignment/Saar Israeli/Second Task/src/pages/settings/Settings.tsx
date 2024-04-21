import { useState } from "react";
import { useBlocker, useNavigate } from "react-router-dom";
import SettingsBlocker from "../../components/SettingsBlocker/SettingsBlocker";
import style from "./settings.module.scss";

function settings() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handlerBackHome(
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    ev.preventDefault();
    navigate("/");
  }

  let blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      (firstName !== "" || lastName !== "") &&
      currentLocation.pathname !== nextLocation.pathname
  );

  return (
    <>
      <div className={style.settingsWrapper}>
        <form action="">
          <button type="submit" onClick={(ev) => handlerBackHome(ev)}>
            Home
          </button>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </form>
      </div>
        {blocker.state === "blocked" ? (
          <SettingsBlocker blocker={blocker}/>
        ) : null}
    </>
  );
}

export default settings;
