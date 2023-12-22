import { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import UserService from "../services/UserService";

export default function Dashboard() {
  const { setUser } = useAuthContext();

  const [recipes, setRecipes] = useState([]);
  const [recipesFilter, setRecipesFilter] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width: 340px)"
  });

  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 900px)"
  });

  const getRecipes = async () => {
    const idUser = localStorage.getItem("AuthUserId");
    await axios
      .get("https://recipe-app-0ddk.onrender.com/recipe")
      .then(response => {
        const filterResult = response.data.filter(
          item => item.author === idUser
        );
        setRecipes(filterResult);

        const itemsCategories = filterResult.flatMap(
          objeto => objeto.categories
        );

        const itemsVerify = new Set(itemsCategories);

        setCategories([...itemsVerify]);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    if (category != "") {
      setRecipesFilter(
        recipes.filter(item => {
          return item.categories.includes(category);
        })
      );
    } else {
      setRecipesFilter([]);
      getRecipes();
    }
  }, [category]);

  useEffect(() => {
    UserService.verify()
      .then(resp => setUser(resp.data))
      .catch(err => console.error(err));
  }, [setUser]);

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
        My Recipes{" "}
      </h2>
      <Container className="py-5">
        <Form.Select
          aria-label="Default select example"
          onChange={event => setCategory(event.target.value)}
          style={{ width: isMobileOrTablet ? "95%" : "40%" }}
        >
          <option value="">Open this filter recipes for category</option>
          {categories &&
            categories?.map((item, key) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              );
            })}
        </Form.Select>

        <ul
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            gap: "12px",
            marginBottom: "32px",
            marginTop: "32px",
            "min-height": "80vh"
          }}
        >
          {recipesFilter.length > 0
            ? recipesFilter.map(recipe => (
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
                    setTimeout(() => {
                      navigate("/recipe/" + recipe._id);
                    }, 600);
                  }}
                  style={{
                    width: isMobile ? "250px" : "300px",
                    border: "1px solid",
                    "list-style-type": "none",
                    padding: "8px",
                    "max-height": "400px"
                  }}
                >
                  <img
                    src={recipe.image}
                    style={{ width: "100%", height: "50%" }}
                  />
                  <h3 style={{ "text-align": "center", marginTop: "10px" }}>
                    {" "}
                    {recipe.title}
                  </h3>
                  <p style={{ "text-align": "center", marginTop: "10px" }}>
                    {" "}
                    {recipe?.categories?.map((item, key) => {
                      return (
                        <span
                          style={{
                       
                            padding: "8px",
                            borderRadius: "8px",
                      
                          }}
                          key={key}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </p>
                </li>
              ))
            : recipes.map(recipe => (
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
                    setTimeout(() => {
                      navigate("/recipe/" + recipe._id);
                    }, 600);
                  }}
                  style={{
                    width: isMobile ? "250px" : "300px",
                    border: "1px solid",
                    "list-style-type": "none",
                    padding: "8px",
                    "max-height": "400px"
                  }}
                >
                  <img
                    src={recipe.image}
                    style={{ width: "100%", height: "50%" }}
                  />
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
                    {recipe?.categories?.map((item, key) => {
                      return (
                        <span
                          style={{
                           
                            padding: "8px",
                            borderRadius: "8px",
                         
                          }}
                          key={key}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </p>
                </li>
              ))}
        </ul>
      </Container>
    </>
  );
}
