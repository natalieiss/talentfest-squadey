import React from "react";
<<<<<<< HEAD
import UploadPhotos from "./pages/uploadPhotos";

function App() {
  return (
    <div>
      <UploadPhotos />
    </div>
  )
};

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 57ca2747ac0a5b0a0d4a15f1458b5855e1eae387

export default App;
