import { Tag, RecipeCard } from "../../../../components";
import "./RecipeSection.css";
import type { RecipeType } from "../../../../types";

type TRecipeSectionProps = {
    recipes: RecipeType[];
};

export const RecipeSection = ({ recipes }: TRecipeSectionProps) => {
    return (
        <section className="recipes-section">
            <div className="recipes-section__header">
                <Tag>RECIPES</Tag>
                <h2 className="recipes-section__title">
                    EMBARK ON A <br /> JOURNEY
                </h2>
                <p className="recipes-section__description">
                    With our diverse collection of recipes we have something to
                    <br /> satisfy every palate.
                </p>
            </div>

            <div className="recipes-section__list">
                <div className="recipes-section__grid">
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