import { useContext } from "react";
import styles from "./PlaceList.module.css";
import {AuthContext} from '../App'

function PlaceList() {
  const {searchText, setsearchText} = useContext(AuthContext);

  return (
   
    <div className={styles.list}>
      <p className={styles.text}>Place&nbsp;List</p>
      <div className={styles.search}>
          {/* <select value={searchText} onChange={(event)=>{setsearchText(event.target.value.toLocaleLowerCase())}}>
            <option value='' selected>All</option>
            <option value="restaurant">Restaurant</option>
            <option value="cafe">Cafe</option>
            <option value="bakery">Bakery</option>
          </select> */}
          <input className={styles.searchtext} placeholder='Search' type='text' value={searchText} onChange={(event)=>{setsearchText(event.target.value.toLocaleLowerCase())}}></input>
      </div>
    </div>
  );
}

export default PlaceList;
