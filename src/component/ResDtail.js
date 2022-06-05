import { useParams } from "react-router-dom";
import styles from "./ResDtail.module.css";
import json from "../data.json";

function ResDtail() {
  const { postId } = useParams();

  const items = json.filter((json) => {
    return json.id == postId;
  });

  

  console.log(items);

  return (
    <div className={styles.dtail}>
      <img src={items[0].profile_image_url}/>
      
    </div>
  );
}

export default ResDtail;
