import { MouseEventHandler } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store";
import { User } from "../models/user";
import { logoutUser } from "../store/auth/authActions";
import { useDispatch } from "react-redux";

export default function Navbar(): JSX.Element {
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const user: User | null = useSelector((state: RootState) => state.auth.user);
  const login: MouseEventHandler = (): void => {
    navigate("/login");
  };
  const register: MouseEventHandler = (): void => {
    navigate("/register");
  };
  const logout = () => {
    logoutUser(dispatch);
  };
  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Link to="/" style={{ all: "unset" }}>
          <h1>Native recipies</h1>
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="" style={{ textDecoration: "none" }}>
              Search
            </Link>
            <Link to="/random" style={{ textDecoration: "none" }}>
              Random Picks
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        {isAuthenticated ? (
          <>
            <h1> Hello ,{user?.username}</h1>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}
