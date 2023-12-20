
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home.js'
import AboutPage from './pages/About.js'
import Holyservices from './pages/Holyservices'
import KidsPage from './pages/Kids'
import Contact from './pages/Contact.js'
import Donate  from './pages/Donate';
import Footer from './components/Footer';

function App() {
  return (
   <>
     <Navbar />
      <Routes>
      <Route  path='/' element={<HomePage />} exact/>
      <Route path='/about'  element={<AboutPage />} exact />
      {/* <Route path='/Holyservices' element={<Holyservices />} exact/>
      <Route path='/Kids' element={<KidsPage />} exact/> */}
      <Route path ='/contact' element={<Contact />} exact/>
      <Route path ='/donate' element={<Donate />} exact/>
    </Routes>
    <Footer />
      
  </>
  );
}

export default App;
