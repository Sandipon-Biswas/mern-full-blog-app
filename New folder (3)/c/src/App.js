
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import Auth from './components/Auth';
import { Blogs } from './components/Blogs';
import Userblog from './components/Userblog';
import Blogdetails from './components/Blogdetails';
import Addblog from './components/Addblog';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn =useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <BrowserRouter>
    < Header />
    <div>
      <Routes>
        <Route path="/auth" element={ <Auth/> } />
        <Route path="/blogs" element={ <Blogs/> } />
        <Route path="/blogs" element={ <Blogs/> } />
        <Route path="/myBlogs" element={ <Userblog/> } />
        <Route path="/myBlogs/:id" element={ <Blogdetails/> } />
        <Route path="/blogs/add" element={ < Addblog /> } />
        {/* <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/singlepost/:id" element={<SinglePost></SinglePost>} /> */}
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
