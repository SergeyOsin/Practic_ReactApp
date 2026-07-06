import {Filter, Tag} from "../../../../components";
import {Filters} from "../../../../constants";
import "./ExploreSection.css";

export const ExploreSection = () => {
    return (
        <section className="palette-section">
            <div className="palette-container">
                <div className="palette-content">
                    <Tag>EXPLORE</Tag>
                    <h2 className="palette-title">OUR DIVERSE PALETTE</h2>
                    <p className="palette-description">
                        If you are a breakfast enthusiast, a connoisseur of savory delights, or
                        on the lookout for irresistible desserts, our curated selection has
                        something to satisfy every palate.
                    </p>
                </div>
                <div className="palette-filters">
                    {Filters.map((filter) =>
                        <Filter icon={filter.image} label={filter.label} /> )}
                </div>
            </div>
        </section>
    );
};