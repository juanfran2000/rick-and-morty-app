import React from "react";

const Personajes = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p> Ubicacion: {item.location.name}</p>
              <p> Especie: {item.species}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personajes;
