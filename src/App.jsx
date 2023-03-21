import React, { useState } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
const API_URL = `https://api.thecatapi.com/v1/`;


function App() {
  const [currentImage, setCurrentImage] = useState("")
  const [id, setId] = useState("")

function getCatImages() {
  const url = `${API_URL}images/search`;

  fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
  .then(res=>res.json())
  .then(data=>setCurrentImage(data[0].url))
  .then(data=>setId(data[0].id))
}




  return (
    <div className='App'>
    <h1>My Cat Images</h1>
      <img className='catImage' src={currentImage}></img>
     <br></br>
    <button onClick={getCatImages}>Click for new image</button>
    </div> 
  )
}

export default App
