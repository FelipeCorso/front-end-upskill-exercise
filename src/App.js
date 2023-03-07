import "./App.css";
import Home from "./pages/home";
import Report from "./pages/report";
import Login from "./pages/login";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="report" element={<Report />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
