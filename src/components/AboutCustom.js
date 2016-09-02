import React from 'react';

const AboutCustom = (props) => (
    <section
        className="mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted mbr-parallax-background"
        id="header1-43" style={{backgroundImage: `url(${props.about.image})`}}>
        <div className="mbr-box__magnet mbr-box__magnet--sm-padding mbr-box__magnet--center-left">
            <div className="mbr-overlay" style={{opacity: 0.5, backgroundColor: 'rgb(41, 105, 176)'}}/>
            <div className="mbr-box__container mbr-section__container container">
                <div className="mbr-box mbr-box--stretched">
                    <div className="mbr-box__magnet mbr-box__magnet--center-left">
                        <div className="row">
                            <div className=" col-sm-12">
                                <h1 className="mbr-hero__text" style={{color: '#fff'}}>
                                    {props.about.title}
                                </h1>
                            </div>
                            {props.about.text.map((listCol) =>
                                <div className=" col-sm-6" key={listCol.key}>
                                    <div className="mbr-hero animated fadeInUp">
                                        {listCol.col.map((text) =>
                                            <p key={text} className="mbr-hero__subtext">{text}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="row" style={{textTransform: 'uppercase'}}>
                            <div className=" col-sm-12">
                                <h2 style={{color: '#fff'}}>
                                    {props.aboutMap.title}
                                </h2>
                            </div>
                            {props.aboutMap.text.map((listCol) =>
                                <div className=" col-sm-6" key={listCol.key}>
                                    <div className="mbr-hero animated fadeInUp">
                                        {listCol.col.map((text) =>
                                            <p key={text}>{text}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutCustom;
