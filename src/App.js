import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
