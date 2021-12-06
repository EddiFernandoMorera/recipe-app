import { RecipeCards } from '..';
import Ojingeo from '../../assets/image/Ojingeo-muchim-5.png'
import ColaChicken from '../../assets/image/Ojingeo-muchim.png'
import Roasted from '../../assets/image/Ojingeo-muchim-1.png'
import Cherry from '../../assets/image/cherry.png'
import styles from './Recipes.module.scss';

const Recipes: React.FC = () => {
    return (
        <div className={styles.content}>
            <RecipeCards image={Ojingeo} title="Ojingeo" subTitle="Muchim" />
            <RecipeCards image={ColaChicken} title="Cola" subTitle="Chicken" />
            <RecipeCards image={Roasted} title="Roasted" subTitle="Carrot" />
            <RecipeCards image={Cherry} title="Sweet" subTitle="Cherries" />
        </div>
    )
}

export default Recipes;
