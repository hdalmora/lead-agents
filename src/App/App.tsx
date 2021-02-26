import React from 'react';
import { observer } from "mobx-react-lite";
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import '../styles/global.css';
import LeadsListPage from '../pages/LeadsListPage/lead-list-page';
import MapViewPage from '../pages/MapViewPage/map-view-page';
import NotFoundPage from '../pages/NotFoundPage/not-found-page';
import SideBar from '../components/SideBar/sidebar';
import { AppRoot, Container } from './styles';

function App() {
  return (
      <Router>
        <SideBar />
        <Container>
          <div className="page">
              <Switch>
                  <Route exact path="/" component={LeadsListPage} />
                  <Route exact path="/leads" component={LeadsListPage} />
                  <Route exact path="/map" component={MapViewPage} />
                  <Route path="/404" component={NotFoundPage} />
                  <Redirect to="/404" />
              </Switch>
          </div>
        </Container>
    </Router>
  );
}

export default observer(App);
