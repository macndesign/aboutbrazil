import React from 'react';

const FeaturesLite = ({features, colCssClass}) => (
    <section className={"content-2 " + colCssClass} id="features1-75" style={{backgroundColor: 'rgb(239, 239, 239)'}}>
        <div className="container">
            <div className="row">
                {features.map((feature) =>
                    <div key={feature.title}>
                        <div className="thumbnail">
                            <div className="image">
                                <img className="undefined"
                                     src={feature.icon}
                                     alt={feature.title}
                                     style={{maxHeight: 185}}/>
                            </div>
                            <br/>
                            <div className="caption">
                                <div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);

FeaturesLite.propTypes = {
    features: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    colCssClass: React.PropTypes.string
};

export default FeaturesLite;
