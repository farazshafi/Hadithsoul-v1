import { Route, Router, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomePage from "./pages/HomePage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import CollectionsPage from "./pages/CollectionsPage";
import AboutImamPage from "./pages/AboutImamPage";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/collections/:name?' element={<CollectionsPage />} />
        <Route path='/collections/:name?/about' element={<AboutImamPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
