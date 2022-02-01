import { AppBar, Avatar, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import { DashboardOutlined, FormatPaintOutlined, MenuBook, MenuOutlined, NoteAddOutlined, NoteOutlined, NotesOutlined } from '@material-ui/icons';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns'
import { deepOrange, deepPurple, red } from '@material-ui/core/colors';
const drawerWidth = 240;
const useStyle = makeStyles((theme) => {
    return (
        {
            drawer: {
                width: drawerWidth
            },
            drawerPaper: {
                width: drawerWidth
            },
            active: {
                backgroundColor: '#D3D3D3'

            },
            title: {
                padding: theme.spacing(1)
            },
            appbar: {
                width: `calc(100% - ${drawerWidth}px)`
            },
            root: {
                display: 'flex'
            },
            page:{
                width:`100%`,
                padding:theme.spacing(3),
                backgroundColor:"#f9f9f9"
            },
            toolbar:theme.mixins.toolbar,
            date:{
                flexGrow:1
            },
            avatar:{
                marginLeft:theme.spacing(1),
                backgroundColor:red[400]
            }
        }

    )
})

function Layout({ children }) {
    const history = useHistory()
    const classes = useStyle()
    const [selectedindex, setselectedindex] = useState(null);
    const handleclick = (e, i) => {
        setselectedindex(i)
    }
    const location = useLocation()
    const result = format(new Date(), 'do MMMM Y')
    return (
        <div className={classes.root}>

            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography variant='h6'className={classes.date} >
                        Today is {result}
                    </Typography>
                   
                    <Typography variant='h6'>
                        User
                    </Typography>
                    <Avatar className={classes.avatar}>US</Avatar>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent"
                anchor="left" className={classes.drawer} classes={{ paper: classes.drawerPaper }} >

                <Typography className={classes.title} variant='h5' color="primary">
                    Notes App
                </Typography>

                <List>
                    <ListItem className={location.pathname === '/' ? classes.active : null} button selected={selectedindex === 0} onClick={(e) => { handleclick(e, 0) }} component="a" href="http://localhost:3000" >
                        <ListItemIcon>
                            <NoteOutlined color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary="Notes" />
                    </ListItem>
                    <Divider></Divider>
                    <ListItem className={location.pathname === '/create' ? classes.active : null} button selected={selectedindex === 1} onClick={(e) => { handleclick(e, 1) }} component="a" href="http://localhost:3000/create">
                        <ListItemIcon>
                            <FormatPaintOutlined color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary="Create" />
                    </ListItem>
                </List>

            </Drawer>

        // {/* side drawer */}


            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>


        </div>

    );
}

export default Layout;