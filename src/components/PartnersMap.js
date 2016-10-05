import React from 'react';
import GoogleMap from 'google-map-react';
import MapsPlace from './MapsPlace';

const styles = (props) => {
    return {
        sectionStyle: {
            backgroundColor: 'rgb(129, 162, 202)',
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover'
        }
    }
};

const PartnersMap = (props) => (
    <div style={styles(props).sectionStyle}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{background: '#fff'}}>
                    <h2 style={{textAlign: 'center', textTransform: 'uppercase'}}>
                        {props.title}
                    </h2>
                </div>
            </div>
            <div className="row">
                <div style={{height: 550}}>
                    <GoogleMap
                        bootstrapURLKeys={{key: props.mapsApiKey}}
                        center={props.center}
                        zoom={props.zoom}>
                        {props.markers.map((m) =>
                            <MapsPlace lat={m.lat}
                                       lng={m.long}
                                       text={m.text}
                                       key={m.lat}/>
                        )}
                    </GoogleMap>
                </div>
            </div>
        </div>
    </div>
);

export default PartnersMap;
