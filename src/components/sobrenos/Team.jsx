import React from 'react';
import './Team.css';

// Importa ícones das redes sociais
import linkedinIcon from '../../assets/redes-sociais/linkedin.svg';
import githubIcon from '../../assets/redes-sociais/github.svg';
import xIcon from '../../assets/redes-sociais/x.svg';
import mailIcon from '../../assets/redes-sociais/mail.svg';

// Importa fotos dos membros
import member1 from '../../assets/team/frank.jpg';
import member2 from '../../assets/team/orlando.jpg';
import member3 from '../../assets/team/veronica.jpg';
import member4 from '../../assets/team/pedronette.jpg';
import member5 from '../../assets/team/brendo.jpg';
import member6 from '../../assets/team/joelle.jpg';
import member7 from '../../assets/team/rafael.jpg';
import member8 from '../../assets/team/layna.jpg';
import member9 from '../../assets/team/leticia-d.jpeg';
import member10 from '../../assets/team/leticia-h.jpg';

function Team() {
  // Array com dados dos membros da equipe
  const teamMembers = [
    {
      photo: member1,
      name: 'Frank Affonso',
      role: 'Docente Coordenador',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/frank-josé-affonso-7260852a8/',
      },
    },
    // demais membros omitidos para brevidade
    {
      photo: member4,
      name: 'Daniel Pedronette',
      role: 'Docente Participante',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/daniel-pedronette-6525122a/',
      },
    },
    {
      photo: member2,
      name: 'Orlando Saraiva',
      role: 'Assistente de Suporte Acadêmico',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/orlando-saraiva-júnior-83707022/',
        github: 'https://github.com/orlandosaraivajr',
        x: 'https://x.com/orlandosaraivaj',
      },
    },
    // ... outros membros ...
    {
      photo: member10,
      name: 'Letícia Hiratsuka',
      role: 'Social Media',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/let%C3%ADcia-hiratsuka-9a0b07332/',
        github: 'https://github.com/hiraleticia',
      },
    },
  ];

  // Separar o coordenador do restante da equipe para destaque
  const coordinator = teamMembers[0];
  const others = teamMembers.slice(1);

  return (
    <section className="container-fluid px-5 my-5">
      {/* Título da seção */}
      <h2 className="section-title fw-bold mb-5 text-center title-nossaequipe">
        Nossa Equipe
      </h2>

      {/* Card exclusivo para o coordenador */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="team-card-team text-center p-5">
            {/* Foto do coordenador */}
            <img
              src={coordinator.photo}
              alt={coordinator.name}
              className="member-photo-team mb-3"
            />
            {/* Nome e função */}
            <h5 className="mb-1 member-name-team">{coordinator.name}</h5>
            <p className="text-muted member-role-team">{coordinator.role}</p>
            {/* Links sociais */}
            <div className="d-flex justify-content-center gap-3">
              {/* Renderiza o ícone se existir o link */}
              {coordinator.socialLinks.mail && (
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${coordinator.socialLinks.mail}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={mailIcon} alt="E-mail" className="social-icon-team" />
                </a>
              )}
              {coordinator.socialLinks.linkedin && (
                <a href={coordinator.socialLinks.linkedin} target="_blank" rel="noreferrer">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon-team" />
                </a>
              )}
              {coordinator.socialLinks.github && (
                <a href={coordinator.socialLinks.github} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" className="social-icon-team" />
                </a>
              )}
              {coordinator.socialLinks.x && (
                <a href={coordinator.socialLinks.x} target="_blank" rel="noreferrer">
                  <img src={xIcon} alt="X" className="social-icon-team" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cards para os demais membros da equipe */}
      <div className="row">
        {others.map((member, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="team-card-team text-center">
              {/* Foto do membro */}
              <img src={member.photo} alt={member.name} className="member-photo-team mb-3" />
              {/* Nome e função */}
              <h5 className="mb-1 member-name-team">{member.name}</h5>
              <p className="text-muted member-role-team">{member.role}</p>
              {/* Links sociais */}
              <div className="d-flex justify-content-center gap-3">
                {member.socialLinks.mail && (
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${member.socialLinks.mail}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mailIcon} alt="E-mail" className="social-icon-team" />
                  </a>
                )}
                {member.socialLinks.linkedin && (
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon-team" />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a href={member.socialLinks.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" className="social-icon-team" />
                  </a>
                )}
                {member.socialLinks.x && (
                  <a href={member.socialLinks.x} target="_blank" rel="noreferrer">
                    <img src={xIcon} alt="X" className="social-icon-team" />
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
