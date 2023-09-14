import { MouseEventHandler } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
export default function Navbar(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const login: MouseEventHandler = (): void => {
    navigate("/login");
  };
  const register: MouseEventHandler = (): void => {
    navigate("/register");
  };

  return (
    <nav>
      <Link to="/" style={{ all: "unset" }}>
        <h1>Native recipies</h1>
      </Link>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
      </div>
    </nav>
  );
}
