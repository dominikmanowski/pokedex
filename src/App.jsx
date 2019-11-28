import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Deck from "./components/Deck/Deck";
import { URL } from "./constants";
import "./App.css";


function App() {
  const [pokemons, setPokemons] = useState([]);

  const query = "cards";

  useEffect(() => {
    axios.get(`${URL}${query}`).then(res => {
      setPokemons(res.data.cards);
    });
  }, []);

  return (
    <>
      <Header />
      <Deck pokemons={pokemons} />
    </>
  );
}

export default App;
