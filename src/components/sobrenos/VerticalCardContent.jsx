import './VerticalCardContent.css';
import overviewIcon from "../../assets/icons/overview.png";
import objetivoIcon from "../../assets/icons/objetivo.png";
import publicoIcon from "../../assets/icons/publico.png";
import resultadosIcon from "../../assets/icons/resultado.png"

function VerticalCardSection() {
    const features = [
        {
            icon: overviewIcon,
            title: 'Quem somos',
            text: (
                <>
                    <p>
                        A Academia do Arquiteto de Software é um projeto de extensão universitária
                        que busca ensinar conceitos de Engenharia e Arquitetura de Software para o
                        público em geral, com foco em estudantes de cursos de tecnologia e também em
                        pessoas leigas interessadas em aprender mais sobre o desenvolvimento de
                        sistemas de forma estruturada.
                    </p>
                    <br />
                    <ul>
                        <li><strong>Missão:</strong> Democratizar o ensino de boas práticas em Engenharia e Arquitetura de Software.</li>
                        <li><strong>Público-alvo:</strong> Estudantes de graduação, profissionais em formação e curiosos pela área de tecnologia.</li>
                        <li><strong>Motivação:</strong> A escassez de conteúdos introdutórios e acessíveis sobre arquitetura de software.</li>
                    </ul>
                </>
            )
        },
        {
            icon: objetivoIcon,
            title: 'Objetivos',
            text: (
                <>
                    <p><strong>Geral:</strong> <br />Promover o conhecimento sobre Engenharia e
                        Arquitetura de Software por meio de ações educativas e conteúdos de fácil acesso.</p>
                    <p><strong>Específicos:</strong></p>
                    <ul>
                        <li>Criar um portal com cursos, artigos e eventos sobre o tema.</li>
                        <li>Desenvolver materiais didáticos em linguagem acessível.</li>
                        <li>Estimular o pensamento crítico sobre decisões arquiteturais em projetos de software.</li>
                        <li>Incentivar o protagonismo dos alunos no desenvolvimento dos conteúdos.</li>
                    </ul>
                </>
            )
        },
        {
            icon: publicoIcon,
            title: 'O que oferecemos',
            text: (
                <>
                    <ul>
                        <li><strong>Cursos</strong> sobre Engenharia e Arquitetura de Software.</li>
                        <li><strong>Artigos e Publicações</strong> atualizados sobre o tema.</li>
                        <li><strong>Eventos, Lives e Workshops</strong> com especialistas.</li>
                        <li><strong>Comunidade de Aprendizagem</strong> colaborativa.</li>
                    </ul>
                </>
            )
        },
        {
            icon: resultadosIcon,
            title: 'Resultados esperados',
            text: (
                <>
                    O projeto busca alcançar resultados significativos na formação e engajamento do público com temas de Arquitetura de Software.<br /><br />
                    <ul>
                        <li>
                            <strong>Disseminação do conhecimento:</strong> Compartilhar saberes universitários por meio de abordagens interativas e acessíveis.
                        </li>
                        <li>
                            <strong>Capacitação colaborativa:</strong> Promover a aprendizagem conjunta entre participantes com diferentes níveis de conhecimento.
                        </li>
                        <li>
                            <strong>Recursos educacionais:</strong> Produzir materiais que estimulem a autonomia e a construção coletiva do conhecimento.
                        </li>
                        <li>
                            <strong>Eventos interativos:</strong> Realizar palestras e cursos que incentivem o diálogo entre academia e mercado.
                        </li>
                    </ul>
                </>
            )
        }
    ];

    return (
        <section className="container my-5">
            <div className="row g-4">
                {features.map((item, index) => (
                    <div key={index} className="col-12">
                        <div className="card h-100 shadow-sm border-0 card-hover">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center mb-3">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="mb-3"
                                        style={{ height: '128px' }}
                                    />
                                    <h5 className="card-title mb-2">{item.title}</h5>
                                </div>
                                <div className="card-text">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default VerticalCardSection;