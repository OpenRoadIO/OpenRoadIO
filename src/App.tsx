import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Beauty from './pages/Beauty';
import Supplements from './pages/Supplements';
import About from './pages/About';
import Contact from './pages/Contact';
import Models from './pages/Models';
import Rachel from './pages/models/Rachel';
import Inna from './pages/models/Inna';
import Gigi from './pages/models/Gigi';
import GTMVariableMapper from './pages/GTMVariableMapper';
import GTMDataPrivacy from './GTMDataPrivacy';
import GTMDataPrivacy from "./pages/privacy";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// Import your new landing page
import GTMVariableMapperLanding from './pages/GTMVariableMapper'; 

// Create a wrapper component to handle the conditional logic
const AppContent = () => {
  const location = useLocation();
  
  // Define the exact path of your new landing page
  // Change '/gtm-mapper' to whatever URL path you are actually using!
  const isLandingPage = location.pathname === '/gtm-mapper';

  return (
    <>
      {/* Only show Header if it is NOT the landing page */}
      {!isLandingPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Your extension landing page route */}
        <Route path="/gtm-mapper" element={<GTMVariableMapperLanding />} />
      </Routes>

      {/* Only show Footer if it is NOT the landing page */}
      {!isLandingPage && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/rachel-inna" element={<Rachel />} />
            <Route path="/models/gigi" element={<Gigi />} />
            <Route path="/GTMVariableMapper" element={<GTMVariableMapper />} />
            <Route path="/GTMVariableMapper/privacy" element={<GTMDataPrivacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
