import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './pages/homepage';
import Dashboard from './pages/dashboardpage';
import EditPage from './pages/editpage';
import DetailPage from './pages/detailpage';
import ProfilePage from './pages/profilepage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/dashboard" exact >
          <Dashboard />
        </Route>
        <Route path="/edit/:id" exact >
          <EditPage />
        </Route>
        <Route path="/detail/:id" exact >
          <DetailPage />
        </Route>
        <Route path="/profile" exact >
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
