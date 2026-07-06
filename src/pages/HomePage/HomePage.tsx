import Kitchen from "../../assets/Image/MainPicture.png";
import "./HomePage.css";
import {Button, Filter, Tag, RecipeCard} from "../../components";
import Buter from "../../assets/Image/Buter.svg";
import Soup from "../../assets/Image/Soup.svg";
import Burger from "../../assets/Image/Burger.svg";
import Cookies from "../../assets/Image/Cookies.svg";
import Bread from "../../assets/Image/Bread.svg";
import {Recipes} from "../../constants";

const HeroSection = () => {
    return (
        <section className="hero">
            <img className="hero__image" src={Kitchen} alt="Cooking" />
            <div className="hero__overlay" />
            <div className="hero__content">
                <h1> UNLEASH CULINARY <br /> EXCELLENCE </h1>
                <p>
                    Explore a world of flavors, discover <br />
                    handcrafted recipes, and let the aroma of <br />
                    our passion for cooking fill your kitchen
                </p>
                <Button variant="recipes">EXPLORE RECIPES</Button>
            </div>
        </section>
    );
};

const ExploreSection = () => {
        return (
            <section className="palette-section">
                <div className="palette-container">
                    <div className="palette-content">
                        <Tag>EXPLORE</Tag>
                        <h2 className="palette-title">OUR DIVERSE PALETTE</h2>
                        <p className="palette-description">
                            If you are a breakfast enthusiast, a connoisseur of savory delights, or
                            on the lookout for irresistible desserts, our curated selection has
                            something to satisfy every palate.
                        </p>
                    </div>
                    <div className="palette-filters">
                        <Filter icon={Buter} label="BREAKFAST" />
                        <Filter icon={Soup} label="LUNCH" />
                        <Filter icon={Burger} label="DINNER" />
                        <Filter icon={Cookies} label="DESSERT" />
                        <Filter icon={Bread} label="QUICK BITE!" />
                    </div>
                </div>
            </section>
    );
};

const RecipeSection = () => {
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
                    {Recipes.map((recipe) => (
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

export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ExploreSection />
            <RecipeSection />
        </>
    );
};