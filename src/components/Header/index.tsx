import './styles.scss';

const Header: React.FC = () => {
  return (
    <header className="page__header">
      <h1 className="page__header-title">Cinthia Andrade</h1>
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
