import React from "react";
import { Toolbar, useScrollTrigger, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'





function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    }



}))


function Header() {
    const classes = useStyles();
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6">
                            Y ISM
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div classNames={classes.toolbarMargin} />
        </>

    )

}

export { Header }