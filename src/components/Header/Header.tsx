import "./Header.css";
import { Logo, NavLinks} from "./index.ts";
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
                        key={link.id}
                        to={link.path}
                        className={({ isActive}) =>
                                isActive
                                    ? "head__link head__link_active"
                            : "head__link"
                        }
                    >
                        {link.title}
                    </NavLink>
                ))}
            </div>
        </header>
    );
};