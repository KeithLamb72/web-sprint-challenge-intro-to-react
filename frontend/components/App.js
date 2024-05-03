import React from 'react'
import axios from 'axios'
import Character from './Character'

// const urlPlanets = 'http://localhost:9009/api/planets'
// const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get('http://localhost:9009/api/people');
      setCharacters(response.data);
    };

    fetchCharacters();
  }, []);
  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
