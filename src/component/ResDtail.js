import { useParams } from "react-router-dom";
import styles from "./ResDtail.module.css";
import json from "../data.json";

function ResDtail() {
  const { postId } = useParams();

  const items = json.filter((json) => {
    return json.id == postId;
  });

  const openTime = items[0].operation_time.map((time, index) => {
    if (time.time_open == "closed") {
      return (
        <p key={index}>
          {time.day}&nbsp;:&nbsp;{time.time_open}
        </p>
      );
    }

    return (
      <p key={index}>
        {time.day}&nbsp;:&nbsp;{time.time_open}&nbsp;AM&nbsp;-&nbsp;
        {time.time_close}&nbsp;PM
      </p>
    );
  });

  return (
    <div className={styles.dtail}>
      <div className={styles.placeLeft}>
        <img className={styles.mainImg} src={items[0].profile_image_url} />
        <div className={styles.text}>
          <p className={styles.textHead}>{items[0].name}</p>
          <div>
            <p className={styles.star}>★{items[0].rating}</p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.textunder}>
            <p className={styles.textheaddtail}>Address&nbsp;:</p>
            <div className={styles.textDtail}>
              <p>{items[0].address}</p>
            </div>
          </div>
        </div>
        <div className={styles.textunder}>
          <p className={styles.textheaddtail}>Opening&nbsp;Hour&nbsp;:</p>
          <div className={styles.textDtail}>{openTime}</div>
        </div>
      </div>
      <div className={styles.placeRight}>
        <h3>Images</h3>
        <img className={styles.imagesD} src={items[0].images[0]} />
        <img className={styles.imagesD} src={items[0].images[1]} />
        <img className={styles.imagesD} src={items[0].images[2]} />
      </div>
    </div>
  );
}

export default ResDtail;
