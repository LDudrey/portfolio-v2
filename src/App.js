import React from "react";
import PageContainer from "./components/PageContainer";
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';

function App() {
  return (
    <div>
      <Header />
      <PageContainer />;
      <Footer />
    </div>
  );
}

export default App;