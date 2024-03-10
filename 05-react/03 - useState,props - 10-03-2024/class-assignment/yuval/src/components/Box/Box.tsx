interface BoxProps {
    color: string;
    onClick: () => void;
    clicked: number;
}

function Box ({ color, onClick, clicked }: BoxProps) {
    return (
        <div
            className="box"
            style={{ backgroundColor: color }}
            onClick={onClick}>
            {clicked !== 0 && <span className="click-count">{clicked}</span>}
        </div>
    );
};

export default Box;