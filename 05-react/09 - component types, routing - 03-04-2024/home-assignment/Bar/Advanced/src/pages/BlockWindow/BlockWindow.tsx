import { Blocker } from "react-router-dom";
import "./BlockWindow.scss"

interface BlockProps {
    blocker: Blocker;
}

function BlockWindow({ blocker }: BlockProps) {

    return (
        <>
            {blocker.state === "blocked" ? (
                <div className="blocker">
                    <p>Leaving may result in data loss of your fields</p>
                    <div className="blockerButtons">
                        <button onClick={() => blocker.proceed()}>
                            Proceed
                        </button>
                        <button onClick={() => blocker.reset()}>
                            Cancel
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default BlockWindow