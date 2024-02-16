import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomepageGrid from './components/HomepageGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import WhatsonpageGrid from './components/WhatsonpageGrid';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<HomepageGrid />}></Route>
      <Route exact path='/whatson' element={<WhatsonpageGrid />}></Route>
      <Route exact path='/signup' element={<Signup />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </main>
  )
}

export default App
