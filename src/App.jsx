import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default App;
