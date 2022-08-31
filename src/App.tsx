import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import About from './pages/About';
import {Menu} from './components/Menu/Menu';
import TituloPelicula from './pages/TituloPelicula';


setupIonicReact();

const App: React.FC = () => {
  return (
    <>
  
  <IonApp>
    <IonReactRouter>
    <Menu />
    
      <IonRouterOutlet id="first">
      <Route  path="/home-peliculas" component={Home} exact/>
        <Route  path="/titulo-pelicula" component={TituloPelicula} exact/>        
        <Route  path="/about" component={About} exact/>    
        
        <Redirect to="/home-peliculas"/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </>
  );
  }

export default App;
