import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Eyeframe from './Components/Eyeframe';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Ids from './Components/Ids';
import Mobile from './Components/Mobile';
import Navigationbar from './Components/Navigationbar';
import Nnabippml from './Components/Nnabippml';
import Nnabiwarehouse from './Components/Nnabiwarehouse';
import Projects from './Components/Projects';
import Refri from './Components/Refri';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/education' element={<Education></Education>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/nnabippml' element={<Nnabippml></Nnabippml>}></Route>
        <Route path='/nnabiwarehouse' element={<Nnabiwarehouse></Nnabiwarehouse>}></Route>
        <Route path='/ids' element={<Ids></Ids>}></Route>
        <Route path='/mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/refri' element={<Refri></Refri>}></Route>
        <Route path='/eframe' element={<Eyeframe></Eyeframe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
