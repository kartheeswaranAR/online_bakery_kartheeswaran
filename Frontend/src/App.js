import './App.css';
import './Assets/font-awesome/css/font-awesome.min.css'
import Login from './Components/Login/Login';
import LogHeader from './Components/LogHeader/LogHeader';
import Home from './Components/Home/Home'
import Register from './Components/Register/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Brownies from './Components/Brownies/Brownies';
import Fhome from './Fhome';
import AddCart from './Components/AddCart/AddCart'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = '' element={<><Header/><Register/></>}/>
    <Route path = '/login' element={<><Header/><Login/></>}/>
    <Route path = '/home' element={<><LogHeader/><Home/></>}/>
    <Route path = '/brownies' element={<><LogHeader/><Brownies/></>}/>
    <Route path = '/Fhome' element={<><Header/><Fhome/></>}/>
    <Route path = '/addcart' element={<><Header/><AddCart/></>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
