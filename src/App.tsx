import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurEdge from './pages/OurEdge';
import PartnerPortal from './pages/PartnerPortal';
import DealerAssets from './pages/DealerAssets';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-mesh"></div>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-edge" element={<OurEdge />} />
            <Route path="/partner" element={<PartnerPortal />} />
            <Route path="/assets" element={<DealerAssets />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
