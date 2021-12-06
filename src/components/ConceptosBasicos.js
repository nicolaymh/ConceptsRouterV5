import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Acerca } from '../pages/Acerca';
import { Contacto } from '../pages/Contacto';
import { Error404 } from '../pages/Error404';
import { Home } from '../pages/Home';
import { MenuConceptos } from './MenuConceptos';

import '../index.css';

export const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Conceptos Basicos</h2>

            {/* //* Si lo hago asi directamente lamando al link cada vez que cambie lo que hace es volverme a renderizar la palicacion y no necesitamos eso, para eso usamos Link y NavLink */}
            {/* <MenuConceptos /> */}

            {/* //* Muy importante cuando se llama Link debe estar dentro del Router pero fuera del switch ya que va a ser el que nos llamara las rutas: */}

            <Router>
                <MenuConceptos />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/acerca' component={Acerca} />
                    <Route exact path='/contacto' component={Contacto} />

                    <Route path='*' component={Error404} />
                </Switch>
            </Router>
        </div>
    );
};
