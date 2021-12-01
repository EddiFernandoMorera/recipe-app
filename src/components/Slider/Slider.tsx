
import styles from './Slider.module.scss';

const Slider: React.FC = () => {
    return (
        <div className={styles.slider}>
            <span className={styles.title}>Recetas</span>
            <span className={styles.content}>para todos</span>
        </div>
    )
}

export default Slider;
