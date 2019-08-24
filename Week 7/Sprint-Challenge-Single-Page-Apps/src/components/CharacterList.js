import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          console.log(res.data.results);
          setData(res.data.results);
          localStorage.setItem("characters", JSON.stringify(res.data.results));
        })
        .catch(err => console.log("Error message", err));
    };

    fetch();
  }, []);
  console.log(JSON.parse(localStorage.getItem("characters")));

  return (
    <section className="character-list grid-view">
      {data.length ? (
        data.map((char, i) => <CharacterCard info={char} key={i} />)
      ) : (
        <h4 text-align="center">Loading...</h4>
      )}
    </section>
  );
}
