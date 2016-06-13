/**
 * Created by stevet on 07/06/2016.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddOpportunity from './components/AddOpportunity';
import Opportunities from './components/Opportunities';

export default (
<Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/opportunities' component={Opportunities} />
    <Route path='/addOpportunity' component={AddOpportunity} />
</Route>
);