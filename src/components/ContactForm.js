import React from 'react';

const ContactForm = (props) => (
    <section className="mbr-section mbr-section--relative mbr-section--fixed-size" id="form1-56"
             style={{backgroundColor: 'rgb(239, 239, 239)'}}>
        <div className="mbr-section__container mbr-section__container--std-padding container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2" data-form-type="formoid">
                            <div className="mbr-header mbr-header--center mbr-header--std-padding">
                                <h2 className="mbr-header__text">CONTACT FORM</h2>
                            </div>
                            <div data-form-alert="true"/>
                            <form action="http://mobirise.com/" method="post" data-form-title="CONTACT FORM">
                                <input type="hidden"
                                       defaultValue="QYJJaXGQjybL3tPwmy5gVHDBKrBiZhkaLK3dCJW6kNvmuOXshLhplWMAVdoP2cl/TEEfJN6b5AaXPGdEknB1LdX6uNy0iQCaIXXTCTsdFjPfukdK8Z38sYcUA891l25U"
                                       data-form-email="true"/>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" required placeholder="Name*"
                                           data-form-field="Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" required
                                           placeholder="Email*" data-form-field="Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" name="phone" placeholder="Phone"
                                           data-form-field="Phone"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Message" rows={7}
                                              data-form-field="Message" defaultValue={""}/>
                                </div>
                                <div className="mbr-buttons mbr-buttons--right">
                                    <button type="submit" className="mbr-buttons__btn btn btn-lg btn-warning">CONTACT
                                        US
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactForm;
