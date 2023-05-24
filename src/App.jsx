import { Post } from "./components/Post";
import { Header } from "./components/Header";

import "./global.css";

export function App() {
  return (
    <>
      <Header></Header>
      <h1>Hello</h1>
      <Post
        author=" carlos.gallo"
        content="Impedit, nobis omnis dolor tempore dolores repellat excepturi illum ipsa asperiores amet perferendis dicta eaque libero ipsam! Consectetur"
      ></Post>
    </>
  );
}
