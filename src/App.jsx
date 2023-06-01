import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author=" carlos.gallo"
            content="Impedit, nobis omnis dolor tempore dolores repellat excepturi illu"
          ></Post>
          <Post
            author=" carlos.gallo"
            content="Impedit, nobis omnis dolor tempore dolores repellat excepturi illu"
          ></Post>
        </main>
      </div>
    </div>
  );
}
