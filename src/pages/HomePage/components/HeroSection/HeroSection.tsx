import Kitchen from "../../../../assets/Image/MainPicture.png";
import {Button} from "../../../../components";
import "./HeroSection.css";

export const HeroSection = () => {
    return (
        <section className="hero">
            <img className="hero__image" src={Kitchen} alt="Cooking" />
            <div className="hero__overlay" />
            <div className="hero__content">
                <h1> UNLEASH CULINARY <br /> EXCELLENCE </h1>
                <p>
                    Explore a world of flavors, discover <br />
                    handcrafted recipes, and let the aroma of <br />
                    our passion for cooking fill your kitchen
                </p>
                <Button variant="filled">EXPLORE RECIPES</Button>
            </div>
        </section>
    );
};