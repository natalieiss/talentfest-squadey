import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Historic from "./pages/Historic";
import Occurrance from "./pages/Occurrance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" end element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/occurrance" element={<Occurrance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
