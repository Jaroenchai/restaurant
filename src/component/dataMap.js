import json from "../data.json";
import "./dataMap.css";

function Data() {
  const items = (
    json.map((item, index) => {
      return (
        <div className="content" key={index}>
          <div className="name-res">
            <img className="img-bk" src={item.profile_image_url} />
            <div className="text">
              {item.name}
              <div>
                {item.operation_time[0].time_open}{" "}
                {item.operation_time[0].time_close}
              </div>
            </div>
            <p className="rating">★{item.rating}</p>
          </div>
          <div className="img-detail">
          <img src='../image/jang.jpg' />
            <img className="img-food border-left" src={item.images[0]} />
            <img className="img-food" src={item.images[1]} />
            <img className="img-food border-right" src={item.images[2]} />
          </div>
        </div>
      );
    })
  );

  return <div className="grid">{items}</div>;
}

export default Data;
