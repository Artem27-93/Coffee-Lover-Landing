import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container" style={{width:"80%"}}>
        <div className="section-title">
          <h2>Фільтр-кава</h2>
          <p>
            — це тиха розмова смаку, де кожна крапля має значення.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img className="service-image" src={d.src} height={250} style={{borderRadius:"5px"}} alt="NO IMAGE :("/>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
