import json from "../data.json";
import "./dataMap.css";
import { useContext } from 'react'
import {AuthContext} from '../App'
import { Link } from "react-router-dom";

function Data() {
  const {searchText,setsearchText } = useContext(AuthContext);
  
  
  const filterItem = json.filter( (json)=>{
    return json.name.toLocaleLowerCase().includes(searchText)
  })
  const items = filterItem.map((item, index) => {
      return (
        
        <div className="content" key={index}>
          <div className="name-res">
            <img className="img-bk" src={item.profile_image_url} />
            <div>
              <Link className="text" to={`/${item.id}`}>{item.name}</Link>
              <div>
                {item.operation_time[0].time_open}{" "}
                {item.operation_time[0].time_close}
              </div>
            </div>
            <p className="rating">★{item.rating}</p>
          </div>
          <div className="img-detail">
          
            <img className="img-food border-left" src={item.images[0]} />
            <img className="img-food" src={item.images[1]} />
            <img className="img-food border-right" src={item.images[2]} />
          </div>
        </div>
      );
    })
  

  return <div className="grid">{items}</div>;
}

export default Data;
