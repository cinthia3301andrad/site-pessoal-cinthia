import './styles.scss';
const Home: React.FC = () => {
  return (
    <section className="container__home" id="home">
      <div className="home-left">
        <h1>
          Olá! <strong>Eu sou a</strong> Cinthia Andrade
        </h1>
        <p>
          Sou desenvolvedora front end há 2 anos, apaixonada por tecnologia e
          transformação digital
        </p>
      </div>
      <div className="home-right"></div>
    </section>
  );
};
export default Home;
