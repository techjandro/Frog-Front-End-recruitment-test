import { AnchorHTMLAttributes } from "react";
import styles from "./NavLink.module.css";

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className={styles.navLink}>
      {children}
    </a>
  );
}
