import React from "react";
import style from './recipe.module.css';

const Recipe= ({title, image, calories, cuisine, ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""></img>
            <ol>
                <b>Ingredients </b>
                <br></br>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p> 
                <b className={style.texts}> Calories </b>
                <br></br>
                {calories}
            </p>
            <p> 
                <b className={style.texts}>  Cuisine </b>
                <br></br>
                {cuisine} 
            </p>
            
        </div>
    );
};

export default Recipe;