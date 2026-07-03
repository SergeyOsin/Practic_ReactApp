import "./Header.css";
import { Logo, NavLinks} from "../index";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className="head">
            <a className="head__logo">
                <img
                    className="head__logo-image"
                    src={Logo}
                    alt="Cooks Delight"
                />
                <span className="head__logo-text">
                    Cooks <br /> Delight
                </span>
            </a>

            <div className="head__nav">
                {NavLinks.map((link) => (
                    <NavLink
                        to="/"
                        key={link.id}
                        className={`head__link ${
                            link.title === "HOME"
                                ? "head__link--active"
                                : ""
                        }`}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </div>
        </header>
    );
};