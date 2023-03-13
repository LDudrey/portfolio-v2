import React from "react";
import PageContainer from "./components/PageContainer"
import Footer from "./components/elements/Footer"
import "./styles/App.css"


function App() {
  return (
    <div id="Appcontain" className="d-flex row vh-100">
      <PageContainer />
      <Footer />
    </div>
  );
}

export default App;