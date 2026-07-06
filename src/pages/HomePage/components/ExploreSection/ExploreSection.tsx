import { Filter, Tag } from "../../../../components";
import { Filters } from "../../../../constants";
import "./ExploreSection.css";

export const ExploreSection = () => {
    return (
        <section className="palette-section">
            <div className="palette-section__container">
                <div className="palette-section__content">
                    <Tag>EXPLORE</Tag>

                    <h2 className="palette-section__title">
                        OUR DIVERSE PALETTE
                    </h2>

                    <p className="palette-section__description">
                        If you are a breakfast enthusiast, a connoisseur of savory
                        delights, or on the lookout for irresistible desserts, our
                        curated selection has something to satisfy every palate.
                    </p>
                </div>

                <div className="palette-section__filters">
                    {Filters.map((filter) => (
                        <Filter
                            key={filter.label}
                            icon={filter.image}
                            label={filter.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};