import React from 'react';

import './styles.scss';

export default function Card(props) {

  return (
    <>
      <section className="card">
        <div className="img-car">
          <img src={props.data.Image} alt="foto do veículo" />
        </div>
        <div className="details">
          <div className="vehicle-header">
            <h3 className="vehicle-title">{`${props.data.Make} ${props.data.Model}`}</h3>
            <h4 className="vehicle-version">{props.data.Version}</h4>
            <h4 className="vehicle-year">{props.data.YearModel}</h4>
          </div>
          <div className="vehicle-price">
            <h1>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL', maximumSignificantDigits: 5 }).format(parseFloat(props.data.Price))}</h1>
            <h4>{`${props.data.KM}Km`}</h4>
          </div>
        </div>
      </section>
    </>
  );
}

