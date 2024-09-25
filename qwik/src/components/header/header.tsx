
import ImgIconTransparent from '../../media/icon-transparent.png?jsx';
import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.container}>
        <div class={styles.logoContainer}>
          <ImgIconTransparent alt="Food App" class={styles.logoImage} />
          <h2 class={styles.logoText}>Food App</h2>
        </div>
        <nav class={styles.nav}>
          <ul class={styles.navList}>
            <li> <a href="/">Home</a></li>
            <li> <a href='/recipes'>Recipes</a></li>
            <li><a href='/upload'>Upload</a></li>
            <li id="profile"><a href="/profile">Profile</a></li>
          
          </ul>
        </nav>
      </div>
    </header>
  );
});
