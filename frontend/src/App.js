import { Route, Router, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomePage from "./pages/HomePage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import CollectionsPage from "./pages/CollectionsPage";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/collections/:name?' element={<CollectionsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
