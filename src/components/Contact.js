import React from 'react';
import GoogleMap from 'google-map-react';
import MapsPlace from './MapsPlace';

const Contact = (props) => (
    <section className="mbr-section mbr-section--relative mbr-section--fixed-size" id="contacts2-57"
             style={{backgroundColor: 'rgb(60, 60, 60)'}}>
        <div className="mbr-section__container container">
            <div className="row" style={{paddingTop: 20, color: '#fff', textAlign: 'center'}}>
                <div className="col-sm-12">
                    <h3 style={{color: '#ccc'}}>{props.title}</h3>
                    <h3 style={{fontSize: '2rem', color: '#aaa'}}>{props.subtitle}</h3>
                </div>
            </div>
            <div className="mbr-contacts mbr-contacts--wysiwyg row" style={{paddingTop: 20}}>
                <div className="col-sm-6">
                    <figure className="mbr-figure mbr-figure--wysiwyg mbr-figure--full-width mbr-figure--no-bg">
                        <div className="mbr-figure__map mbr-figure__map--short">
                            <GoogleMap
                                bootstrapURLKeys={{key: props.mapsApiKey}}
                                center={[-3.7408693, -38.547685]}
                                zoom={15}>
                                <MapsPlace className="place" lat={-3.7408693} lng={-38.547685} text={'CE'}/>
                            </GoogleMap>
                        </div>
                    </figure>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-5 col-sm-offset-1">
                            <p className="mbr-contacts__text"><strong>{props.address.title}</strong><br/>
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
);

export default Contact;
