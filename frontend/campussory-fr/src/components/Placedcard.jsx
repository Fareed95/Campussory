import React from 'react';
import '/src/Styles/PlacedCards.css';

function PlacedCard({ img, name, dis, comp, amt }) {
  return (
    <div className="placed-card">
      <img src={img} alt={name} className="placed-card__image" />
      <div className="placed-card__info">
        <h2 className="placed-card__name">{name}</h2>
        <p className="placed-card__dis">{dis}</p>
        <p className="placed-card__comp">{comp}</p>
        <p className="placed-card__amt">{amt}</p>
      </div>
    </div>
  );
}

export default PlacedCard;
