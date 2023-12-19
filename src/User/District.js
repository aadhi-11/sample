import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Style.css";

const District = () => {
  const [district, setDistrict] = useState("");
  const [showdistrict, setShowDistrict] = useState("");



  const ClickButton = () => {
    setShowDistrict(district);
  };










  return (
    <>
      <div className="main-div">
        <div className="container">
          <div className="row">
            <div className="col">District</div>
            <div className="col">
              <input
                type="text"
                onChange={(event) => setDistrict(event.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <button className="btn" onClick={ClickButton}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {showdistrict}
    </>
  );
};

export default District;
