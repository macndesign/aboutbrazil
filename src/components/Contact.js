import React from 'react';
import GoogleMap from 'google-map-react';
import MapsPlace from './MapsPlace';

const styles = (props) => {
    return {
        sectionStyle: {
            backgroundColor: 'rgb(60, 60, 60)',
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            color: '#fff'
        }
    }
};

const Contact = (props) => {
    return (
        <section className="mbr-section mbr-section--relative mbr-section--fixed-size" id="contacts2-57"
                 style={styles(props).sectionStyle}>
            <div className="mbr-section__container container">
                <div className="row" style={{paddingTop: 20, color: '#fff', textAlign: 'center'}}>
                    <div className="col-sm-12">
                        <h3>{props.title}</h3>
                        <h3 style={{fontSize: '2rem'}}>{props.subtitle}</h3>
                    </div>
                </div>
                <div className="mbr-contacts mbr-contacts--wysiwyg row" style={{paddingTop: 20}}>
                    <div className="col-sm-6">
                        <figure className="mbr-figure mbr-figure--wysiwyg mbr-figure--full-width mbr-figure--no-bg">
                            <div className="mbr-figure__map mbr-figure__map--short">
                                <GoogleMap
                                    bootstrapURLKeys={{key: props.mapsApiKey}}
                                    center={[props.maps.center.lat, props.maps.center.long]}
                                    zoom={props.maps.zoom}>
                                    <MapsPlace className="place"
                                               lat={props.maps.place.lat}
                                               lng={props.maps.place.long}
                                               marker={props.maps.marker}
                                               text={props.maps.text}/>
                                </GoogleMap>
                            </div>
                        </figure>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-5 col-sm-offset-1">
                                <p className="mbr-contacts__text">
                                    <strong>{props.address.title}</strong><br/>
                                    <a style={{color: '#fff', textDecoration: 'none'}} href={'mailto:' + props.email}>
                                        {props.email}
                                    </a><br/>
                                    {props.address.list.map((address) =>
                                            <span key={address.title} style={{marginTop: '2rem', display: 'block'}}>
                                        <strong>{address.title}</strong><br/>
                                        <span>{address.street}, {address.number}</span><br/>
                                        <span>{address.city} - {address.state}, {address.country}</span><br/>
                                        <span>{address.zip.label}: {address.zip.value}</span><br/>
                                        <span>{address.phone.label}: {address.phone.value}</span><br/>
                                        <span>{address.fax.label}: {address.fax.value}</span><br/>
                                    </span>
                                    )}
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mbr-contacts__text">
                                    <strong>{props.about.title}</strong>
                                </p>
                                <p>{props.about.body}</p>
                                <p className="mbr-contacts__text">
                                    <strong>{props.association.title}</strong>
                                </p>
                                {props.association.list.map((item) =>
                                    <p key={item.name}>
                                        <a href={item.link}>
                                            <img src={item.image} alt={item.name} className="img-thumbnail"/>
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;
