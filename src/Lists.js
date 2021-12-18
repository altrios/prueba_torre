import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AccountCircle, Computer, HomeRounded, Close} from '@material-ui/icons'
import React from 'react'
import {
    NavLink,
    Link
} from "react-router-dom";

export const Lists = () => {

    return (

        <div className="container" id="menu">
            <div className="btn-group">
                <List componet='nav'>
                    <Link
                        to="/"
                        exact

                    >
                        <ListItem button>
                            <ListItemIcon>
                                <HomeRounded />
                            </ListItemIcon>
                            <ListItemText to="/"
                                exact
                                className="btn btn-dark button-menu-lateral"

                                primary="Inicio" />

                        </ListItem>
                    </Link>

                    <Link to="/biografy"
                        exacr
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText to="/biografy"
                                exact
                                className="btn btn-dark button-menu-lateral"

                                primary="Biografy" />
                        </ListItem>
                    </Link>
                   
                </List>
            </div>


        </div>

    )

}
export default Lists;

