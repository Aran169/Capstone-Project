import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/Header/Header";
import About from "../src/About/About"; // Import the About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' element={<About />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
