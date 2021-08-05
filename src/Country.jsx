import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Country = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const allCountry = await fetch(`https://restcountries.eu/rest/v2/all`);
    const allCountryJson = await allCountry.json()
    setData(allCountryJson);
  };
  useEffect(() => {
    loadData();
  }, []);
  return <div>
      <div className="country">All Country List</div>
      <div>
          <ol>
              {
              data.map((item,index) =>
              <li key={index}>
                  <Link to={`/countryDetails/${item.name}`}>{item.name}</Link>
                
              </li>)
              } 
          </ol>
      </div>
  </div>;
};

export default Country;
