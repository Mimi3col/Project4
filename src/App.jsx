import React, { useState } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
const API_URL = `https://api.thecatapi.com/v1/`;


function App() {
  const [currentImage, setCurrentImage] = useState("")
  const [catName, setCatName] = useState("")
  const [catOrgin, setOrgin] = useState("")
  const [description, setDiscription] = useState("")

function getCatImages() {
  const url = `${API_URL}images/search?has_breeds=1`;

  fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
  .then(res=>res.json())
  .then(data=>{
    setCurrentImage(data[0].url),
      setCatName(data[0].breeds[0].name),
      setOrgin(data[0].breeds[0].origin),
      setDiscription(data[0].breeds[0].description);
  })
}


  return (
    <div className="App">
      <h1>Random Cat Images and Information</h1>
      <div className="card">
        <img className="catImage" src={currentImage}></img>
        <p> Type of cat:  {catName}</p>  <p> Origin of cat:   {catOrgin}</p>
        <p> {description}  </p>
        <button onClick={getCatImages}>Click for new image</button>
      </div>
    </div>
  );
}

export default App
