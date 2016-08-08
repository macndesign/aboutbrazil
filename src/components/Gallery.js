import React from 'react';

const Gallery = (props) => (
    <div>
        <section className="mbr-section mbr-section--relative mbr-section--fixed-size" id="msg-box3-48"
                 style={{backgroundColor: 'rgb(255, 255, 255)'}}>
            <div className="mbr-section__container container mbr-section__container--isolated">
                <div className="mbr-header mbr-header--wysiwyg row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h3 className="mbr-header__text">MASONRY IMAGE GALLERY</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="mbr-gallery mbr-section mbr-section--no-padding" id="gallery1-49"
                 style={{backgroundColor: 'rgb(239, 239, 239)'}}>
            {/* Gallery */}
            <div className=" mbr-gallery-layout-default">
                <div>
                    <div className="row mbr-gallery-row no-gutter">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item">
                            <a href="#lb-gallery1-49" data-slide-to={0} data-toggle="modal">
                                <img alt="img1" src="assets/images/iphone-1067975-1920-1920x1439-11-1920x1439-53.jpg"/>
                                <span className="icon glyphicon glyphicon-zoom-in"/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item">
                            <a href="#lb-gallery1-49" data-slide-to={1} data-toggle="modal">
                                <img alt="img2" src="assets/images/iphone-1067982-1920-1920x1439-68-1920x1439-47.jpg"/>
                                <span className="icon glyphicon glyphicon-zoom-in"/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item">
                            <a href="#lb-gallery1-49" data-slide-to={2} data-toggle="modal">
                                <img alt="img3" src="assets/images/iphone-1067983-1920-1920x1440-44-1920x1440-62.jpg"/>
                                <span className="icon glyphicon glyphicon-zoom-in"/>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mbr-gallery-item">
                            <a href="#lb-gallery1-49" data-slide-to={3} data-toggle="modal">
                                <img alt="img4" src="assets/images/iphone-1067991-1920-1920x1440-57-1920x1440-37.jpg"/>
                                <span className="icon glyphicon glyphicon-zoom-in"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="clearfix"/>
            </div>
            {/* Lightbox */}
            <div data-app-prevent-settings className="mbr-slider modal fade carousel slide" tabIndex={-1}
                 data-keyboard="true" data-interval="false" id="lb-gallery1-49">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <ol className="carousel-indicators">
                                <li data-app-prevent-settings data-target="#lb-gallery1-49" data-slide-to={0}/>
                                <li data-app-prevent-settings data-target="#lb-gallery1-49" data-slide-to={1}/>
                                <li data-app-prevent-settings data-target="#lb-gallery1-49" data-slide-to={2}/>
                                <li data-app-prevent-settings data-target="#lb-gallery1-49" className=" active"
                                    data-slide-to={3}/>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item">
                                    <img alt="img5" src="assets/images/iphone-1067975-1920-1920x1439-11.jpg"/>
                                </div>
                                <div className="item">
                                    <img alt="img6" src="assets/images/iphone-1067982-1920-1920x1439-68.jpg"/>
                                </div>
                                <div className="item">
                                    <img alt="img7" src="assets/images/iphone-1067983-1920-1920x1440-44.jpg"/>
                                </div>
                                <div className="item active">
                                    <img alt="img8" src="assets/images/iphone-1067991-1920-1920x1440-57.jpg"/>
                                </div>
                            </div>
                            <a className="left carousel-control" role="button" data-slide="prev" href="#lb-gallery1-49">
                                <span className="glyphicon glyphicon-menu-left" aria-hidden="true"/>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" role="button" data-slide="next"
                               href="#lb-gallery1-49">
                                <span className="glyphicon glyphicon-menu-right" aria-hidden="true"/>
                                <span className="sr-only">Next</span>
                            </a>
                            <a className="close" href="#" role="button" data-dismiss="modal">
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"/>
                                <span className="sr-only">Close</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="msgbox-1" id="msg-box2-50" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>BOOTSTRAP ONE PAGE TEMPLATE</h2>
                    </div>
                    <div className="col-sm-4"><a className="btn btn-lg btn-default"
                                                 href="https://mobirise.com/bootstrap-template/">GET IT NOW</a></div>
                </div>
            </div>
        </section>
    </div>
);

export default Gallery;
