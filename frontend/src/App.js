import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import LoginAdmin from './Components/loginPages/LoginAdmin';
import LoginFaculty from './Components/loginPages/LoginFaculty';
import LoginStudent from './Components/loginPages/LoginStudent';
import Signup from './Components/Signup';
import UniqueId from './Components/UniqueId';
import Sidebar from './Components/notices/sidebar';
import Notices from './Components/notices/Notices';
import { AllNotices } from './Components/AllNotices';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/loginAdmin' element={<LoginAdmin></LoginAdmin>} />
        <Route path='/loginFaculty' element={<LoginFaculty></LoginFaculty>} />
        <Route path='/loginStudent' element={<LoginStudent></LoginStudent>} />
        <Route path='/SignUp' element={<Signup></Signup>} />
        <Route path='/notices' element = {<AllNotices></AllNotices>} />

      </Routes>
      
    </>
  );
}

export default App; 
