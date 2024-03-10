import { useEffect, useState } from "react";
import styles from "./Follower.module.scss";

export default function Follower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      className={styles.follower}
      style={{
        left:
          Math.min(
            position.x,
            document.querySelector("html")!.clientWidth - 15
          ) + 5,
        top:
          Math.min(
            position.y,
            document.querySelector("html")!.clientHeight - 15
          ) + 5,
      }}
    />
  );
}
