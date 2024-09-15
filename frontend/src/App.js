import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import LoginAdmin from './Components/loginPages/LoginAdmin';
import LoginFaculty from './Components/loginPages/LoginFaculty';
import LoginStudent from './Components/loginPages/LoginStudent';
import Signup from './Components/Signup';
import AllNotices from './Components/AllNotices';
import ViewNotice from './Components/notices/viewNotics';
import About from './Components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loginAdmin' element={<LoginAdmin />} />
        <Route path='/loginFaculty' element={<LoginFaculty />} />
        <Route path='/loginStudent' element={<LoginStudent />} />
        <Route path='/SignUp' element={<Signup />} />
        <Route path='/notices' element={<AllNotices />} />
        <Route path="/notice/:id" element={<ViewNotice />} />
        <Route path='/about' element={<About />} />  
      </Routes>
    </>
  );
}

export default App;

