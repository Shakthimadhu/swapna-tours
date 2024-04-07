import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/routes/Landing';
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import Service from './components/routes/Service';
import Airporttaxi from './components/routes/Airporttaxi';
import OutstationTaxi from './components/routes/OutstationTaxi';
import Localtaxi from './components/routes/Localtaxi';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/airporttaxi' element={<Airporttaxi />} />
          <Route path='/OutstationTaxi' element={<OutstationTaxi />} />
          <Route path='/Localtaxi' element={<Localtaxi />} />
        </Routes>
        <Navbar/>
        <ScrollToTop/>
      </Router>
    </div>
  );
}

export default App;
