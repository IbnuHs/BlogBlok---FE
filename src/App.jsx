import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { HomePages } from "./pages/HomePages";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ArticlesPages from "./pages/ArticlesPages";
import ProfilePages from "./pages/ProfilePages";

function App() {
  return (
    <div className="font-inter">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/article" element={<ArticlesPages />} />
          <Route path="/profile" element={<ProfilePages />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
