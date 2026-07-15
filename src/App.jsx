import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./assets/pages/Layout";
import Home from "./assets/pages/Home";
import Blogs from "./assets/pages/Blogs";
import Contact from "./assets/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;