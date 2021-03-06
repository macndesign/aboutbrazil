import React from 'react';

const CoverSimple = (props) => (
    <section className="content-2 simple col-1 col-undefined mbr-parallax-background mbr-after-navbar" id="content5-77"
             style={{backgroundImage: `url(${props.cover.image})`}}>
        <div className="mbr-overlay" style={{opacity: '0.4', backgroundColor: 'rgb(0, 0, 0)'}}/>
        <div className="container">
            <div className="row">
                <div>
                    <div className="thumbnail">
                        <div className="caption">
                            <h3>{props.cover.title}</h3>
                            <div><p>{props.cover.subtitle} <br /></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);

export default CoverSimple;
