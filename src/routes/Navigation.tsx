import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Navigation: React.FC = () => {
    return (
        <div className="main-layout">
           <Header />
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="home" />
                    <Route element={<HomePage />} path="*" />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Navigation;
