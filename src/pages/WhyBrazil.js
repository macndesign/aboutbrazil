import React, {Component} from 'react';
import CoverSimple from '../components/CoverSimple';
import AboutCustom from '../components/AboutCustom';

class WhyBrazil extends Component {
    render() {
        var itemStructure = (pathData) => {
            if (pathData) {
                return (
                    <div>
                        <h2>{pathData.title}</h2>
                        <div className="row">
                            <img className="col-sm-12"
                                 alt={pathData.title}
                                 src={pathData.image}/>
                        </div>
                    </div>
                )
            }
        };
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
                                {itemStructure(this.props.data.whyBrazil.statistics.grid.classDistributions)}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                {itemStructure(this.props.data.whyBrazil.statistics.grid.cuts)}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                {itemStructure(this.props.data.whyBrazil.statistics.grid.map)}
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
