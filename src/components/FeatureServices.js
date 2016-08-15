import React from 'react';

const FeaturesServices = (props) => (
    <section className="content-2 col-3" id="features1-75" style={{backgroundColor: 'rgb(239, 239, 239)'}}>
        <div className="container">
            <div className="row">
                {props.features.map((feature) =>
                    <div key={feature.title}>
                        <div className="thumbnail">
                            <div className="image">
                                <img className="undefined"
                                     src={feature.icon}
                                     alt={feature.title}/>
                            </div>
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
            <div className="row">
                {props.features.map((feature) =>
                    <div key={feature.title}>
                        <div className="thumbnail">
                            <div className="caption">
                                <div style={{textAlign: 'left'}}>
                                    <h3 style={{marginBottom: 10}}>{feature.more.title}</h3>
                                    <ul style={{paddingLeft: 15}}>
                                        {feature.more.items.map((item) =>
                                            <li key={item}>{item}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);

FeaturesServices.propTypes = {
    features: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default FeaturesServices;
