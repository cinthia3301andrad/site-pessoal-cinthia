import Typewriter from 'typewriter-effect';

import imageFront from '../../assets/imagens/imageFront.png';

import './styles.scss';
const Home: React.FC = () => {
  return (
    <section className="container__home" id="home">
      <section className="container__home-max">
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
            transformação digital!
          </p>
        </div>
        <div className="home-right">
          <div className="teste">
            <img src={imageFront} alt="front end" />
            <div className="rectang-pink" />
          </div>
          <div>REDS</div>
        </div>
      </section>
    </section>
  );
};
export default Home;
