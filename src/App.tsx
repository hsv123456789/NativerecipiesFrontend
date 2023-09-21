import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "./store";
import Register from "./pages/register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Dashboard from "./pages/dashboard";
import { checkExistingUser } from "./store/auth/authActions";
import RandomPage from "./pages/randomPage";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    checkExistingUser(dispatch);
  }, [dispatch]);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Register />
            }
          />
          <Route
            path="/random"
            element={
              isAuthenticated ? <RandomPage /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
