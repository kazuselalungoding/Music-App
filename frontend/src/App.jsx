import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './pages/About';
import Category from './pages/Category';
import Music from './pages/Music';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;