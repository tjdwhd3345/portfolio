import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './containers/About';
import Contact from './containers/Contact';
import Header from './containers/Header';
import Home from './containers/Home';
import Projects from './containers/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
