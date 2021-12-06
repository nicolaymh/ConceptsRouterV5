import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Acerca } from '../pages/Acerca';
import { Contacto } from '../pages/Contacto';
import { Error404 } from '../pages/Error404';
import { Home } from '../pages/Home';
import { MenuConceptos } from './MenuConceptos';

import { Usuario } from '../pages/Usuario';
import { Productos } from '../pages/Productos';

import '../index.css';

export const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Conceptos Basicos</h2>

            <Router>
                <MenuConceptos />

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/acerca' component={Acerca} />
                    <Route exact path='/contacto' component={Contacto} />

                    <Route
                        exact
                        path='/usuario/:username'
                        component={Usuario}
                    />

                    <Route path='/productos' component={Productos} />

                    <Route exact path='/about'>
                        <Redirect to='/acerca' />
                    </Route>
                    <Route exact path='/contact'>
                        <Redirect to='/contacto' />
                    </Route>

                    <Route path='*' component={Error404} />
                </Switch>
            </Router>
        </div>
    );
};
