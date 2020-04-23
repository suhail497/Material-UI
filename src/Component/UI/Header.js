import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, MenuItem, Menu, List, ListItem, ListItemText } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger'; //for scrolling effect
import { makeStyles } from "@material-ui/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom"
// For responsive design
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// menu icons
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';




function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2em",
        // media  
        [theme.breakpoints.down("md")]: {
            marginBottom: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "1em"
        }
    },
    logo: {
        height: "7em",
        // media  
        [theme.breakpoints.down("md")]: {
            height: "6em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5em"
        }
    },
    logoButton: {
        padding: "0",//padding used for the logo is converted in button 
        "&:hover": {  //is used to disable the bgcolor
            backgroundColor: "transparent"
        }
    },
    tabcontainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab, // taking from theme.js 
        minWidth: 10,//it reduce spaceb/w tabs
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: 50,
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },
    menu: {
        backgroundColor: theme.palette.common.Blue,
        color: "white"
    },
    menuItems: {
        ...theme.typography.tab,
        opacity: "0.7",
        "&:hover": {
            opacity: "1"
        }
    },
    menudrawer: {
        height: "45px",
        width: "50px"
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.Blue
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.Orange

    },
    drawerItem: {
        ...theme.typography.tabs,
        color: "white",
        opacity: "0.5"
    },
    drawerItemSelected: {
        "&.MuiListItemsText-root": {
            opacity: "1"

        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }


}

))

export default function Header(props) {
    const classes = useStyles();
    // formedia and responsive
    const theme = useTheme();

    // for icons
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    // const matches = useMediaQuery(theme.breakpoints.down("md"))
    const matches = useMediaQuery(theme.breakpoints.down("sm"))




    const [openDrawer, setOpenDrawer] = useState(false) // for MenuIcon
    // const [value, setValue] = useState(0)//tabs we have used this in app.js as props for header and footer
    const [anchorEl, setAnchorEl] = useState(null) //menus
    const [openMenu, setOpenMenu] = useState(false)//menus
    // const [selectedIndex, setSelectedIndex] = React.useState(0); //submenus


    const handleChange = (e, newValue) => {
        props.setValue(newValue) //index (i)  //tabs
    };
    // menus
    const handleClick = e => {
        setAnchorEl(e.currentTarget) //here when we click the menu it show the menu 
        setOpenMenu(true) //setOpenMenu is true because the it is closed
    };
    const handleClose = e => {
        setAnchorEl(null)
        setOpenMenu(false)
    };
    // sub menus
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false)
        props.setSelectedIndex(i);
    };


    // menuitems into simple form

    const menuOptions = [{ name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
    { name: "MobileApp Development", link: "/moblieapps", activeIndex: 1, selectedIndex: 2 },
    { name: "Website Software Development", link: "/websites", activeIndex: 1, selectedIndex: 2 },
    ];


    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        {
            name: "Services", link: "/services", activeIndex: 1,
            // for  service and tabs
            ariaowns: anchorEl ? "simple-menu" : undefined,
            ariaPopups: anchorEl ? "true" : undefined,
            mouseOver: event => handleClick(event)


        },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 },
    ];

    // useEffeect is hook to the show url which page currently location in the url 
    useEffect(() => {
        // shortformat
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [props.value, menuOptions, routes, props.selectedIndex, props]);






    const tabs = (
        <React.Fragment>

            <Tabs value={props.value} onChange={handleChange}
                indicatorColor='primary'
                className={classes.tabcontainer}
            >

                {/* short form of code  for tabs*/}
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link} to={route.link}
                        label={route.name}
                        aria-owns={route.ariaowns}
                        aria-haspopup={route.ariaPopups}
                        onMouseOver={route.mouseOver} />
                ))}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}
                component={Link} to="/estimate">Free Estimate</Button>

            <Menu id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu} //menus
                onClose={handleClose}
                classes={{ paper: classes.menu }} //for styling menu 
                MenuListProps={{ onMouseLeave: handleClose }}//we removed mouse menu are disapper
                elevation={0}
                keepMounted // for DOM purpose
                style={{ zIndex: 1302 }}
            >

                {menuOptions.map((option, i) => (
                    <MenuItem
                        // key={{option}
                        key={`${option}${i}`}
                        // {/* for routing purpose */} 
                        component={Link} to={option.link}
                        // styling
                        classes={{ root: classes.menuItems }}
                        // 
                        onClick={(event) => {
                            handleMenuItemClick(event, i);
                            props.setValue(1);
                            handleClose()
                        }
                        }
                        selected={i === props.selectedIndex && props.value === 1}
                    // used for which items is selected and show the url
                    >
                        {option.name}
                        {/* used for map the menuitems */}

                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );


    //    for responsive design
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                disableDiscovery={iOS} open={openDrawer} onClose={() =>
                    setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}>
                {/* creating drawer list menu */}

                <div className={classes.toolbarMargin} />

                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            divider button onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex) }}
                            component={Link} to={route.link}
                            Selected={props.value === route.activeIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                        >
                            <ListItemText disableTypography
                                className={classes.drawerItem}>{route.name}
                                {  /* for console error we are changing into above code                                     
                                       
                                        
                                         {props.value === route.activeIndex ?
                                    
                                    [classes.drawerItem, classes.drawerItemSelected]
                                    : classes.drawerItem}>{route.name}
                                     */}
                            </ListItemText>
                        </ListItem>
                    ))}

                    <ListItem classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
                        onClick={() => { setOpenDrawer(false); props.setValue(5) }}
                        divider button component={Link} to="/estimate"
                        Selected={props.value === 5}>
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.menudrawer} />
            </IconButton>
        </React.Fragment>
    );


    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar} >
                    <Toolbar disableGutters>
                        {/* disable gutters are used for remove the paddingof the logo */}
                        <Button component={Link} to="/" className={classes.logoButton}
                            onClick={() => props.setValue(0)}
                            //onclick use for when you click the any tab it shows in url same page name 
                            //  if you click on home also its shows in that paticular page example about {url/about } it doesn't go the homepage
                            // so we used the onclick function
                            disableRipple // used for if click the logo its jumping to overcome we used 
                        >
                            <img alt="com" className={classes.logo} src={logo} />
                        </Button>

                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}