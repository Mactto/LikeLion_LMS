import React from 'react';
import Auth from "../hoc/auth";
import LandingPage from './LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import AdminPage from './AdminPage/AdminPage';
import AttendancePage from './AttendancePage/AttendancePage';

const App = () => {
  return (
    <div className="App" style={{width: "100%", height: "100%"}}>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, null)} />
        <Route exact path="/admin" component={Auth(AdminPage), null} />
        <Route path="/attendance" component={AttendancePage} />
      </Switch>
    </div>
  );
}

export default App;