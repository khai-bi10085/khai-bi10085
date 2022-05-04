import React from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Contact from './pages/Contact';
import Create from './pages/Create'
import Knowledge from './pages/Knowledge';
function App() {
  // const [counter, setCounter] = useState(1)

  // const handleIncrease = ()=> {
  //   setCounter(counter+1)
  // }
  return (
    <>

      <Router>
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/knowledge' element={<Knowledge/>} />

          </Routes>
        </Main>


      </Router>
    </>

  );
}

export default App;
