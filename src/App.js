
import './App.css';
import RegisterPage from './component/JSXfiles/Register';
import Login from './component/JSXfiles/Login';
import TermPage from './component/JSXfiles/Terms';
import ResetPassword from './component/JSXfiles/ResetPassword';
import AccessDeniedPage from './component/JSXfiles/Accessdenial';
import VerificationPage from './component/JSXfiles/Authentication';
import ImageGenerationApp from './component/JSXfiles/Image';
import ChatPage from './component/JSXfiles/Chat';
import {BrowserRouter,Route,Routes} from "react-router-dom";
//AIzaSyAqLQ39-x0HZ3Puaa3_ufXZHpTW2BdUrtQ
import axios from "axios";


function App() {
  // this is for the server side only
  axios.defaults.baseURL = 'http://localhost:5000/';
  axios.defaults.withCredentials = true;  
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<ChatPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/terms" element={<TermPage/>}/>
      <Route path="/imageschat" element={<ImageGenerationApp/>}/>
      <Route path="/verfications" element={<VerificationPage/>}/>
    <Route path="resetpassword" element={<ResetPassword/>}/>
    <Route path="/accessdenied" element={<AccessDeniedPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
