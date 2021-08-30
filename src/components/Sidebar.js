import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from '@material-ui/core/styles';

const Sidebar = () => {

    const useStyles = makeStyles({
        MuiDrawer: {
            alignItems: 'center',
            backgroundColor: '#8996ac',
            color: 'white',
            position: 'fixed',
            width: '10vw'
        }
    })
    
    const classes = useStyles();
    
    return (
        <Drawer classes={{paper: classes.MuiDrawer}} variant="permanent">
            <div className="sidebar__item-container">
                <div className="sidebar__item">About Me</div>
                <div className="sidebar__item">Projects</div>
                <div className="sidebar__item">Skills</div>
                <div className="sidebar__item">Education</div>
            </div>
        </Drawer>
    )
}

export default Sidebar;