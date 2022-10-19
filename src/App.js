import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {

  function routeList() {
    if (localStorage.getItem('token')) {
      return  <Routes>
      <Route path="" element={<Home />} />
      </Routes>
    } else {
      return  <Routes>
      <Route path="" element={<Login />} />
      </Routes>
    }
  }
  return (
    <>
      {routeList()}
    </>
  );
}

export default App;
