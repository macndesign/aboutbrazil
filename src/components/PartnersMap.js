import React from 'react';
import GoogleMap from 'google-map-react';
import MapsPlace from './MapsPlace';

const PartnersMap = (props) => (
    <div style={{background: 'rgb(129, 162, 202)'}}>
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
                                       key={m.text}/>
                        )}
                    </GoogleMap>
                </div>
            </div>
        </div>
    </div>
);

export default PartnersMap;
