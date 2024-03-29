import { useState, useEffect } from 'react';
import './App.css';
import { db } from "./firebase.config"
import { collection, onSnapshot, doc,  addDoc, deleteDoc} from 'firebase/firestore'

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
          //deleteRecipe : false,
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
        recipe.viewing = !recipe.viewing
      } else {
        recipe.viewing = false
      }
    })

    setRecipes(recipesClone)
  }
  
  const handleSubmit = e => {
    e.preventDefault()

    if (//Check if all fields are filled out
      !form.title ||
      !form.desc ||
      !form.ingredients ||
      !form.steps
    ) {
      alert("Veuillez remplir tous les champs!")
      return
    }
    addDoc(recipesCollectionRef, form)//Adding a recipe
    
    setForm({ //We set back our form to its default state
      title : "", desc : "", ingredients : [], steps : []
    })

    setPopupActive(false)
  }

  const handleIngredient = (e, i) => { //This is what's going to be done when we add an ingredient
    const ingredientsClone = [...form.ingredients]

    ingredientsClone[i] = e.target.value  //Adding the ingredient to the list of ingredients
    setForm({
      ...form, //Current form
      ingredients : ingredientsClone //and only the table of ingredients changes 
    })
  }
  const handleStep = (e, i) => { //This is what's going to be done when we add a step
    const stepsClone = [...form.steps]
    
    stepsClone[i] = e.target.value
    setForm({
      ...form, //Current form
      steps : stepsClone //and only the table of ingredients changes 
    })
  }

  const handleIngredientCount = () => {
    setForm({
      ...form,
      ingredients : [...form.ingredients, ""]
    })
  }

  const handleStepCount = () => {
    setForm({
      ...form,
      steps : [...form.steps, ""]
    })
  }

  const removeRecipe = id => {
    deleteDoc(doc(db, "recipes", id))
  }

  return (
    <div className="App">
      <h1>Mes  Recettes</h1>

      <div className='recipes'>
        { recipes.map((recipe, i) => (
          <div className="recipe" key={recipe.id}>
            <h3>{ recipe.title }</h3>
            <div className='underline'></div>
            <em><span className='desc'>Description :</span></em>
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
              <button onClick={() => handleView(recipe.id)} className='see_more'>Voir {recipe.viewing ? 'moins' : 'plus' }</button>
              <button onClick={() => removeRecipe(recipe.id) } className='remove'> Supprimer</button> 
            </div>
          </div>
        ))}
      </div> 
      { popupActive && <div className='popup'>
            <div className='popup-inner'>
              <h2 className="addRecipe">Ajouter une nouvelle recette</h2>

              <form onSubmit={handleSubmit}>
                 
                <div className='form-group'>
                  <label>Title</label>
                  <input 
                    type="text" 
                    value={form.title} 
                    onChange={e => setForm({...form, title : e.target.value})} 
                  />
                </div>

                <div className='form-group'>
                  <label>Description</label>
                  <textarea 
                    type="text" 
                    value={form.desc} 
                    onChange={e => setForm({...form, desc : e.target.value})} 
                  />
                </div>

                <div className='form-group'>
                  <label>Ingrédients</label>
                  {
                    form.ingredients.map((ingredient, i) => (
                      <input 
                        type="text"
                        key={i} 
                        value={ingredient} 
                        onChange={e => handleIngredient(e, i)} 
                      />
                    ))
                  }
                  <button 
                    type='button' 
                    onClick={handleIngredientCount}
                  > Ajouter Ingrédient</button>
                </div>

                <div className='form-group'>
                  <label>Etapes de préparation</label>
                  {
                    form.steps.map((step, i) => (
                      <textarea 
                        type="text"
                        key={i} 
                        value={step} 
                        onChange={e => handleStep(e, i)} 
                      />
                    ))
                  }
                  <button 
                    type='button' 
                    onClick={handleStepCount}
                  > Ajouter cette etape</button>
                </div>

                <div className='buttons'>
                  <button type="submit">Ok</button>
                  <button 
                    type='button' 
                    class="remove" 
                    onClick={() => setPopupActive(false)}
                  >
                      Fermer
                  </button>
                </div>
              </form>
            </div>
         </div>
      }
      {/* initially, popupActive is set to "false" for it to be true, ----> */}
      <button onClick={() => setPopupActive(!popupActive)}>Ajouter une recette</button>
 
    </div>
  );
}

export default App;
