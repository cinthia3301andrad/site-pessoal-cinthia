import Typewriter from 'typewriter-effect';
import ModeDark from '../../components/ModeDark';
import './styles.scss';
const Home: React.FC = () => {
  return (
    <section className="container__home" id="home">
      <ModeDark />
      <div className="home-left">
        <h1>
          Olá! <strong>Eu sou </strong>
          <Typewriter
            options={{
              strings: [
                'Cinthia Andrade',
                'desevolvedora front-end',
                'amante de tecnologia',
              ],
              autoStart: true,
              loop: true,
            }}
          />
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
