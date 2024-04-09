import React, { ReactElement, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classnames from "./HiddenNavLink.module.scss";

interface HiddenNavLinkProps {
  to: string;
  children: ReactNode;
}
export default function HiddenNavLink({ to, children }: HiddenNavLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? classnames.pending : isActive ? classnames.active : ""
      }
    >
      {children}
    </NavLink>
  );
}
