import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../../Components/UserCard/UserCard";
import "./HomePage.css";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  const fetchAllCharacters = async () => {
    try {
      const allCharacters = [];
      const totalPages = 1;

      for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(
          `https://dattebayo-api.onrender.com/characters?page=${page}`
        );
        const fetchedCharacters = response.data.characters;

        fetchedCharacters.forEach((character) => {
          allCharacters.push(character);
        });
      }

      setCharacters(allCharacters);
    } catch (err) {
      alert("Error al llamar a la API: " + err.message);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <div className="HomePage">
      <div id="div-characters">
        {characters.map((char) => (
          <UserCard
            key={char.id}
            name={char.name}
            sex={char.personal?.sex}
            status={char.personal?.status}
            classification={char.personal?.classification}
            occupation={char.personal?.occupation}
            images={char.images}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
