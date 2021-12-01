import { RecipeCards } from '..';
import styles from './Recipes.module.scss';

const Recipes: React.FC = () => {
    return (
        <div className={styles.content}>
            <RecipeCards />
            <RecipeCards />
            <RecipeCards />
            <RecipeCards />
        </div>
    )
}

export default Recipes;
