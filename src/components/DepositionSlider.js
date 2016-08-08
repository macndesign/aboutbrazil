import React from 'react';

let styleSlider = "mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center";

const DepositionSlider = (props) => (
    <section className="mbr-slider mbr-section mbr-section--no-padding carousel slide" data-ride="carousel"
             data-wrap="true" data-interval={5000} id="slider2-45">
        <div className="mbr-section__container container article-slider mbr-section__container--isolated"
             style={{padding: '45px 0'}}>
            <div className=" col-sm-8 col-sm-offset-2">
                <h3 style={{textAlign: 'center'}}>{props.title}</h3>
                <ol className="carousel-indicators">
                    {props.list.map((dep) =>
                        <li data-app-prevent-settings
                            data-target="#slider2-45"
                            data-slide-to={props.list.indexOf(dep)}
                            key={dep.name}
                            className={props.list.indexOf(dep) === 0 ? "active" : ""}/>
                    )}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {props.list.map((dep) =>
                        <div key={dep.name} className={props.list.indexOf(dep) === 0 ? styleSlider + ' active' : styleSlider}>
                            <div className="mbr-box__magnet" style={{height: '450px'}}>
                                <div>
                                    <div className="row">
                                        <div className="col-sm-8 col-sm-offset-2">
                                            <div className="mbr-hero" style={{color: '#555'}}>
                                                <h1 className="mbr-hero__text">{dep.name}</h1>
                                                <p className="mbr-hero__subtext">{dep.text}</p>
                                            </div>
                                            <div className="mbr-buttons btn-inverse mbr-buttons--center">
                                                <a className="mbr-buttons__btn btn btn-lg btn-primary" target="_blank"
                                                   href={dep.company.link}>
                                                    {dep.position}&nbsp;/&nbsp;{dep.company.name}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <a data-app-prevent-settings className="left carousel-control" role="button" data-slide="prev"
                   href="#slider2-45" style={{border: '2px solid #555'}}>
                    <span className="glyphicon glyphicon-menu-left" aria-hidden="true" style={{color: '#555'}}/>
                    <span className="sr-only">Previous</span>
                </a>
                <a data-app-prevent-settings className="right carousel-control" role="button" data-slide="next"
                   href="#slider2-45" style={{border: '2px solid #555'}}>
                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true" style={{color: '#555'}}/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
);

DepositionSlider.propTypes = {
    title: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default DepositionSlider;
