import clsx from "clsx";
import "./Button.css";

type TButtonProps = {
    variant: "filled" | "empty";
    children: React.ReactNode;
};

export const Button = ({variant, children,}: TButtonProps) => {
    return (
        <button
            className={clsx("buttonCustom", {
                buttonEmpty: variant === "empty",
                buttonFilled: variant === "filled", })}
        > {children} </button>
    );
};