import { createRoot } from 'react-dom/client'
import './index.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

import { AppRoot } from './App.jsx';

/*React va a renderizar siempre un único elemento y 
ya dentro de ese elemento, podremos añadir todos los 
elementos que queramos (etiquetas, componentes, etc)*/

root.render(
  <>
    <AppRoot />
    
  </>
  // <Fragment>
  //   <span>Hola mundo!</span>
  //   <span>Esto es un segundo span</span>
  // </Fragment>
);
