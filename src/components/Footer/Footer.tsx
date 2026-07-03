import "./Footer.css";
import {NavLinks} from "../../constants";

export const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__menu">
                {NavLinks.map((link) => (
                    <a
                        key={link.id}
                        className={`footer__link`}
                    >
                        {link.title}
                    </a>
                ))}
            </nav>

            <div className="footer__line"></div>

            <p className="footer__copyright">
                COPYRIGHT © 2026 COOKS DELIGHT.
            </p>
        </footer>
    );
};
