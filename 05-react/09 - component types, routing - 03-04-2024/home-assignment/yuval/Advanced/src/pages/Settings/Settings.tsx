import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import Confirm from "../../components/Confirm/Confirm";
import "../App.css";

export default function Settings() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    function goHome(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        ev.preventDefault();
        if(!firstName && !lastName) {
            navigate("/");
        }
        else {
            setShowConfirmation(true);
        }
    }

    function handleChange(ev: ChangeEvent<HTMLInputElement>, key: "first" | "last") {
        if(key === "first") {
            setFirstName(ev.target.value);
        }
        else if(key === "last") {
            setLastName(ev.target.value);
        }
    }

    return (
        <>
            <form>
                <div style={{ display: 'flex', gap: "5px" }}>
                    <label htmlFor="first">First Name: </label>
                    <input name="first" type="text" onChange={(ev) => handleChange(ev, "first")} />
                    <label htmlFor="last">Last Name: </label>
                    <input name="last" type="text" onChange={(ev) => handleChange(ev, "last")} />
                </div>
                <br/>
                <button onClick={goHome}>Home</button>
            </form>
            {showConfirmation && (
                <Confirm
                    onConfirm={() => navigate("/")}
                    onCancel={() => setShowConfirmation(false)}
                    />
            )}
        </>
    )
}