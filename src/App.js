import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Notes />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
