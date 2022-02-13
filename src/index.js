import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import AdminCommonTemplate from './AdminElements/AdminCommonTemplate';
import FrontendTemplate from './AdminElements/FrontendTemplate';
import Home from './PageComponents/Home';
import Dashboard from './PageComponents/Dashboard';
import Registration from './PageComponents/Registration';
import Authorisation from './PageComponents/Authorisation';
import Yogis from './PageComponents/Yogis';
import PageNotFound from './PageComponents/PageNotFound';

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