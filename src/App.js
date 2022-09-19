import { 
    BrowserRouter as Router, 
    Route,
    Routes
} from "react-router-dom";

import Header from "./components/Header";
import Instagram from "./components/Instagram";
import HomePage from "./pages/HomePage";
import BlogPage from './pages/BlogPage';
import ContactPage from "./pages/ContactHome";
import ShopPage from "./pages/ShopPage";
import Footer from "./components/Footer";

import './libraries/css/bootstrap.min.css';
import './libraries/css/elegant-icons.css';
import './libraries/css/font-awesome.min.css';
import './App.css';


export default function App () {
    return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/shop" element={<ShopPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Instagram />        
        <Footer />
    </Router>
    )
}