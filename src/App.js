import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AdminPage from './Components/AdminPage';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Project from './Components/Project';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Login from './Components/Login';//As warranty
import NotFound from './Components/NotFound';
import KitchenViewer from './Components/KitchenViewer1';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warranty" element={<Login />} /> {/* As : warranty */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project/:id" element={<KitchenViewer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;