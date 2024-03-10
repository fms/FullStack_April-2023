import './cursor.css'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';


const cursor = () => {
    const [mousePsition, setMousePsition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePsition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])

    const variants ={
        default:{
            x: mousePsition.x,
            y: mousePsition.y
        }
    }
    return (
        <motion.div 
        className='cursor'
        variants={variants}
        animate="default"
        />
    )
}

export default cursor