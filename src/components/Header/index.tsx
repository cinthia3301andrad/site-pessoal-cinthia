import iconMy from '../../assets/imagens/my.jpeg';
import './styles.scss';

const Header: React.FC = () => {
  return (
    <header className="page__header">
      <div className="page__header-left">
        <img src={iconMy} alt="Cinthia Andrade" />
        <h1>Cinthia Andrade</h1>
      </div>
      <nav className="page__header-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">Quem sou</a>
          </li>
          <li>
            <a href="#">Experiência</a>
          </li>
          <li>
            <a href="#">Potifólio</a>
          </li>
          <li className="contato">
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
