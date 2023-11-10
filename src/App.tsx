import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/auth';
import { Feed } from './pages/Feed';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import Login from './pages/login';

function App() {
  return (
    <AuthContextProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </AuthContextProvider>
    );
}

export default App;
