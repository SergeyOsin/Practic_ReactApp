import clsx from "clsx";
import "./Button.css";

type ButtonProps = {
    variant: "view" | "recipes";
    children: React.ReactNode;
};

export const Button = ({variant, children,}: ButtonProps) => {
    return (
        <button
            className={clsx("button", {
                ButtonView: variant === "view",
                ButtonRecipes: variant === "recipes", })}
        > {children} </button>
    );
};