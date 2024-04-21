import { useState } from 'react';
import { Link, useBlocker } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Settings.scss'

function Settings() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  let blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      (!(firstName?.trim() === "" && lastName?.trim() === "") || (firstName?.trim() === "" || lastName?.trim() === "")) &&
      currentLocation.pathname !== nextLocation.pathname
  );

  return (
    <>
      <div className='MainDiv'>
        <div className='MainDiv__Navigation'>
          <h3>Settings</h3>
          <Link to="/">Home</Link>
        </div>
        <form name='myForm'>
          <label>First Name:</label><br />
          <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
          <br />
          <label>Last Name:</label><br />
          <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} /><br />
          <input type='submit' value='Submit' />

          {blocker.state === "blocked" ? (
            <div className='Prompt'>
              <p>Leaving would result in data loss</p>
              <button onClick={() => blocker.proceed()}>
                I understand - continue navigating to home
              </button>
              <button onClick={() => blocker.reset()}>
                No, go back - stay on the settings page
              </button>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default Settings;
