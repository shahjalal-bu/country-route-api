import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const loadDetails = async (id) => {
    const allCountry = await fetch(
      `https://restcountries.eu/rest/v2/name/${id}`
    );
    if(allCountry){
      const allCountryJson = await allCountry.json();
      setDetails(allCountryJson);
    }
    
  };
  useEffect(() => {
    loadDetails(id);
  }, [id]);

  return <div>
  
      {
      details.map((item,index) => 
          <ul key={index}>
           <strong>
              <div className="country">{item.name}</div>
              <li>Country Name : {item.name}</li>
              <li>Native Name : {item.nativeName}</li>
              <li>Capital : {item.capital}</li>
              <li>Currencies : {item.currencies[0].name}[{item.currencies[0].symbol}] </li>
              <li>Population : {item.population}</li>
              <li>Timezones : {item.timezones[0]}</li>
              <li>Borders :
                {(item.borders).map((item,index) => <span key={index}>{item}</span>)}
              </li>
           </strong>
          </ul>
  )
      }

  </div>;
};

export default CountryDetails;
