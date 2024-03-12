import "./box.scss"

interface Box {
    handleClick: (className: string) => void
}

const Box = ({ handleClick }: Box) => {
    return (
        <>
            <div className="boxContainer">
                <div onClick={() => handleClick("blue")} style={{ backgroundColor: "blue" }} className="box" ></div>
                <div onClick={() => handleClick("purple")} style={{ backgroundColor: "purple" }} className="box" ></div>
                <div onClick={() => handleClick("yellow")} style={{ backgroundColor: "yellow" }} className="box" ></div>
            </div>
        </>
    )
}

export default Box