import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import RegisterItem from '../src/Pages/Register/RegisterItem/RegisterItem'
import NotFound from '../src/Pages/NotFound/NotFound';
import AuthProvider from '../src/context/AuthProvider'
import AboutItem from './Pages/About/AboutItem/AboutItem';
import ContactItem from './Pages/Contact/ContactItem/ContactItem';
import Donate from './Pages/Home/Caueses/Donate/Donate';
import AllCauses from './Pages/AllCauses/AllCauses';
import LoginItem from './Pages/Login/LoginItem/LoginItem';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<AboutItem/>} />
           <Route path = '/contact' element = { <ContactItem/>} />
            <Route path = '/causes/:id' element ={<Donate/>} />
            <Route path='causes' element={<AllCauses />} />
            <Route path='register' element={<RegisterItem />} />
            <Route path='login' element={<LoginItem />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;