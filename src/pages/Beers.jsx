import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  async function fetchBeers() {
    try {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchBeers();
  }, []);

  if (!beers) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <div>
      {beers.map((beer) => {
        return (
          <>
            <img src={beer.image_url} alt="" />
            <Link key={beer.name} to={`/beers/${beer._id}`}>
              {beer.name}
            </Link>
            {beer.tagline}
            {beer.contributed_by}
          </>
        );
      })}
    </div>
  );
};

export default Beers;
