import clsx from "clsx";
import "./Filter.css";

type FilterProps = {
    icon: string;
    label: string;
};

export const Filter = ({ icon, label}: FilterProps) => {
    return (
        <div className={clsx("filter", {})}>
            <div className="filter__icon">
                <img src={icon}/>
            </div>
            <div className="filter__label">{label}</div>
        </div>
    );
};