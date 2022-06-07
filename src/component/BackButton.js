import { Link } from "react-router-dom";
import styles from "./BackButton.module.css";

function BackButtton() {
  return (
    <div class={styles.container}>
      <div class={styles.center}>
        <Link to="/">
          <button class={styles.btn}>
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <h3 className={styles.text}>Back</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BackButtton;
