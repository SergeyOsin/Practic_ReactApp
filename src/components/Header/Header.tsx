import './Header.css';
import {Logo} from "./index.ts"
const Header = () => {
    return (
        <>
            <header>
                <a className="logo">
                    <img src={Logo}/>
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