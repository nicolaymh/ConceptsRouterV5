import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Enlaces HTML no recomendado: (no recomendado): </span>
                    <a href='/'>Home</a>
                    <a href='/acerca'>Acerca</a>
                    <a href='/contacto'>Contacto</a>
                </li>

                <li>
                    <span>Componente Link: </span>
                    <Link to='/'>Home</Link>
                    <Link to='/acerca'>Acerca</Link>
                    <Link to='/contacto'>Contacto</Link>
                    <Link to='/no-existe'>Error 404</Link>
                </li>

                {/* //* NavLink nos va a hacer lo mismo que Link solo que este nos va a plicar la propiedad activeClassName a el link que este activo es decir en el que estemos.. Es importante colocar el mismo atributo exact que usabamos en las rutas del router para que se aplique la clase de manera mas eficiente*/}
                <li>
                    <span>Componente NavLink: </span>
                    <NavLink exact to='/' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink exact to='/acerca' activeClassName='active'>
                        Acerca
                    </NavLink>
                    <NavLink exact to='/contacto' activeClassName='active'>
                        Contacto
                    </NavLink>
                    <NavLink to='/no-existe' activeClassName='active'>
                        Error 404
                    </NavLink>
                </li>
            </ol>
        </nav>
    );
};
