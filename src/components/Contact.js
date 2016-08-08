import React from 'react';

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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3173226333492!2d-38.547684985241006!3d-3.7408746972783753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7490d77b61d19%3A0xca8338ab6e7cb16d!2sRua+Dom+Joaquim+de+Melo%2C+407+-+Rodolfo+Te%C3%B3filo%2C+Fortaleza+-+CE%2C+60430-660!5e0!3m2!1spt-BR!2sbr!4v1470617591274" width="400" height="300" style={{border:0}}></iframe>
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
