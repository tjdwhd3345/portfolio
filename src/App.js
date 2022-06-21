import './App.css';
import About from './containers/About';
import Contact from './containers/Contact';
import Header from './containers/Header';
import Home from './containers/Home';
import Projects from './containers/Projects';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
