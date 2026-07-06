import clsx from "clsx";
import "./Button.css";

type TButtonProps = {
    variant: "filled" | "unfilled";
    children: React.ReactNode;
};

export const Button = ({variant, children,}: TButtonProps) => {
    return (
        <button
            className={clsx("button", {
                ButtonView: variant === "unfilled",
                ButtonRecipes: variant === "filled", })}
        > {children} </button>
    );
};