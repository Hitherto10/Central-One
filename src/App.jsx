import './index.css'
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import {About} from "./pages/About.jsx";
import {Services} from "./pages/Services.jsx";
import {Products} from "./pages/Products.jsx";

function App() {
    return (
        <div className={` w-full h-full m-0 `}>
            <Header />
            <Routes >
                <Route path={`/`} element={<Home />}/>
                <Route path={`/about`} element={<About />}/>
                <Route path={`/services`} element={<Services />}/>
                <Route path={`/products`} element={<Products />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App;
