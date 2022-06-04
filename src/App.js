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
  //We need to setup our reference to our collection --->
  const recipesCollectionRef = collection(db, "recipes")
  //We gonna use useEffect to call this(the abaove line) once --->
  useEffect(() => {
    onSnapshot(recipesCollectionRef, snapshot => {
      setRecipes(snapshot.docs.map(doc => {
        return {
          id : doc.id, //we'll need this id
          viewing : false,
          ...doc.data() //this is same as doing :
          //title : doc.data().title, and so on ...
        }
      }))
    })
  }, [])
  
  const handleView = id => {
    const recipesClone = [...recipes]

    recipesClone.forEach(recipe => {
      if(recipe.id === id) {
        recipe.viewing = true
      } else {
        recipe.viewing = false
      }
    })

    setRecipes(recipesClone)
  }

  return (
    <div className="App">
      <h1>Mes  Recettes</h1> 
      <button>Ajouter une recette</button>

      <div className='recipes'>
        { recipes.map((recipe, i) => (
          <div className="recipe" key={recipe.id}>
            <h3>{ recipe.title }</h3>
            <p dangerouslySetInnerHTML={{ __html : recipe.desc }}></p>
            
            { recipe.viewing && <div> 
              <h4>Ingrédiendts</h4>
              <ul>
                { recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ ingredient }</li>
                ))}
              </ul>
              <h4>Etapes de préparation</h4>
              <ol>
              { recipe.steps.map((step, i) => (
                  <li key={i}>{ step }</li>
              ))}
              </ol>
              </div> 
            }
            <div className='buttons'>  
              <button onClick={() => handleView(recipe.id)}>View {recipe.viewing ? 'less' : 'more'}</button>
              <button className='remove'> Remove</button> 
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default App;
