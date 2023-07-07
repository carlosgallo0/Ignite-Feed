import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/carlosgallo0.png"
            alt=""
          />

          <div className={styles.authorInfo}>
            <strong> Carlos Gallo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio de às 8h13" dateTime="2022-05-11 08:12:00">
          publicado ha 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Oi gente, bom dia!</p>
        <p> meu primeiro post XD</p>
        <a href="">#novo projeto</a> <a>#vamoss</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <span>oi</span>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
