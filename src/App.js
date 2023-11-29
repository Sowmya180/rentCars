import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Drive from "./components/driver/Driver";
import Find from "./components/find/Find";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Luxury from "./components/luxury/Luxury";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Find />
      <Drive />
      <Luxury />
      <Footer />
    </div>
  );
}
export default App;
