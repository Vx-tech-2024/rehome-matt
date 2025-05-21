import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sell from './pages/Sell';
import ItemDetail from './pages/ItemDetail';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sell/:id" element={<Layout><Sell /></Layout>} />
        <Route path="/item/:id" element={<Layout><ItemDetail /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
