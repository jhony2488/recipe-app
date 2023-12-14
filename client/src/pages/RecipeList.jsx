import { useState, useEffect } from "react";
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/recipe").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <>
      <h2> Recipe List </h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h3> {recipe.title}</h3>
            <img src={recipe.image} />
            <p> {recipe.ingredients}</p>
            <p> {recipe.preparationSteps}</p>
            <p> {recipe.categories}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
