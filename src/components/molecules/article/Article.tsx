import { ReactNode } from "react";
import styles from "./Article.module.css";

interface ArticleProps {
  title: string;
  description: string;
  footerComponent?: ReactNode;
}

export default function Article({
  title,
  description,
  footerComponent,
}: ArticleProps) {
  return (
    <article className={styles.article}>
      <h1 className={styles.article__title}>{title}</h1>
      <p className={styles.article__description}>{description}</p>
      {footerComponent && (
        <footer className={styles.article__footer}>{footerComponent}</footer>
      )}
    </article>
  );
}
