import React, { useEffect, useState } from "react";
import Navbar from "./componentes/Navbar";
import Personajes from "./componentes/Personajes";
import Pagination from "./componentes/pagination";

// Fetch recibe el enlace de la api con la informacion
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Nosotros de es url recibimos una respuesta la cual debemos convertir en JSON

function App() {
  const [characters, setCharacters] = useState([]); //va a guardar los personajes
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    const fetchCharacters = (url) => {};
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results); //guardamos en useState lo que nos da como respuesta la api
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onRetroceder = () => {
    fetchCharacters(info.prev);
  };

  const onAvanzar = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onRetroceder={onRetroceder}
          onAvanzar={onAvanzar}
        />
        <Personajes characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onRetroceder={onRetroceder}
          onAvanzar={onAvanzar}
        />
        
      </div>
    </>
  );
}

export default App;
