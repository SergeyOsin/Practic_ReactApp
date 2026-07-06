import type {PropsWithChildren} from "react";
import "./Tag.css";

export const Tag = ({children}:PropsWithChildren) => {
    return (
        <div className="mainTag">
            {children}
        </div>
    );
};