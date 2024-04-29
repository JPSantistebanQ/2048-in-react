import Head from "next/head";
import Image from "next/image";
import Board from "@/components/board";
import Score from "@/components/score";
import styles from "@/styles/index.module.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Home = () => {
  return (
    <div className={styles.twenty48}>
      <Head>
        <title>Play 2048</title>
        <meta
          name="description"
          content="Fully-functional 2048 game built in NextJS and TypeScript. Including animations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon16.png" />
      </Head>
      <header>
        <h1>2048</h1>
        <Score />
      </header>
      <main>
        <Board />
      </main>
      <div>
        <h2>
          <ThemeSwitcher></ThemeSwitcher> 🚀{" "}
          <span>2048 with React 18 & Next.js</span>
        </h2>
      </div>
      <footer>
        <div className={styles.socials}>
          <a
            href="https://jpsantistebanq.github.io/portfolio/"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="social-github.svg"
              alt="2048-in-react on GitHub"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div>Made with ❤️ by JP</div>
      </footer>
    </div>
  );
};

export default Home;
