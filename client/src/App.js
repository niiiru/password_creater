import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
