import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchPeople = axios.get('http://localhost:9009/api/people');
    const fetchPlanets = axios.get('http://localhost:9009/api/planets');

    Promise.all([fetchPeople, fetchPlanets])
      .then(([peopleResponse, planetsResponse]) => {
        const { data: people } = peopleResponse;
        const { data: planets } = planetsResponse;

        const planetsMap = planets.reduce((map, planet) => {
          map[planet.id] = planet;
          return map;
        }, {});

        const charactersWithPlanets = people.map(character => ({
          ...character,
          homeworld: planetsMap[character.homeworld]
        }));

        setCharacters(charactersWithPlanets);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map(character => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
