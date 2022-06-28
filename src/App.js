import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import UploadPic from "./pages/uploadPhotos";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element ={<UploadPic />} />
      </Routes>
    </BrowserRouter>
  );

  }

export default App;
