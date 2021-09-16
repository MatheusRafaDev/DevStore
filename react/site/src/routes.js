import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Site from './pages/index';
import Error from './pages/erro';


export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route  path="/" exact={true} component={Site} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter> 
    )
}