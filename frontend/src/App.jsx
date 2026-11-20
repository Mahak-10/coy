import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Matches from "./pages/Matches";
import Home from "./pages/Home";
import Discover from "./pages/Discover";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav>
          <Link to="/">Home</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/matches">Matches</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;