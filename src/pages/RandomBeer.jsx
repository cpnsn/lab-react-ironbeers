import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);
  const params = useParams();

  async function fetchRandomBeer() {
    try {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeer(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <div>
      <img src={beer.image_url} alt="" />
      {beer.name}
      {beer.tagline}
      {beer.firt_brewed}
      {beer.attenuation_level}
      {beer.description}
      {beer.contributed_by}
    </div>
  );
};

export default RandomBeer;
