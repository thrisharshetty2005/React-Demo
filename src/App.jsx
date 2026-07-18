import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./assets/pages/Layout";
import Home from "./assets/pages/Home";
import Blogs from "./assets/pages/Blogs";
import Contact from "./assets/pages/Contact";
import Users from "./assets/pages/Users";
import Login from "./assets/pages/Login"; 

function App() {
  return (
    <>
    <Toaster position="bottom-right" reverseOrder={false} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login />} />
          <Route path="Signin" element={<Login />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;