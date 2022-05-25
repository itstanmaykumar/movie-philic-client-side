import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Blogs from './component/Blogs/Blogs';
import AddProducts from './component/Dashboard/AddProducts';
import Dashboard from './component/Dashboard/Dashboard';
import ManageProducts from './component/Dashboard/ManageProducts';
import MyProducts from './component/Dashboard/MyProducts';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ProductDetails from './component/Products/ProductDetails';
import Products from './component/Products/Products';
import Signin from './component/Signin/Signin';
import Signup from './component/Signup/Signup';
import 'react-toastify/dist/ReactToastify.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/posters" element={<Products></Products>}></Route>
        <Route path="/posters/:posterId" element={
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        }></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        }></Route>
        <Route path="/manageproducts" element={
          <PrivateRoute>
            <ManageProducts></ManageProducts>
          </PrivateRoute>
        }></Route>
        <Route path="/addproducts" element={
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        }></Route>
        <Route path="/myproducts" element={
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        }></Route>
        <Route path="/info" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
