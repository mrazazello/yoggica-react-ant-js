import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Registration from './Pages/Registration/Registration';
import Authorization from './Pages/Authorization/Authorization';
import YogiList from './Pages/YogiList/YogiList';
import Yogi from './Pages/Yogi/Yogi';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

class MainRouting extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/yogilist" element={<YogiList />} />
          <Route path="/yog" element={<Yogi />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<MainRouting />, document.getElementById('root'));