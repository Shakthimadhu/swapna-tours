import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/routes/Landing';
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import Service from './components/routes/Service';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Router>
      <Navbar/>
    </div>
  );
}

export default App;
