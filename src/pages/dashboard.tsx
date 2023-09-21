import "./dashboard.css";
import { FcSearch } from "react-icons/fc";
function Dashboard() {
  return (
    <div className="main">
      <div>
        <h1>Dashboard is working </h1>
        <div className="search_div">
          <FcSearch size={20} />
          <input
            type="text"
            className="userText"
            placeholder="Enter something to search"
          />
        </div>
      </div>

      <div className="results"></div>
    </div>
  );
}

export default Dashboard;
