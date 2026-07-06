import {Tag, RecipeCard} from "../../../../components";
import "./RecipeSection.css";

export type TRecipe = {
    id: number;
    image: string;
    name: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    difficulty: string;
    servings: number;
};

type TRecipeSectionProps = {
    recipes: TRecipe[];
};

export const RecipeSection = ({ recipes }: TRecipeSectionProps ) => {
    return (
        <section className="recipes-section">
            <div className="recipes-header">
                <Tag>RECIPES</Tag>
                <h2 className="recipes-title">
                    EMBARK ON A <br /> JOURNEY
                </h2>
                <p className="recipes-description">
                    With our diverse collection of recipes we have something to
                    <br /> satisfy every palate.
                </p>
            </div>
            <div className="recipes-list-container">
                <div className="recipes-grid">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            image={recipe.image}
                            name={recipe.name}
                            prepTimeMinutes={recipe.prepTimeMinutes}
                            cookTimeMinutes={recipe.cookTimeMinutes}
                            difficulty={recipe.difficulty}
                            servings={recipe.servings}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};