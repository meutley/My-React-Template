import React from 'react';
import {Route} from 'react-router';

import HomeIndex from './components/Index.jsx';

const HomeRoutes = (
    <Route path="/" component={HomeIndex}/>
);

export default HomeRoutes;