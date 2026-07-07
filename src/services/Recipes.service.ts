export const getAllRecipes = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    return res.json();
}