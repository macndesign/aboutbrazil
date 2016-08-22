import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import AboutCustom from '../components/AboutCustom';

const Grid = (props) => (
    <div className="thumbnail">
        <div className="caption">
            <div>
                <div className="col-sm-12">
                    <h3 style={{textAlign: 'left', height: '2em'}}>{props.caption}</h3>
                </div>
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                        <tr>
                            {props.headers.map((header) =>
                                <th key={header}>{header}</th>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {props.rows.map((row) =>
                            <tr key={row.key}>
                                {row.data.map((cel) =>
                                    <td style={{textAlign: 'left'}} key={cel.key}>{cel.text}</td>
                                )}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

const StatisticsGrid = (props) => (
    <section className="content-2 col-2" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <div className="container">
            <div className="row">
                {props.grids.map((grid) =>
                    <div key={grid.caption}>
                        <Grid caption={grid.caption}
                              headers={grid.headers}
                              rows={grid.rows}/>
                    </div>
                )}
            </div>
        </div>
    </section>
);

class WhyBrazil extends Component {
    render() {
        return (
            <div>
                <CoverSimple cover={this.props.data.whyBrazil.header}/>
                <AboutCustom about={this.props.data.whyBrazil.about}
                             aboutMap={this.props.data.whyBrazil.aboutMap}/>

                <section style={{marginTop: 30}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>{this.props.data.whyBrazil.statistics.title}</h2>
                                <p>{this.props.data.whyBrazil.statistics.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <StatisticsGrid grids={this.props.data.whyBrazil.statistics.grids}/>
            </div>
        );
    }
}

export default WhyBrazil;
