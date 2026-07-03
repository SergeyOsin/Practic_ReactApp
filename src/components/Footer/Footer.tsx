import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <nav className="Menu">
                <a>HOME</a>
                <a>RECIPES</a>
                <a>COOKING TIPS</a>
                <a>ABOUT US</a>
            </nav>
            <div className="line"></div>
            <p className="Copyright">
                COPYRIGHT © 2026 COOKS DELIGHT.
            </p>
        </footer>
    );
};

export default Footer;