import './App.scss';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Home/Header/header';

function App() {
  return <Router>


      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
}

export default App;
