import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Project from "./pages/Project"
import './App.css'


function App() {
 
  return (
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/project/:id" element={<Project />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App
