import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { observer } from "mobx-react-lite";
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import '../styles/global.css';
import LeadsListPage from '../pages/LeadsListPage/lead-list-page';
import MapViewPage from '../pages/MapViewPage/map-view-page';
import NotFoundPage from '../pages/NotFoundPage/not-found-page';
import SideBar from '../components/SideBar/sidebar';
import { Container } from './styles';
import Snackbar from '../components/Snackbar/snackbar';
import { LeadStoreCtx } from '../stores/lead-store';
import { SnackbarStoreCtx } from '../stores/snackbar-store';

axios.defaults.baseURL = `http://localhost:3000/api/v1`;

axios.interceptors.response.use(
  (res) => {
      console.log('AXIOS RES', res);
      return res;
  },
  (err) => {
      if (err.response) {
          console.log('AXIOS ERROR', err.response);
      }
      return Promise.reject(err);
  }
);

function App() {

  const leadStore = useContext(LeadStoreCtx);
  const snackbarStore = useContext(SnackbarStoreCtx);

  useEffect(() => {
      if(leadStore.leads.length === 0) {
        leadStore.getLeads().then((success: boolean) => {
            if(!success) {
                snackbarStore.show(
                    'Ocorreu um erro durante a requisição. Por favor, tente novamente.',
                    'error',
                    6000,
                );
            }
        });
      }

  }, [leadStore, snackbarStore]);

  return (
      <Router>
        <Container>
          <SideBar />
          <Snackbar />
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
