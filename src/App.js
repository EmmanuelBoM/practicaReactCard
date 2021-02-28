import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from './card'
import Page from './page'
import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'

let personalInfo = {
  nombre: "Emmanuel",
  apellidos: ['Bolteada', 'Manzo'],
  correo: "a01276310@itesm.mx",
  username: "EmmanuelBoM"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route 
            path="/card" 
            exact={true}
            render={(props) => <Card {...personalInfo}{...props}/> } /> {/* Aplicacion de Spread Syntax*/ }
           
            {/* Ruta dinámica */}
            <Route
              path="/page/:section" 
              exact={true}
              render = {(props)=>(
                <div>hello {props.match.params.section}</div>
              )}
            />
            <Route path="/page/page1" exact={true}>Page 1</Route> /* Subpagina de /page */
            <Route path="/page">{Page}</Route>
            <Route path="/" exact={true}>
              <React.Fragment>
                Welcome
                <nav>
                  <Link to="/card">Card</Link>
                  <Link to="/page">Page</Link>
                </nav>
              </React.Fragment>
            </Route>
            <Route>
              Error 404. Page Not Found.
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
