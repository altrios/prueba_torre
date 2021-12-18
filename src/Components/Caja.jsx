import React from "react";
import Lists from "../Lists";
import Logo  from '../logo.png';

import { Drawer, makeStyles } from "@material-ui/core";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
  },
}));  

export const Caja = (props) => {
  const classes = estilos();
  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
      classes={{
        paper: classes.drawerPaper,
      }}
      
      anchor="left"
    >
      <div className={classes.toolbar}><img src={Logo} className="logo-desk"/></div>
      
      
      <Lists />
    </Drawer>
  );
};
export default Caja;
