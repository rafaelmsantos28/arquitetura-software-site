import React from 'react';
import './Team.css';
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';
import githubIcon from '../../assets/redes-sociais/github.svg';
import xIcon from '../../assets/redes-sociais/x.svg';
import mailIcon from '../../assets/redes-sociais/mail.svg'
import member1 from '../../assets/team/frank.jpg';
import member2 from '../../assets/team/orlando.jpg';
import member3 from '../../assets/team/veronica.jpg';
import member4 from '../../assets/team/pedronette.jpg';
import member5 from '../../assets/team/brendo.jpg';
import member6 from '../../assets/team/joelle.jpg';
import member7 from '../../assets/team/rafael.jpg';
import member8 from '../../assets/team/layna.jpg';
import member9 from '../../assets/team/leticia-d.jpg';
import member10 from '../../assets/team/leticia-h.jpg';




function Team() {
    const teamMembers = [
        {
            photo: member1,
            name: 'Frank Affonso',
            role: 'Orientador',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/frank-josé-affonso-7260852a8/',

            },
        },
        {
            photo: member2,
            name: 'Orlando Saraiva',
            role: 'Técnico',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/orlando-saraiva-júnior-83707022/',
                github: 'https://github.com/orlandosaraivajr',
                x: 'https://x.com/orlandosaraivaj',
            },
        },
        {
            photo: member3,
            name: 'Veronica Carvalho',
            role: 'Participante',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/veronica-carvalho-86370137/',
            },
        },
        {
            photo: member4,
            name: 'Daniel Pedronette',
            role: 'Participante',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/daniel-pedronette-6525122a/',
            },
        },
        {
            photo: member5,
            name: 'Brendo Custódio',
            role: 'Desenvolvedor',
            socialLinks: {
                linkedin: 'https://linkedin.com/in/brendo-mota-botelho-custódio-64542b264/',
                github: 'https://github.com/brendomota',
            },
        },
        {
            photo: member6,
            name: 'Joelle Ramos',
            role: 'Desenvolvedor',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/joelle-silva-tec/',
                github: 'https://github.com/jojors2',
            },
        },
        {
            photo: member7,
            name: 'Rafael Medeiros',
            role: 'Desenvolvedor',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/rafael-medeiros-santos/',
                github: 'https://github.com/rafaelmsantos28',
            },
        },
        {
            photo: member8,
            name: 'Layna Dias',
            role: 'Social Media',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/layna-dias-13b348362/',
                github: 'https://github.com',
            },
        },
        {
            photo: member9,
            name: 'Leticia Dias',
            role: 'Social Media',
            socialLinks: {
                linkedin: 'https://linkedin.com',
                github: 'https://github.com',
            },
        },
        {
            photo: member10,
            name: 'Letícia Hiratsuka',
            role: 'Social Media',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/let%C3%ADcia-hiratsuka-9a0b07332/',
                github: 'https://github.com',
            },
        },
    ];

    return (
        <section className="team-section container my-5">
            <h2 className="section-title text-center mb-4">Nossa Equipe</h2>
            <div className="row">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="team-card text-center p-5">
                            <img src={member.photo} alt={member.name} className="member-photo mb-3" />
                            <h5 className="mb-1">{member.name}</h5>
                            <p className="text-muted">{member.role}</p>
                            <div className="d-flex justify-content-center gap-3">
                                {member.socialLinks.mail && (
                                    <a href={`https://mail.google.com/mail/?view=cm&to=${member.socialLinks.mail}`} target="_blank" rel="noreferrer">
                                        <img src={mailIcon} alt="E-mail" className="social-icon" />
                                    </a>
                                )}
                                {member.socialLinks.linkedin && (
                                    <a href={member.socialLinks.linkedin} target="_blank" rel="noreferrer">
                                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                                    </a>
                                )}
                                {member.socialLinks.github && (
                                    <a href={member.socialLinks.github} target="_blank" rel="noreferrer">
                                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                                    </a>
                                )}
                                {member.socialLinks.x && (
                                    <a href={member.socialLinks.x} target="_blank" rel="noreferrer">
                                        <img src={xIcon} alt="X" className="social-icon" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
