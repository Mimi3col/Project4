import React, { useState } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
const API_URL = `https://api.thecatapi.com/v1/`;


function App() {

  const [catCard, setCatCard] = useState({
    imageUrl:"",
    catName:"",
    catOrigin:"",
    description:""
  })

  const [banned, setBanned] = useState({
    catName:"Please select a Name to ban",
    catOrigin:"Please Select an Origin to ban"
  })


  const [clicked, setClicked] = useState(0)



function getCatImages() {
  const url = `${API_URL}images/search?has_breeds=1`;

  fetch(url, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
  .then(res=>res.json())
  .then(data=>{(data[0].breeds[0].name === banned.catName || data[0].breeds[0].origin === banned.catOrigin)? getCatImages():
    setCatCard({
      imageUrl: data[0].url,
      catName: data[0].breeds[0].name,
      catOrigin: data[0].breeds[0].origin,
      description: data[0].breeds[0].description
    });
    })
}

function checkBan(name,origin){
    console.log(name === banned.catName)
    console.log(origin === banned.catOrigin)
    if(origin === banned.catOrigin || name === banned.catName){
      
      getCatImages()
    }

} 
  return (
    <div className="App">
      <h1 className="Title">Random Cat Images and Information</h1> <br></br>
      <div className="CardContainer">
        <div className="card">
          <img className="catImage" src={catCard.imageUrl}></img>
          <div className="info">
            Type of cat:
            <button
              onClick={() =>
                setBanned({
                  catName: catCard.catName,
                  catOrigin: banned.catOrigin,
                })
              }>
              {catCard.catName}
            </button>
            <span>
              <a style={{ marginLeft: "3rem" }}></a>
            </span>
            Origin of a cat
            <button
              onClick={() =>
                setBanned({
                  catOrigin: catCard.catOrigin,
                  catName: banned.catName,
                })
              }>
              {catCard.catOrigin}
            </button>
          </div>
          <p className="info"> {catCard.description} </p>
          <button onClick={getCatImages}>Click for new image</button>
        </div>
        <br></br>
        <div className="card">
          <h1>Bans List</h1>
          <br></br>
          <h2>{banned.catName}</h2>
          <br></br>
          <h2>{banned.catOrigin}</h2>
          <button className='clearbans' onClick={() => setBanned({ catName: null, catOrigin: null })}>
            Clear all Bans
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
