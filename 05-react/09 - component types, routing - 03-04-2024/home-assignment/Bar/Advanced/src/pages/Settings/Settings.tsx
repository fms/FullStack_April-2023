import { useState } from 'react'
import { useBlocker } from 'react-router-dom'
import BlockWindow from '../BlockWindow/BlockWindow'
import "./settings.scss"

function Settings() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    let blocker = useBlocker(
        ({ currentLocation, nextLocation }) =>
            firstName !== "" || lastName !== "" &&
            currentLocation.pathname !== nextLocation.pathname
    );

    return (
        <>
            <h1>Settings</h1>
            <form className='form'>
                <label>First Name:
                    <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                </label>
                <label>Last Name:
                    <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </label>

                <BlockWindow blocker={blocker} />

            </form>

        </>
    )
}

export default Settings