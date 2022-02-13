import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import AdminCommonTemplate from './AdminCommonTemplate';
import Dashboard from './Dashboard';
import Yogis from './Yogis';

class SiderDemo extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<AdminCommonTemplate><Dashboard /></AdminCommonTemplate>} />
          <Route path="/Yogis" element={<AdminCommonTemplate><Yogis /></AdminCommonTemplate>} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));