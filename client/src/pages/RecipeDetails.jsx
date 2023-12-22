import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useMediaQuery } from "react-responsive";

function RecipeList() {
  const [recipe, setRecipe] = useState([]);

  const isMobile = useMediaQuery({
    query: "(max-width: 800px)"
  });

  useEffect(() => {
    const recipe = localStorage.getItem("recipe");

    setRecipe(JSON.parse(recipe));
  }, []);

  return (
    <div style={{ width: '100%',display:"flex", flexDirection: "column", alignItems: 'center', paddingBottom: '30px' }}>
        <img src={recipe.image} style={{ width: isMobile ? "80%" : "50%", height: "50%" }} />
      <h2
        style={{
          fontSize: "32px",
          "text-align": "center",
          marginTop: "30px",
          marginBottom: "32px"
        }}
      >
        {" "}
        {recipe.title}{" "}
      </h2>
      <h3 style={{ "text-align": "center", marginTop: "10px" }}> </h3>
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
      <p style={{ "text-align": "center", marginTop: "10px" }}>
        Date Created: {format(recipe?.createdAt ? new Date(recipe?.createdAt) : new Date(), "dd/MM/yyyy HH:mm:ss")}
      </p>
    </div>
  );
}

export default RecipeList;
