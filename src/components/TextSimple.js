import React from 'react';

const TextSimple = (props) => (
    <section className="mbr-section">
        <br/>
        <div className="mbr-section__container container mbr-section__container--middle" style={{paddingBottom: 0}}>
            <div className="row">
                <div className="mbr-article mbr-article--wysiwyg col-sm-4">
                    <img src="./assets/images/logo-aboutbr.png" alt="logo-mbr" style={{padding: '1.6em 0.6em'}}/>
                </div>
                <div className="mbr-article mbr-article--wysiwyg col-sm-8">
                    <blockquote>
                        <em>{props.body.map((text) => <p key={props.body.indexOf(text)}>{text}</p>)}</em>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
);

export default TextSimple;
