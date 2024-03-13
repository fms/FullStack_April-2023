import React from 'react';
import './box1.scss';

interface Box1Props {
    color: string;
}

const Box1: React.FC<Box1Props> = ({ color }) => {
    return <div className="main-box" style={{ backgroundColor: color }}>Main Box</div>;
};

export default Box1;