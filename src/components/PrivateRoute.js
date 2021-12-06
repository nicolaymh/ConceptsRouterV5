import React from 'react';
import { Redirect, Route } from 'react-router';

// export const PrivateRoute = (props) => {
//     return <Route {...props} />;
// };

//Simular la Autenticacion:
let auth;
auth = null;
auth = true;

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}>
            {auth ? <Component /> : <Redirect to='/login' />}
        </Route>
    );
};
