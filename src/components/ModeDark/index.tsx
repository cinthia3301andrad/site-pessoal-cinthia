import { useState } from 'react';
import { useEffect } from 'react';

import iconDark from '../../assets/imagens/night-mode.png';
import iconLight from '../../assets/imagens/brightness.png';

interface ColorsProps {
  white: string | undefined;
  background: string | undefined;
  backgroundSecurity: string | undefined;

  colorPrimary: string | undefined;
  colorPurple: string | undefined;
  title: string | undefined;
  textSecurity: string | undefined;
}

const ModeDark: React.FC = () => {
  const [isModeDark, setIsModeDark] = useState(false);
  const [initialColors, setInitialColors] = useState<ColorsProps>({
    white: '#fff',
    background: '#f3f3f3',
    backgroundSecurity: '#fff',
    colorPrimary: '#ec5c8d',
    colorPurple: '#ac6aff',
    title: '#3d3d3d',
    textSecurity: '#a1a1a1',
  });
  const html = document.querySelector('html');

  function getStyle(element: HTMLElement | null, style: string) {
    if (element) {
      return window.getComputedStyle(element).getPropertyValue(style);
    }
  }

  useEffect(() => {
    let colors = {
      white: getStyle(html, '--white'),
      background: getStyle(html, '--background'),
      backgroundSecurity: getStyle(html, '--background-security'),

      colorPrimary: getStyle(html, '--color-primary'),
      colorPurple: getStyle(html, '--color-purple'),
      title: getStyle(html, '--title'),
      textSecurity: getStyle(html, '--text-security'),
    };
    setInitialColors(colors);
  }, [html]);

  const darkMode = {
    white: '#fff',
    background: '#202020fd',
    backgroundSecurity: '#070707dc',

    colorPrimary: '#FF96B9',
    colorPurple: '#AF70FF',
    title: '#f3f3f3',
    textSecurity: '#e6e6e6',
  };

  const transformKey = (key: string) => {
    return '--' + key.replace(/([A-Z])/, '-$1').toLowerCase();
  };
  function changeColors(colors: any) {
    Object.keys(colors).map(key => {
      html?.style.setProperty(transformKey(key), colors[key]);
    });
  }
  useEffect(() => {
    if (isModeDark) {
      changeColors(darkMode);
    } else {
      changeColors(initialColors);
    }
  }, [isModeDark, setIsModeDark]);

  return (
    <section className="container__modeDark">
      <button onClick={() => setIsModeDark(!isModeDark)}>
        <img src={isModeDark ? iconDark : iconLight} alt="mudar de tema" />
      </button>
    </section>
  );
};
export default ModeDark;
