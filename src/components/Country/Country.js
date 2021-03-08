import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { name, capital, region, population, flag } = props.country;

  return (
    <div className="country">
        <img src={flag} alt={name}/>
      <p>
        Name: {name}<br/>
        Capital: {capital}<br/>
        Region: {region}<br/>
        Population: {population}<br/>
      </p>
      <Link to={`/${name}`}>
        <button>Details</button>
      </Link>
      
    </div>
  );
};

export default Country;
