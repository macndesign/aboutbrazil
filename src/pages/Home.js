import React, {Component} from 'react';
import Cover from '../components/Cover';
import DepositionSlider from '../components/DepositionSlider';
import AboutPhoto from '../components/AboutPhoto';
import FeaturesLite from '../components/FeaturesLite';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
            <div>
                <Cover images={this.props.data.cover.image.list}
                       imagesRotate={this.props.data.cover.image.rotate}
                       imagesRotateTime={this.props.data.cover.image.rotateTime}
                       imageOpacity={this.props.data.cover.image.opacity}
                       title={this.props.data.cover.title}
                       subtitle={this.props.data.cover.subtitle}
                       body={this.props.data.cover.body}
                       buttons={this.props.data.cover.buttons}/>
                <FeaturesLite features={this.props.data.features} />
                <AboutPhoto photo={this.props.data.about.photo}
                            title={this.props.data.about.title}
                            subtitle={this.props.data.about.subtitle}
                            body={this.props.data.about.body}
                            button={this.props.data.about.button} />
                <DepositionSlider title={this.props.data.deposition.title}
                                  list={this.props.data.deposition.list} />
                <Contact title={this.props.data.contact.title}
                         subtitle={this.props.data.contact.subtitle}
                         address={this.props.data.contact.address}
                         about={this.props.data.contact.about}
                         association={this.props.data.contact.association}/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
