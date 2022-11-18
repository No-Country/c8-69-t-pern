import React from "react";

const Card = () => {
  return (
    <div className="col-md-3 col-sm-6 col-6 mt-4">
      <div className="card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bluebird-2c2a8.appspot.com/o/angular.jpg?alt=media&token=6278d898-4ce1-4115-8636-204a49a67f28"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            HTML, CSS3, JavaScript para Principiantes
          </h5>
          <p className="card-text"></p>
          <p>Juan Pedro</p>
          <p>
            ★★★★★ <span>$15000</span>
          </p>
          <a href="#" className="btn btn-primary">
            Agregar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
