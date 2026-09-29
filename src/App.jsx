import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/collection"
          element={<Collection />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;