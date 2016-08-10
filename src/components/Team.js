import React from 'react';

const Team = (props) => (
    <section className="mbr-section mbr-section--relative mbr-section--fixed-size" id="testimonials1-55"
             style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <div className="mbr-section__container mbr-section__container--std-padding container" style={{paddingTop: '4rem'}}>
            <div className="row">
                {props.teams.map((team) => <div className="col-sm-12" key={team.title}><br/>
                    <h2 style={{textAlign: 'left'}} className="mbr-section__header">{team.title}</h2>
                    <ul className="mbr-reviews mbr-reviews--wysiwyg row" style={{marginTop: '5rem'}}>
                        {team.list.map((member) => <li key={member.name} className="mbr-reviews__item col-sm-6 col-md-3">
                            <div className="mbr-reviews__text">
                                <div className="img-circle col-sm-12"
                                     style={{
                                         margin: '-8rem 0 2rem',
                                         clear: 'both',
                                         background: `url(${member.photo}) no-repeat center`,
                                         backgroundSize: 'cover',
                                         height: 140,
                                         width: 140}}>&nbsp;
                                </div>
                                <p className="mbr-reviews__p" style={{textAlign: 'center'}}>{member.name}</p>
                            </div>
                            <div className="mbr-reviews__author mbr-reviews__author--short">
                                <div className="mbr-reviews__author-name">
                                    {member.about}
                                </div>
                            </div>
                        </li>)}
                    </ul>
                    {props.teams.length !== props.teams.indexOf(team) + 1 ? <hr/> : null}
                </div>)}
            </div>
        </div>
    </section>
);

export default Team;
