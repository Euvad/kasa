import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import About from './pages/about/about';
import Footer from './components/footer/footer';
import Accomodation from './pages/accomodation/accomodation'
function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/accomodation/:id' element={<Accomodation/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
