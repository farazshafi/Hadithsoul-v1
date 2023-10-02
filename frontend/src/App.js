import { Route, Router, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomePage from "./pages/HomePage";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (

    <div className="App">
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>

  );
}

export default App;
