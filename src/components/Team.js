import React from 'react';

const Team = (props) => (
    <section className="mbr-section mbr-section--relative mbr-section--fixed-size" id="testimonials1-55"
             style={{backgroundColor: 'rgb(255, 255, 255)'}}>
        <div className="mbr-section__container mbr-section__container--std-padding container"
             style={{paddingTop: '4rem'}}>
            <div className="row">
                {props.teams.map((team) => <div className="col-sm-12" key={team.title}><br/>
                    <h2 style={{textAlign: 'left'}} className="mbr-section__header">{team.title}</h2>
                    <ul className="mbr-reviews mbr-reviews--wysiwyg row" style={{marginTop: '5rem'}}>
                        {team.list.map((member) => <li key={member.name} className="col-sm-6 col-md-3">
                            <div style={{
                                background: `url(${member.photo}) no-repeat center`,
                                backgroundSize: 'cover',
                                borderTopLeftRadius: 33,
                                borderBottomRightRadius: 33,
                                height: 192
                            }}>
                            </div>
                            <h3>{member.name}</h3>
                            <blockquote style={{padding: '0 1rem'}}>
                                <em style={{fontSize: '1.5rem'}}>{member.about}</em>
                            </blockquote>
                        </li>)}
                    </ul>
                    {props.teams.length !== props.teams.indexOf(team) + 1 ? <hr/> : null}
                </div>)}
            </div>
        </div>
    </section>
);

export default Team;
