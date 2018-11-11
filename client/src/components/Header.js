import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import color from '@material-ui/core/colors/deepPurple';

const styles = {
    root: {
        flexGrow: 1,
    },
    navStyle: {
        backgroundColor: '#443e43',
        position: 'static',
        height: '10vh',
    },
    text: {
        color: 'white',
    }
};

class Header extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.navStyle}>
                    <Toolbar className={classes.navStyle}>
                        <Typography className={classes.text}>
                            MATCHA
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);