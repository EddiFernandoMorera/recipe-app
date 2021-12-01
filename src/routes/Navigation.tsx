import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components';
import HomePage from '../pages/HomePage';
import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={styles.main}>
                <Header />
                <Routes>
                    <Route element={<HomePage />} path="/home" />
                    <Route element={<HomePage />} path="*" />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Navigation;
