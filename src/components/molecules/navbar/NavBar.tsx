import Button from "../../atoms/button/Button";
import NavLink from "../../atoms/navLink/NavLink";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__links}>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/services">Services</NavLink>
        </li>
        <li>
          <NavLink href="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink href="/how-it-works">How it works</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
        <li>
          <Button variant="default">Try for free</Button>
        </li>
      </ul>
    </nav>
  );
}
