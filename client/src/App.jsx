import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HeaderNavbar from "./components/Nav/HeaderNavbar";
import FooterNavbar from "./components/Nav/FooterNavbar";
function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
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
