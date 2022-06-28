import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Historic from "./pages/Historic";
import Occurrance from "./pages/Occurrance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Historic" element={<Historic />} />
        <Route path="/Occurrance" element={<Occurrance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
