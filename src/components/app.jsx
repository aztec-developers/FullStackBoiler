/*
 *  First import ReactDOM
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './layout-component/layout.jsx';

/*
 *  ReactDOM.render will create our component tree at the
 *  element with the id root. This is why our index.html file
 *  only has one empty div component. The rest of our html will
 *  be create using JSX in React.
 */
ReactDOM.render(
        <Layout />,
        document.getElementById('root')
)

