
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Download from './Pages/Download';
import Experience from './Pages/Experience';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/download' element={<Download/>}/>
    <Route exact path='/experience' element={<Experience/>}/>
    <Route exact path='/skills' element={<Skill/>}/>
    <Route exact path='/projects' element={<Project/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
