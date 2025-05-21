import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PostItem from './pages/PostItem';
import ItemDetail from './pages/ItemDetail';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostItem />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;