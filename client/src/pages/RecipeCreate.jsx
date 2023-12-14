import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateRecipe() {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [ingredients, setingredients] = useState("");
  const [preparationSteps, setpreparationSteps] = useState("");
  const [categories, setcategories] = useState("");
  const [image, setimage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/recipe",
        {
          title,
          ingredients,
          preparationSteps,
          categories,
          image,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/recipes");
      });
  };

  return (
    <>
      <h2> Add new Recipe </h2>
      <form onSubmit={handleSubmit}>
        <p>title</p>
        <input
          id="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <p>ingredients</p>
        <input
          id="ingredients"
          value={ingredients}
          onChange={(e) => setingredients(e.target.value)}
        />
        <p>preparationSteps</p>
        <input
          id="preparationSteps"
          value={preparationSteps}
          onChange={(e) => setpreparationSteps(e.target.value)}
        />
        <p>categories</p>
        <input
          id="categories"
          value={categories}
          onChange={(e) => setcategories(e.target.value)}
        />
        <p>image URL</p>
        <input
          id="image"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />
        <button type="submit"> create </button>
      </form>
    </>
  );
}

export default CreateRecipe;
