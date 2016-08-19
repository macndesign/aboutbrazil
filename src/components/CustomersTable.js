import React from 'react';

const CustomersTable = (props) => (
    <section className="content-2 col-2" id="features1-42" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <div className="container">
            <div className="row">
                {props.list.map((i) =>
                    <div key={i.key}>
                        <div className="thumbnail">
                            <div className="caption">
                                <div>
                                    <h3 style={{textTransform: 'uppercase'}}>{i.title}</h3>
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
