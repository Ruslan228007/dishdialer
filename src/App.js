import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import './css/reset.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cooks from './pages/Cooks'


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cooks' element={<Cooks/>}/>
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
