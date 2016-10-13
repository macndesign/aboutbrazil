import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import AboutCustom from '../components/AboutCustom';

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
                            <div className="col-sm-12">
                                <h2>{this.props.data.whyBrazil.statistics.grid.classDistributions.title}</h2>
                                <div className="row">
                                    <img className="col-sm-12"
                                         alt={this.props.data.whyBrazil.statistics.grid.classDistributions.title}
                                         src={this.props.data.whyBrazil.statistics.grid.classDistributions.image}/>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <h2>{this.props.data.whyBrazil.statistics.grid.cuts.title}</h2>
                                <div className="row">
                                    <img className="col-sm-12"
                                         alt={this.props.data.whyBrazil.statistics.grid.cuts.title}
                                         src={this.props.data.whyBrazil.statistics.grid.cuts.image}/>
                                </div>
                            </div>
                            <div className="col-md-10 col-sm-12">
                                <h2>{this.props.data.whyBrazil.statistics.grid.possession.title}</h2>
                                <div className="row">
                                    <img className="col-sm-12"
                                         alt={this.props.data.whyBrazil.statistics.grid.possession.title}
                                         src={this.props.data.whyBrazil.statistics.grid.possession.image}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </section>
            </div>
        );
    }
}

export default WhyBrazil;
