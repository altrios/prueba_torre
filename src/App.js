import Navs from './Navs';
import Caja from './Components/Caja';

import Home from './Components/Home/Home.jsx';
import { ThemeProvider } from '@material-ui/styles'
import theme from './themeconfig'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Hidden } from "@material-ui/core";
import React from 'react'



import Biografy from './Components/Home/Biografy';


import jQuery from 'jquery'
import Provider from './Provider';
//import FileRegister from './FileRegister';


function App() {

  const [abrir, setAbrir] = React.useState(false)
  const accionAbrir = () => {
    setAbrir(!abrir)

  }
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Router>
          <div className="App">
            <Navs accionAbrir={accionAbrir} />
            <Hidden xsDown>
              <Caja
                variant="permanent"
                open={true}
              />
            </Hidden>
            <Hidden smUp>
              <Caja
                variant="temporary"
                open={abrir}
                onClose={accionAbrir}

              />
            </Hidden>
            <Switch>
            <Route path="/" exact component={Home} />
              <Route path="/biografy" exact component={Biografy} />
              
            </Switch>

          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}


export default App;
