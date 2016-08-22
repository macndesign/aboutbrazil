import React from 'react';

const countryList = (countries) => (
    countries.map((country) =>
        <tr className="row" key={country.key}>
            <td className="col-sm-6" style={{textAlign: 'left'}}>
                {country.name}
            </td>
            <td className="col-sm-6" style={{textAlign: 'right'}}>
                {country.country}
            </td>
        </tr>
    )
);

const placeList = (places) => (
    places.map((place) =>
        <div className="col-sm-12" key={place.key}>
            <table className="table">
                {place.place && <caption><h3 style={{marginBottom: 0}}>{place.place}</h3></caption>}
                <tbody>
                {countryList(place.list)}
                </tbody>
            </table>
        </div>
    )
);

const CustomersTable = (props) => (
    <section className="content-2 col-2" id="features1-42" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <div className="container">
            <div className="row">
                {props.list.map((i) =>
                    <div key={i.key}>
                        <div className="thumbnail">
                            <div className="caption">
                                <div>
                                    <h3 style={{
                                        textTransform: 'uppercase',
                                        background: '#395259',
                                        color: '#fff',
                                        borderRadius: '0.3rem',
                                        borderTopLeftRadius: '2.3rem',
                                        borderBottomRightRadius: '2.3rem'
                                    }}>
                                        {i.title}
                                    </h3>
                                    {placeList(i.list)}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
);

export default CustomersTable;
