import styles from './RecipeCards.module.scss';
import PropTypes from 'prop-types';
import { ChefSvg, FavoriteSvg, PortionSvg, StartSvg, TimeSvg } from '../../constants/icons';

interface RecipeCardsProps {
    image: string;
    title: string;
    subTitle: string;
}

const RecipeCards: React.FC<RecipeCardsProps> = ({image, title, subTitle}) => {

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img src={image} alt="" className={`${title === 'Sweet' ? styles.cherry : ''}`} />
                <div className={styles.info}>
                    <div className={styles.title}>
                        <span className={styles.title1}>{title}</span>
                        <span className={styles.title2}>{subTitle}</span>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.start}>
                            <StartSvg />
                        </div>
                        <div className={styles.count}>
                            <span>5.0</span>
                        </div>
                        <div className={styles.favorite}>
                            <FavoriteSvg />
                        </div>

                    </div>
                </div>
                <div className={styles.description}>
                    <PortionSvg className={styles.portion} />
                    <div>
                        <h3>Tamaño de la porción</h3>
                        <span>4 raciones</span>
                    </div>

                    <TimeSvg className={styles.time} />
                    <div>
                        <h3>Tiempo de preparación</h3>
                        <span>10 minutos</span>
                    </div>

                    <ChefSvg className={styles.chef} />
                    <div>
                        <h3>Dificultad</h3>
                        <span>fácil</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

RecipeCards.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

export default RecipeCards;
