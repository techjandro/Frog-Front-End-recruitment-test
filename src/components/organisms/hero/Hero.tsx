import styles from "./Hero.module.css";
import logo from "../../../assets/logo.svg";
import NavBar from "../../molecules/navbar/NavBar";
import Article from "../../molecules/article/Article";
import Button from "../../atoms/button/Button";

import { Theme } from "../../../App";

import heroCoverMobile from "../../../assets/hero-image-mobile.png";
import heroCoverRocket from "../../../assets/hero-image-rocket.png";

interface HeroProps {
  theme: Theme;
}

export default function Hero({ theme }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__container}>
        <header className={styles.hero__header}>
          <div>
            <a href="/" aria-label="Home">
              <img src={logo} alt="Frog logo" className={styles.hero__logo} />
            </a>
          </div>
          <NavBar />
        </header>
        <section className={styles.hero__content}>
          <div className={styles.hero__article}>
            <Article
              title="Helping you sell your products faster"
              description="You can read this text, but it doesn’t matter. It’s concept, not important for your life or life your friends"
              footerComponent={
                <>
                  <Button>Get started</Button>
                  <Button variant="secondary">Learn more</Button>
                </>
              }
            />
          </div>
          <div className={styles.hero__cover}>
            {theme === "theme-one" && (
              <img src={heroCoverMobile} alt="Hero cover" />
            )}
            {theme === "theme-two" && (
              <img src={heroCoverRocket} alt="Hero cover" />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
