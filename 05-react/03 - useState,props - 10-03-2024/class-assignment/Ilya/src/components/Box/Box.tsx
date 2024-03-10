import React, { ReactElement, ReactNode } from "react";
import styles from "./Box.module.scss";

interface BoxProps {
  children: ReactNode;
  title?: string;
}

export default function Box({ title, children }: BoxProps) {
  return (
    <div className={styles.box}>
      {title ? <h1>{title}</h1> : ""}
      <div>{children}</div>
    </div>
  );
}
