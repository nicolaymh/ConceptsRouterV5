import React from 'react';
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

const Topic = () => {
    let { topic } = useParams();

    return (
        <div>
            <h4>{topic}</h4>
            <p>
                Irure ad fugiat deserunt aliqua. Pariatur reprehenderit
                voluptate elit ad excepteur sint excepteur eu. Aliquip fugiat
                sint exercitation mollit incididunt mollit ipsum eiusmod culpa
                laborum. Nostrud ut sint non magna in commodo nostrud consequat
                nulla consequat esse sit excepteur. Ut occaecat Lorem aliqua
                aute sit elit ut mollit pariatur veniam.
            </p>
        </div>
    );
};

export const ReactTopics = () => {
    //     let match = useRouteMatch();
    //     console.log(match);
    //* Nos permite contruir rutas realtivas<Route>. Mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>

    let { url, path } = useRouteMatch();

    return (
        <div>
            <h2>Temas de React</h2>

            <ul>
                <li>
                    <Link to={`${url}/jsx`}>JSX</Link>
                </li>
                <li>
                    <Link to={`${url}/props`}>Props</Link>
                </li>
                <li>
                    <Link to={`${url}/estado`}>Estado</Link>
                </li>
                <li>
                    <Link to={`${url}/componentes`}>Componentes</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h4>Elige un tema de React</h4>
                    <p>
                        Incididunt pariatur labore ut magna nisi duis. Commodo
                        laborum consectetur occaecat amet non elit do elit
                        adipisicing quis. Enim anim sit proident proident irure
                        aute sint. Ad et nisi proident reprehenderit sint Lorem
                        esse voluptate eu ad deserunt elit. Eiusmod nulla labore
                        labore minim ipsum exercitation commodo adipisicing in
                        quis fugiat est occaecat qui. Dolor aute non id
                        cupidatat occaecat ad labore cupidatat labore in fugiat
                        fugiat aliquip.
                    </p>
                </Route>

                <Route path={`${path}/:topic`} component={Topic} />
            </Switch>
        </div>
    );
};
