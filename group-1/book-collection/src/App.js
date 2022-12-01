import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Book Collection</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ul>
      </nav>
      <AppRouter />
    </div>
  );
}

export default App;
