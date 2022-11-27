import axios from "axios";
import React from "react";
import { useState } from "react";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [fisrtBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setcontributedBy] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleTagline = (event) => {
    setTagline(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleFirstBrewed = (event) => {
    setFirstBrewed(event.target.value);
  };
  const handleBrewersTips = (event) => {
    setBrewersTips(event.target.value);
  };
  const handleAttenuationLevel = (event) => {
    setAttenuationLevel(event.target.value);
  };
  const handleContributedBy = (event) => {
    setcontributedBy(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBeer = {
        name,
        tagline,
        description,
        fisrtBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy,
      };
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={handleName} />
      </div>
      <div>
        <label>Tagline</label>
        <input type="text" value={tagline} onChange={handleTagline} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={handleDescription} />
      </div>
      <div>
        <label>First Brewed</label>
        <input type="text" value={fisrtBrewed} onChange={handleFirstBrewed} />
      </div>
      <div>
        <label>Brewers Tips</label>
        <input type="text" value={brewersTips} onChange={handleBrewersTips} />
      </div>
      <div>
        <label>Attenuation Level</label>
        <input
          type="number"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />
      </div>
      <div>
        <label>Contributed By</label>
        <input
          type="text"
          value={contributedBy}
          onChange={handleContributedBy}
        />
      </div>
      <button type="submit">ADD NEW</button>
    </form>
  );
};

export default NewBeer;
