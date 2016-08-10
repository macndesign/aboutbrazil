import React, {Component} from 'react';
import Cover from '../components/Cover';
import DepositionSlider from '../components/DepositionSlider';
import AboutPhoto from '../components/AboutPhoto';
import FeaturesLite from '../components/FeaturesLite';

class Home extends Component {
    render() {
        return (
            <div>
                <Cover images={this.props.data.home.cover.image.list}
                       imagesRotate={this.props.data.home.cover.image.rotate}
                       imagesRotateTime={this.props.data.home.cover.image.rotateTime}
                       imageOpacity={this.props.data.home.cover.image.opacity}
                       title={this.props.data.home.cover.title}
                       subtitle={this.props.data.home.cover.subtitle}
                       body={this.props.data.home.cover.body}
                       buttons={this.props.data.home.cover.buttons}/>
                <FeaturesLite features={this.props.data.home.features} />
                <AboutPhoto photo={this.props.data.home.about.photo}
                            title={this.props.data.home.about.title}
                            subtitle={this.props.data.home.about.subtitle}
                            body={this.props.data.home.about.body}
                            button={this.props.data.home.about.button} />
                <DepositionSlider title={this.props.data.home.deposition.title}
                                  list={this.props.data.home.deposition.list} />
            </div>
        );
    }
}

export default Home;
