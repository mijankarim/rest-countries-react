import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { nameId } = useParams();

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${nameId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, [nameId]);

  return (
    <div>
      {country.map( c => (
        <div key={c.numericCode}>
          <img src={c.flag} width="200" alt={c.name} />
          <p>Name: {c.name}</p>
          <p>Capital: {c.capital}</p>
          <p>Region: {c.region}</p>
          <p>Population: {c.population}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
