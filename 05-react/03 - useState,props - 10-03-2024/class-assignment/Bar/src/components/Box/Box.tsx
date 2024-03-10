import "./box.scss"

interface Box {
    handleClick: (className: string) => void
}

const Box = ({ handleClick }: Box) => {
    return (
        <>
            <div onClick={() => handleClick("blueBox")} className="blueBox"></div>
            <div onClick={() => handleClick("purpleBox")} className="purpleBox"></div>
            <div onClick={() => handleClick("yellowBox")} className="yellowBox"></div>
        </>
    )
}

export default Box