import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/carlosgallo0.png" alt="" />

      <div className={styles.commentBox}>
        <div>
          className={styles.commentContent}
          <header>
            <div className={styles.authorAndTime}>
              <strong>Carlos Gallo</strong>
              <time
                title="11 de maio de às 8h13"
                dateTime="2022-05-11 08:12:00"
              >
                publicado ha 1h
              </time>
            </div>
            <button title="Deletar comentário"></button>

            <Trash size={20}></Trash>
          </header>
          <p>Muito bom! parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp>Aplaudir</ThumbsUp> <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
