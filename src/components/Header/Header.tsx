import './Header.css';
import LogoIcon from "../../assets/Logo.svg"
const Header = () => {
    return (
        <>
            <header>
                <a className="logo">
                    <img src={LogoIcon}/>
                    <span>Cooks<br/>Delight</span>
                </a>

                <nav>
                    <a className="active">HOME</a>
                    <a>RECIPES</a>
                    <a>COOKING TIPS</a>
                    <a>ABOUT US</a>
                </nav>
            </header>
        </>
    );
};

export default Header;