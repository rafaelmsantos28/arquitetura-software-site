import '../style/SideInfoColumn.css';

function SideInfoColumn() {
  return (
    <aside className="side-info">
      
      <div className="info-section">
        <h3>Novidades</h3>
        <ul>
          <li>O programa Academia do Arquiteto de Software terá 3 oficinas no primeiro semestre</li>
          <li>Evento inaugural do programa acontece no dia 24/06</li>
          <li>Unesp entre as maiores faculdades de pesquisa no país</li>
          <li>Veja as novas postagens no Instagram do programa, fique por dentro das novidades</li>
        </ul>
      </div>

      <div className="info-section">
        <h3>Fale Conosco</h3>
        <p>a.software-unesp@gmail.com</p>
        <p>(99) 99999-9999</p>
        <p>@aa.softwareunesp</p>
        <p>Linkedin</p>
        
      </div>
    </aside>
  );
}

export default SideInfoColumn;
