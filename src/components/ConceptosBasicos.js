import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Acerca } from '../pages/Acerca';
import { Contacto } from '../pages/Contacto';

export const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Conceptos Basicos</h2>

            <Router>
                <Switch>
                    <Route exact path='/'>
                        <h3>Home</h3>
                        <p>Bienvenid@s al tema de las Rutas en React</p>
                    </Route>
                    <Route exact path='/acerca'>
                        <Acerca />
                        <p>
                            Cupidatat laboris laborum enim in nostrud laborum in
                            ea. Adipisicing ea officia Lorem quis ullamco
                            consectetur. Deserunt est deserunt mollit excepteur.
                            Voluptate ullamco cupidatat incididunt ea ex veniam
                            cillum nulla aute occaecat id. Ea amet aliqua ex
                            mollit incididunt quis qui sunt irure dolor. Enim ad
                            aliqua velit excepteur laboris eu proident consequat
                            Lorem ut aliqua reprehenderit aliqua veniam.
                        </p>
                    </Route>
                    <Route exact path='/contacto'>
                        <h3>Contacto</h3>
                        <Contacto />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
