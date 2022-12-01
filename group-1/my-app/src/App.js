import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AboutName from "./components/AboutName";
import AboutBook from "./components/AboutBook";
import AppRouter from "./Routes";
import AboutDetail from "./components/AboutDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Belajar ReactJS Router</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/program">Program</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        {/* Path: about/name */}
        <Route path="about" element={<About />}>
          <Route path="name" element={<AboutName />} />
          <Route path="book" element={<AboutBook />} />
          <Route path=":number" element={<AboutDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
