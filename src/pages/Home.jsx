import React from "react";
import { Link } from "react-router-dom";
import newBeer from "./../assets/new-beer.png";

const Home = () => {
  return (
    <>
      <div>
        <img src="/beers.png" alt="" />
        <Link to="/beers">All Beers</Link>
      </div>
      <div>
        <img src={newBeer} alt="" />
        <Link to="/random-beer">Random Beer</Link>
      </div>
      <div>
        <img src="/random-beer.png" alt="" />
        <Link to="/new-beer">New Beer</Link>
      </div>
    </>
  );
};

export default Home;
