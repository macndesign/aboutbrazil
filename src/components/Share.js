import React from 'react';

const Share = (props) => (
    <section className="mbr-section mbr-section--relative mbr-section--fixed-size" id="social-buttons1-54"
             style={{backgroundColor: 'rgb(247, 218, 100)'}}>
        <div className="mbr-section__container container">
            <div className="mbr-header mbr-header--inline row">
                <div className="col-sm-4">
                    <h3 className="mbr-header__text">SHARE THIS PAGE!</h3>
                </div>
                <div className="mbr-social-icons col-sm-8">
                    <div className="mbr-social-likes social-likes_style-1" data-counters="true">
                        <div className="mbr-social-icons__icon social-likes__icon facebook socicon-bg-facebook"
                             title="Share link on Facebook">
                            <i className="socicon socicon-facebook"/>
                        </div>
                        <div className="mbr-social-icons__icon social-likes__icon twitter socicon-bg-twitter"
                             title="Share link on Twitter">
                            <i className="socicon socicon-twitter"/>
                        </div>
                        <div className="mbr-social-icons__icon social-likes__icon plusone socicon-bg-google"
                             title="Share link on Google+">
                            <i className="socicon socicon-google"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Share;
