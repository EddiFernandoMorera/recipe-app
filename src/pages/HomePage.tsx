import { Recipes, Slider } from '../components';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    return (
        <div className={styles.content}>
            <Slider />
            <div className={styles.recipes}>
                <h2>Nuevas Recetas</h2>
                <Recipes />
            </div>
        </div>
    )
}

export default HomePage;
