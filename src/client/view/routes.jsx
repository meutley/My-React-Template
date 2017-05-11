import React from 'react';
import {Route} from 'react-router';

import View from './components/Index.jsx';

const ViewRoutes = (
    <Route path="/view/:id" component={View}/>
);

export default ViewRoutes;