
import { CarrotsSVG, FastFoodSVG, KidsSvg, PieSvg, ServiceSVG, WaterSVG } from '../../constants/icons';
import styles from './Slider.module.scss';

const Slider: React.FC = () => {
    return (
        <div className={styles.slider}>
            <span className={styles.title}>Recetas</span>
            <span className={styles.content}>para todos</span>
            <div className={styles.menu}>
                <div className={styles.card}>
                    <CarrotsSVG />
                    <span>Vegetarianos</span>
                </div>
                <div className={styles.card}>
                    <ServiceSVG />
                    <span>Principales</span>
                </div>
                <div className={styles.card}>
                    <PieSvg />
                    <span>Tortas</span>
                </div>
                <div className={styles.card}>
                    <FastFoodSVG />
                    <span>Rápida</span>
                </div>
                <div className={styles.card}>
                    <KidsSvg />
                    <span>Menú Niños</span>
                </div>
                <div className={styles.card}>
                    <WaterSVG />
                    <span>Sopas</span>
                </div>
            </div>
        </div>
    )
}

export default Slider;
