import React, {useContext} from "react";
import Logo  from '../../logo.png';

import { makeStyles,   Grid } from "@material-ui/core";




const useStyles = makeStyles(() => ({
  Container: {
    width: '100%',
    padding: '5px'
  }

}));

function Home() {
  
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.Container}>
        <Grid >
          <img src={Logo} height={'300px'}/>
        </Grid>

        <Grid ><h1>Welcome to the Torre's test</h1></Grid>
      </Grid>


    </div>
  );
}


export default Home;
