import React from "react";
import "./Style.css";

const Place = () => {
  return (
    <div className='main-div'>
      <div className="container">
        <div className="row">
          <div className="col">District</div>
          <div className="col">
            <input type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">Place</div>
          <div className="col">
            <input type="text" />
          </div>
        </div>
        <div className="row">
            <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Place;