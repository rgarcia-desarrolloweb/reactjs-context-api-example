import React from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom"
import { AuthContextProvider, useAuth } from './context/auth'

import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth()

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login"
              }} />
          )
      } />
  );
}

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />

          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/">
                <HomePage />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </AuthContextProvider>
    </Router>
  )
}

export default App