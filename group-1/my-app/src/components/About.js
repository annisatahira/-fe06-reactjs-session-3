import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="App">
      <h1>About Component</h1>
      <nav>
        <ul>
          <li>
            <Link to="name">About Name</Link>
          </li>
          <li>
            <Link to="book">About Book</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
