import {useEffect, useState} from "react";
import {Loader} from "../../components";
import {getAllRecipes} from "../../services";
import {HeroSection, ExploreSection, RecipeSection} from "./components";
import type{TRecipe} from "./components";


export const HomePage = () => {
    const [recipes, setRecipes] = useState<TRecipe[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAllRecipes()
            .then((data) => setRecipes(data.recipes))
            .finally(() => setLoading(false));
    }, []);
    return (
        <>
            <HeroSection />
            <ExploreSection />
            {(loading)? <Loader /> : <RecipeSection recipes={recipes} />}
        </>
    );
};