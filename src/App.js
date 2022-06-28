import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Historic from "./pages/History";
import Occurrence from "./pages/Occurrence";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" end element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/history" element={<Historic />} />
        <Route path="/occurrence" element={<Occurrence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
