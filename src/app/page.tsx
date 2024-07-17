import Image from "next/image";
import styles from "./page.module.css";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.avatar}>
        <figure>
          <Image
            src="/profile.jpg"
            alt="Profile picture of Fahad Munir"
            loading="lazy"
            blurDataURL="data:..."
            placeholder="blur"
            width={160}
            height={160}
          />
          <figcaption>Fahad Munir</figcaption>
        </figure>
      </div>
      <h1 className={styles.heading}>
        Hey. I&apos;m{" "}
        <strong>
          Fahad Munir &ndash;{" "}
          <a
            href="https://linkedin.com/in/fmunirdev/"
            title="Fahad Munir's LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fmunirdev
          </a>{" "}
        </strong>
        👋
      </h1>
      <div className={styles.description}>
        <p>I&apos;m a software developer based in Lahore, Pakistan. 🇵🇰</p>
        <p>
          I have over five years of professional experience developing web
          applications, distributed backend systems, and data solutions across
          diverse tech industries. 🌎
        </p>
        <p>
          I&apos;ve worked all over the stack, including backend, frontend,
          DevOps, popular cloud platforms, and scientific computing. 🤹
        </p>
        <p>
          I like to build things with JavaScript/TypeScript, Node.js, Python,
          Django, FastAPI, SQL and NoSQL databases, PostgreSQL, MongoDB,
          DynamoDB, Agile, TDD, Git, Docker, Kubernetes, NGINX, AWS, Serverless,
          modern frontend, and backend frameworks. 🤖
        </p>
        <p>
          I&apos;m currently dedicating a high percentage of my time to design
          and develop scalable software solutions tailored to business needs and
          requirements. Additionally, I assist a limited number of teams and
          organizations as an <strong>external consultant</strong>. If you would
          like to my help with your team and product, feel free to{" "}
          <strong>contact me</strong>. 🤓
        </p>
        <p>
          Feel free to explore my achievements and see how I can contribute to
          your team.{" "}
          <a
            href="https://drive.google.com/open?id=1TcqwEnQSHhEGN8Ma1lpS-Wbz712l9_mv"
            title="Fahad Munir's Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume 📄
          </a>
        </p>
      </div>
      <div className={styles.row}>
        <a
          href="https://linkedin.com/in/fmunirdev/"
          title="@fmunirdev on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" />
        </a>
        <a
          href="mailto:fmunirdev@gmail.com"
          title="Email address"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="email" />
        </a>
        <a
          href="https://github.com/fmunirdev/"
          title="@fmunirdev on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" />
        </a>
        <a
          href="https://twitter.com/fmunirdev/"
          title="@fmunirdev on Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="twitter" />
        </a>
      </div>
    </main>
  );
}
