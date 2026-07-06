import './RecipeCard.css';
import {Button} from "../Button";

type TRecipeCardProps = {
    image: string;
    name: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    difficulty: string;
    servings: number;
};

export const RecipeCard = ({ image, name, prepTimeMinutes,
                               cookTimeMinutes, difficulty, servings}: TRecipeCardProps) => {
    const totalTime = prepTimeMinutes + cookTimeMinutes;
    return (
        <div className="recipe-card">
            <img src={image} alt={name} className="recipe-card__image" />
            <div className="recipe-card__content">
                <h3 className="recipe-card__title">{name}</h3>
                <div className="recipe-card__footer">
                        <span className="recipe-card__meta">
                            {totalTime > 59 ? Math.floor(totalTime/60) + " Hour": totalTime + " Min"} - {difficulty.toUpperCase()} PREP - {servings} SERVES
                        </span>
                    <Button variant="empty">VIEW RECIPE</Button>
                </div>
            </div>
        </div>
    );
};