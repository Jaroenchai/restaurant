import { useContext } from "react";
import styles from "./PlaceList.module.css";
import {AuthContext} from '../App'

function PlaceList() {
  const {searchText, setsearchText} = useContext(AuthContext);

  return (
   
    <div className={styles.list}>
      <p className={styles.text}>Place List</p>
      <div className={styles.search}>
          {/* <input className={styles.searchtext} type='text'></input> */}
          <input className={styles.searchtext} placeholder='Search' type='text' value={searchText} onChange={(event)=>{setsearchText(event.target.value.toLocaleLowerCase())}}></input>
      </div>
    </div>
  );
}

export default PlaceList;
