import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/home"
import Cart from "./pages/cart"
import Header from "./components/Header/header"
import ProductDetails from "./pages/productDetails"
import NotFound from "./pages/notFound"
import CategoryResults from "./pages/categoryResults"
import Footer from "./components/footer/footer"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"

function App() {
  
  const { pathname } = useLocation();

  const showNavbarAndFooter = !['/login', '/register'].includes(pathname);

  return (
   
      <>
    {showNavbarAndFooter && <Header/>}
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/category/:category" element={<CategoryResults/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    {showNavbarAndFooter && <Footer/>}
   </>   
  )
}

export default App
