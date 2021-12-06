import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Acerca } from '../pages/Acerca';
import { Contacto } from '../pages/Contacto';
import { Error404 } from '../pages/Error404';
import { Home } from '../pages/Home';

export const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Conceptos Basicos</h2>

            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/acerca' component={Acerca} />
                    <Route exact path='/contacto' component={Contacto} />

                    {/* //* Manejo de de ruta que no se encuentre. Esta ruta tiene que estar cargada al final. Se usa el comodin * y no se le coloca exact  */}
                    <Route path='*' component={Error404} />
                </Switch>
            </Router>
        </div>
    );
};
