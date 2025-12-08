import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles["not-found-container"]}>
      <div className={styles["not-found-content"]}>
        <p className={styles["not-found-code"]}>404 ERROR</p>
        <h1 className={styles["not-found-title"]}>Product Not Found?</h1>
        <p className={styles["not-found-message"]}>
          The page you are looking for might have been moved. Explore our latest
          OEM models.
        </p>
        <div className={styles["not-found-action"]}>
          <Link href="/" className={styles["not-found-button"]}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
