import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import { Grid, Hidden } from "@material-ui/core";


import FooterAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';



const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.Blue,
        width: "100%",
        zIndex: "1302",
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",

        [theme.breakpoints.down("md")]: {
            width: "21em"
        },

        [theme.breakpoints.down("xs")]: {
            width: "15em"
        },
    },
    maincontainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "1rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "2em"
    },
    icons: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        }
    },
    social: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.25em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
        }
    }
}))

export default function Footer(props) {
    const classes = useStyles();
    return (
        <footer className={classes.footer} >

            <Hidden smDown>
                <Grid container justify="center" className={classes.maincontainer} >
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/" className={classes.link}
                                onClick={() => props.setValue(0)}>
                                Home
                        </Grid>
                        </Grid>
                    </Grid>


                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/services" className={classes.link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(0) }}>
                                Services
                        </Grid>
                            <Grid item component={Link} to="/customsoftware" className={classes.link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(1) }}
                            >
                                Custom Service Deveopment
                        </Grid>
                            <Grid item component={Link} to="/moblieapps" className={classes.link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(2) }}
                            >
                                MobileApp Development
                         </Grid>
                            <Grid item component={Link} to="/websites" className={classes.link}
                                onClick={() => { props.setValue(1); props.setSelectedIndex(3) }}
                            >
                                Website Software Development
                         </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}  >
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/revolution" className={classes.link}
                                onClick={() => props.setValue(2)}
                            >
                                The Revolution
                        </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => props.setValue(2)}>
                                Vision
                        </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => props.setValue(2)} >
                                Technology
                        </Grid>
                        </Grid>
                    </Grid>


                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/about" className={classes.link}
                                onClick={() => props.setValue(3)}>
                                About Us
                        </Grid>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => props.setValue(3)} >
                                History
                        </Grid>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => props.setValue(3)} >
                                Team
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/contact" className={classes.link} onClick={() => props.setValue(4)} >
                                Contact Us
                        </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Hidden>

            <img className={classes.adornment} src={FooterAdornment} alt="footerimage" />

            <Grid container justify="flex-end" className={classes.social} spacing={2}>
                <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="fb" src={facebook} className={classes.icons} />
                </Grid>
                <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="tw" src={twitter} className={classes.icons} />
                </Grid>
                <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="is" src={instagram} className={classes.icons} />
                </Grid>

            </Grid>


        </footer>
    )
}