import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyRouters from "./routers/routes";

function App() {
  return (
    <div>
      <Header />
      <MyRouters />
      <Footer />
    </div>
  )
}

export default App;
