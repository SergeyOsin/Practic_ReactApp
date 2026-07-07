import "./Filter.css";

type TFilterProps = {
    icon: string;
    label: string;
};

export const Filter = ({ icon, label}: TFilterProps) => {
    return (
        <div className="filter">
            <div className="filter__icon">
                <img src={icon} alt={label}/>
            </div>
            <div className="filter__label">{label}</div>
        </div>
    );
};