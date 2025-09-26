import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Mission from './pages/Mission'
import Equipment from './pages/Equipment'
import Challenge from './pages/Challenge'
import Contact from './pages/Contact'
import WasteManagement from './pages/WasteManagement'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-mars-white">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/waste-management" element={<WasteManagement />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
