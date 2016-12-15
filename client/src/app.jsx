import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage.jsx'
import { browserHistory, Router } from 'react-router'
import routes from './routes'

injectTapEventPlugin();

ReactDom.render(
    (<MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={browserHistory} routes={routes}/>
    </MuiThemeProvider>),
    document.getElementById('react-app')
);
