import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Registration from './Pages/Registration';
import Authorisation from './Pages/Authorisation';
import YogiList from './Pages/YogiList';
import Yogi from './Pages/Yogi';
import PageNotFound from './Pages/PageNotFound';

class MainRouting extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorisation />} />
          <Route path="/yogilist" element={<YogiList />} />
          <Route path="/yog" element={<Yogi />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<MainRouting />, document.getElementById('root'));