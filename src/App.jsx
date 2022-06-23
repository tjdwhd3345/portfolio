import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='projects' element={<Projects />} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
