import NavBar2 from "../src/barra/NavBar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./paginas/Login";
import Info from "./paginas/Info";
import Profile from "./paginas/Profile";
import "./App.css";

function App() {
  return (
    <>
      <h1>-----</h1>
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/info" element={<Info />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
