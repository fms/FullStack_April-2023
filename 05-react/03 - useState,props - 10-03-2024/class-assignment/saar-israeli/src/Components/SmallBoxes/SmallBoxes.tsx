import style from './SmallBoxes.module.scss';

interface SmallBoxesProps{
    color:string
    onClick: (color: string) => void;
}

const SmallBoxes: React.FC<SmallBoxesProps> = ({color, onClick}) => {
  return (
<div className={style.smallBox} style={{ backgroundColor: color || 'white' }} onClick={() => onClick(color)}>
</div>)
}

export default SmallBoxes