import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App= ()=>{
  const APP_ID="32620d25";
  const APP_KEY="a75a2947942657861d43a2475e0a7015";   //for requesting the data from the recipe API

  const [recipes, setRecipe]= useState([]);
  const [search, setSearch]=useState(" ");
  const [query, setQuery]=useState ("chicken"); //replacing the query with chicken as for the default

    useEffect(()=>{
      getRecipes();
    }, [query]);

      const getRecipes= async()=>{
        const response= await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json(); //use of promise for which we use the await at for the response too. 
        setRecipe (data.hits);
      };

    const updateSearch=e=>{
      setSearch(e.target.value);
      console.log(search);
    };

    const getSearch=e=>{
      e.preventDefault();  //this helps to prevent the input remaining in the search bar to be cleared.
      setQuery(search);
      setSearch(" ");
    };

    return(
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit"> Search Recipes </button>
        </form>
        <div className="recipes">
          {recipes.map(recipe=>(
            <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              image={recipe.recipe.image}  
              calories={recipe.recipe.calories}
              cuisine={recipe.recipe.cuisineType}
              ingredients={recipe.recipe.ingredients}/>
          ))}
        </div>
      </div>
    );
};

export default App;
