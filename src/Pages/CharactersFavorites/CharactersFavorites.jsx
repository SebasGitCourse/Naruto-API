import { useState, useEffect } from "react";
import { getFavorites } from "../../FireBase/FuncionsFireStore";
import UserCard from "../../Components/UserCard/UserCard";

const CharactersFavorites = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const favoritos = await getFavorites();
      setCharacters(favoritos);
    };

    fetchCharacters();
  }, []);

  return (
    <div id="div-characters">
      {characters.map((char, index) => (
        <UserCard
          key={index}
          name={char.NOMBRE}
          sex={char.SEXO}
          status={char.ESTADO}
          classification={char.CLASIFICACION}
          occupation={char.OCUPACION}
          images={char.IMAGENES}
        />
      ))}
    </div>
  );
};

export default CharactersFavorites;
