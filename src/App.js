import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import Doctors from './Components/Doctors/Doctors';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import PagenotFound from './Components/PagenotFound/PagenotFound';
import Header from './Components/Header/Header';
import Apoinment from './Components/Apoinment/Apoinment';
function App() {
  return (
    <div className='w-100'>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/apoinment">
              <Apoinment></Apoinment>
            </PrivateRoute>

            <Route path="*">
              <PagenotFound></PagenotFound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
