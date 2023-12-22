import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width: 340px)"
  });

  useEffect(() => {
    axios.get("https://recipe-app-0ddk.onrender.com/recipe").then(response => {
      setRecipes(response.data);
    });
  }, []);

  return (
    <>
      <h2
        style={{
          fontSize: "32px",
          "text-align": "center",
          marginTop: "30px",
          marginBottom: "32px"
        }}
      >
        {" "}
        Recipe List{" "}
      </h2>
      <ul
        style={{
          display: "flex",
          "flex-wrap": "wrap",
          gap: "12px",
          marginBottom: "32px",
          "min-height": "80vh"
        }}
      >
        {recipes.map(recipe => (
          <li
            key={recipe._id}
            onClick={async () => {
              const filterData = await recipes.filter(item => {
                return item._id === recipe._id;
              });

              await localStorage.setItem(
                "recipe",
                JSON.stringify(filterData[0])
              );
              setTimeout(()=>{
                navigate("/recipe/" + recipe._id);
              }, 600)
            }}
            style={{
              width: isMobile ? "250px" : "300px",
              border: "1px solid",
              "list-style-type": "none",
              padding: "8px",
              "max-height": "400px"
            }}
          >
            <img src={recipe.image} style={{ width: "100%", height: "50%" }} />
            <h3 style={{ "text-align": "center", marginTop: "10px" }}>
              {" "}
              {recipe.title}
            </h3>
            <p style={{ "text-align": "center", marginTop: "10px" }}>
              {" "}
              {recipe.ingredients}
            </p>
            <p style={{ "text-align": "center", marginTop: "10px" }}>
              {" "}
              {recipe.preparationSteps}
            </p>
            <p style={{ "text-align": "center", marginTop: "10px" }}>
              {" "}
              {recipe?.categories?.map((item, key)=>{
            return <span style={{background:'blue', padding: '8px', borderRadius: '8px', color:'white'}} key={key}>{item}</span>
        })}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
