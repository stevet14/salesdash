/**
 * Created by stevet on 07/06/2016.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddOpportunity from './components/AddOpportunity';

export default (
<Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/add' component={AddOpportunity} />
</Route>
);