import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import AdminCommonTemplate from './AdminCommonTemplate';
import FrontendTemplate from './FrontendTemplate';
import Home from './Home';
import Dashboard from './Dashboard';
import Registration from './Registration';
import Authorisation from './Authorisation';
import Yogis from './Yogis';
import PageNotFound from './PageNotFound';

class MainRouting extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<FrontendTemplate><Home /></FrontendTemplate>} />
          <Route path="/dashboard" element={<AdminCommonTemplate><Dashboard /></AdminCommonTemplate>} />
          <Route path="/registration" element={<FrontendTemplate><Registration /></FrontendTemplate>} />
          <Route path="/yogis" element={<AdminCommonTemplate><Yogis /></AdminCommonTemplate>} />
          <Route path="/authorization" element={<FrontendTemplate><Authorisation /></FrontendTemplate>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<MainRouting />, document.getElementById('root'));