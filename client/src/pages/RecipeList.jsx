import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const isMobile = useMediaQuery({
    query: '(max-width: 340px)'
    })

  useEffect(() => {
    axios.get("http://localhost:4000/recipe").then(response => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <>
      <h2 style={{ fontSize: '32px','text-align': 'center', marginTop: '30px',marginBottom: '32px' }}> Recipe List </h2>
      <ul style={{ display: "flex", "flex-wrap": "wrap", gap: '12px', marginBottom: '32px', 'min-height': '80vh' }} >
        {recipes.map(recipe => (
          <li  key={recipe._id} style={{ width: isMobile ? "250px" : "300px", border: "1px solid", 'list-style-type': 'none' , padding: '8px' , 'max-height':'400px' }}>
            <img src={recipe.image} style={{ width:'100%', height: '50%' }} />
            <h3 style={{ 'text-align': 'center', marginTop: '10px' }}> {recipe.title}</h3>
            <p style={{ 'text-align': 'center', marginTop: '10px' }}> {recipe.ingredients}</p>
            <p style={{ 'text-align': 'center', marginTop: '10px' }}> {recipe.preparationSteps}</p>
            <p style={{ 'text-align': 'center', marginTop: '10px' }}> {recipe.categories}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
