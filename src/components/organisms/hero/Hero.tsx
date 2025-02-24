import styles from "./Hero.module.css";
import logo from "../../../assets/logo.svg";
import NavBar from "../../molecules/navbar/NavBar";
import Article from "../../molecules/article/Article";
import Button from "../../atoms/button/Button";

export default function Hero() {
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
          <div className={styles.hero__cover} aria-hidden="true" />
        </section>
      </div>
    </div>
  );
}
