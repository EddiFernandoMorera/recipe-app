import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.recipe}>Recipe</span>
                <span className={styles.app}>App</span>
            </div>
            <nav className={styles.nav}>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Vegetarianos</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Platos Principales</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Tortas</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Comida Rápida</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Menú Niños</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Sopas</NavLink>

            </nav>
        </header>
    )
}

export default Header
