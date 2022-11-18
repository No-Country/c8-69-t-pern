import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <main className="container">
        <div className="row mt-2">
          <Card />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
