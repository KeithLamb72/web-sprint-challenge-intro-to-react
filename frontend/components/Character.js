import React, { useState } from 'react'

function Character({ name, homeworld, gender, height, eye_color }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => setShowHomeworld(!showHomeworld);

  return (
    <div onClick={toggleHomeworld}>
      <h3>{name}</h3>
      {showHomeworld && <p>Homeworld: {homeworld}</p>}
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Eye Color: {eye_color}</p>
    </div>
  )
}

export default Character
