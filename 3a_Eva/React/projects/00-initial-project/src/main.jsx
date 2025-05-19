import { createRoot } from 'react-dom/client'
import { Fragment } from 'react';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

import { TwitterFollowCard } from './TwitterFollowCard';
/*React va a renderizar siempre un único elemento y 
ya dentro de ese elemento, podremos añadir todos los 
elementos que queramos (etiquetas, componentes, etc)*/

root.render(
  <Fragment>
    <div className="App">
      <TwitterFollowCard name={"Javs"} userName={"Javps"}/>
      <TwitterFollowCard name={"Jon"} userName={"jonnn"}/>
      <TwitterFollowCard name={"Uma"} userName={"umitaRexulona"}/>
    </div>
  </Fragment>
);
