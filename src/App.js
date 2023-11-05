import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Feed } from './pages/Feed';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
