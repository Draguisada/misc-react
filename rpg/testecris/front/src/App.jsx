import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import View from './view/View';
import Controll from './view/Controll';

function App() {
  // window.location.href = 'view';
  return (
    <Router>

      <Routes>
        <Route 
        path="/controll"
        element={<Controll />} />

        <Route path="/" element={<h2><Link to={'/view'}>View</Link> | <Link to={'/controll'}>Controll</Link></h2>} />

        <Route
          path="/view"
          element={ <View /> }
        />
      </Routes> 

    </Router>
  )
}

export default App
