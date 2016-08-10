import React from 'react';

const AboutPhoto = (props) => (
    <section className="mbr-section mbr-section--relative mbr-parallax-background" id="msg-box5-46"
             style={{backgroundImage: `url(${props.photo})`}}>
        <div className="mbr-overlay" style={{opacity: '0.5', backgroundColor: 'rgb(0, 168, 133)'}}/>
        <div className="mbr-section__container mbr-section__container--isolated container">
            <div className="row">
                <div className="mbr-box mbr-box--fixed mbr-box--adapted">
                    <div className="mbr-box__magnet mbr-box__magnet--top-right mbr-section__left col-sm-6">
                        <figure
                            className="mbr-figure mbr-figure--adapted mbr-figure--caption-inside-bottom mbr-figure--full-width">
                            <img className="mbr-figure__img" src={props.photo} alt={props.title}/>
                        </figure>
                    </div>
                    <div className="mbr-box__magnet mbr-class-mbr-box__magnet--center-left col-sm-6 mbr-section__right">
                        <div className="mbr-section__container mbr-section__container--middle">
                            <div className="mbr-header mbr-header--auto-align mbr-header--wysiwyg">
                                <h3 className="mbr-header__text">{props.title}</h3>
                                <p className="mbr-header__text" style={{fontSize: '1.4rem'}}>{props.subtitle}</p>
                            </div>
                        </div>
                        <div className="mbr-section__container mbr-section__container--middle">
                            <div className="mbr-article mbr-article--auto-align mbr-article--wysiwyg">
                                <p>{props.body}&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

AboutPhoto.propTypes = {
    photo: React.PropTypes.string,
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    body: React.PropTypes.string,
    button: React.PropTypes.object
};

export default AboutPhoto;
