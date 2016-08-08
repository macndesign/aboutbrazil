import React from 'react';

const Slider = (props) => (
    <section className="mbr-slider mbr-section mbr-section--no-padding carousel slide" data-ride="carousel"
             data-wrap="true" data-interval={5000} id="slider2-45">
        <div className="mbr-section__container container article-slider mbr-section__container--isolated">
            <div className=" col-sm-8 col-sm-offset-2">
                <ol className="carousel-indicators">
                    <li data-app-prevent-settings data-target="#slider2-45" data-slide-to={0} className="active"/>
                    <li data-app-prevent-settings data-target="#slider2-45" data-slide-to={1}/>
                    <li data-app-prevent-settings data-target="#slider2-45" className data-slide-to={2}/>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div
                        className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center active">
                        <div className="mbr-box__magnet">
                            <div>
                                <img src="assets/images/iphone-6-458153-1920-1920x1285-16.jpg" alt="img1"/>
                                <div className="row">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <div className="mbr-hero">
                                            <h1 className="mbr-hero__text">IMAGE SLIDER</h1>
                                            <p className="mbr-hero__subtext">Develop fully responsive, mobile-optimized
                                                websites that look amazing on any devices and browsers. Preview how your
                                                website will appear on phones, tablets and desktops directly in the
                                                visual editor.</p>
                                        </div>
                                        <div className="mbr-buttons btn-inverse mbr-buttons--center"><a
                                            className="mbr-buttons__btn btn btn-lg btn-primary"
                                            href="https://mobirise.com/bootstrap-template/">TRY NOW!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center">
                        <div className="mbr-box__magnet">
                            <div>
                                <img src="assets/images/iphone-6-458151-1920-1920x1285-18.jpg" alt="img2"/>
                                <div className="row">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <div className="mbr-hero">
                                            <h1 className="mbr-hero__text">BOOTSTRAP SLIDER</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--bg-adapted item dark center">
                        <div className="mbr-box__magnet">
                            <div>
                                <img src="assets/images/iphone-6-458150-1920-1920x1285-95.jpg" alt="img3"/>
                                <div className="row">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <div className="mbr-hero">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a data-app-prevent-settings className="left carousel-control" role="button" data-slide="prev"
                   href="#slider2-45">
                    <span className="glyphicon glyphicon-menu-left" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a data-app-prevent-settings className="right carousel-control" role="button" data-slide="next"
                   href="#slider2-45">
                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
);

export default Slider;
