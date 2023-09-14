import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
