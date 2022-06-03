import { useState, useEffect } from 'react';
import './App.css';
import { db } from "./firebase.config"
import { collection, onSnapshot } from 'firebase/firestore'

function App() {
const [recipes, setRecipes] = useState([])
const [form, setForm] = useState({
    title : "",
    desc : "",
    ingredients : [],
    steps : []
  })
  const [popupActive, setPopupActive] = useState(false)
  //We need to setup our reference to our collection
  const 

  return (
    <div className="App">
      <h1>Mes  Recettes</h1>  
    </div>
  );
}

export default App;
