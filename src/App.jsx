import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/home"
import UnderConstruction from "./pages/UnderConstruction"

const App = () => {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-zinc-950 flex flex-col text-zinc-300 overflow-hidden">
          {/* Navbar */}
          <Navbar/>

          {/* Routing */}
          <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/about" element={<UnderConstruction />} /> 
           <Route path="/cars" element={<UnderConstruction />} /> 
           <Route path="/services" element={<UnderConstruction />} /> 
           <Route path="/inventory" element={<UnderConstruction />} /> 
           <Route path="/contact" element={<UnderConstruction />} /> 
           
          </Routes>

          {/* Footer */}
          <Footer/>

        </main>
      </Router>
    </>
  )
}

export default App