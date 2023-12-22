import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import RecipeCreate from "./pages/RecipeCreate";
import RecipeDetails from "./pages/RecipeDetails";
import HeaderNavbar from "./components/Nav/HeaderNavbar";
import FooterNavbar from "./components/Nav/FooterNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/logout", element: <Logout /> },
    { path: "/recipe/:id", element: <RecipeDetails /> },
    { path: "/recipe/create", element: <RecipeCreate /> },
  ];

  return (
    <>
      <HeaderNavbar />
      <Routes>
        {routes.map((e, i) => (
          <Route key={i} path={e.path} element={e.element} />
        ))}
      </Routes>
      <FooterNavbar />
    </>
  );
}

export default App;
