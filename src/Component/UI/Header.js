import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, MenuItem, Menu } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger'; //for scrolling effect
import { makeStyles } from "@material-ui/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom"
// For responsive design
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



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
        marginBottom: "2em"
    },
    logo: {
        height: "7em"
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
    }


}

))

export default function Header() {
    const classes = useStyles();
    // for mediaquries
    const theme = useTheme();

    const [value, setValue] = useState(0)//tabs
    const [anchorEl, setAnchorEl] = useState(null) //menus
    const [open, setOpen] = useState(false)//menus
    const [selectedIndex, setSelectedIndex] = React.useState(1); //submenus


    const handleChange = ((e, i) => {
        setValue(i) //index (i)  //tabs
    })
    // menus
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget) //here when we click the menu it show the menu 
        setOpen(true) //setopen is true because the it is closed
    }
    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }
    // sub menus
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false)
        setSelectedIndex(i);
    };


    // menuitems into simple form

    const menuOptions = [{ name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "MobileApp Development", link: "/moblieapps" },
    { name: "Website Software Development", link: "/websites" },
    ]


    // useEffeect is hook to the show url which page currently location in the url 
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1);
        }
        else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2);
        }
        else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3);
        }
        else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4);
        }
        else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5);
        }
        switch (window.location.pathname) {
            case "/": {
                if (value !== 0) {
                    setValue(0)
                }
                break;
            }
            case "/services": {
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;
            }
            case "/customsoftware": {
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(1)
                }
                break;
            }
            case "/moblieapps": {
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(2)
                }
                break;
            }


            case "/websites": {
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(3)
                }
                break;
            }
            case "/revolution": {
                if (value !== 2) {
                    setValue(2)
                }
                break;
            }
            case "/about": {
                if (value !== 3) {
                    setValue(3)
                }
                break;
            }

            case "/contact": {
                if (value !== 4) {
                    setValue(4)
                }
                break;
            }
            case "/estimate": {
                if (value !== 5) {
                    setValue(5)
                }

                break;
            }
            default:
                break;
        }

    }, [value])

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar disableGutters>
                        {/* disable gutters are used for remove the paddingof the logo */}
                        <Button component={Link} to="/" className={classes.logoButton}
                            onClick={() => setValue(0)}
                            //onclick use for when you click the any tab it shows in url same page name 
                            //  if you click on home also its shows in that paticular page example about {url/about } it doesn't go the homepage
                            // so we used the onclick function
                            disableRipple // used for if click the logo its jumping to overcome we used 
                        >
                            <img alt="com" className={classes.logo} src={logo} />
                        </Button>

                        <Tabs value={value} onChange={handleChange}
                            indicatorColor="primary "
                            className={classes.tabcontainer}>


                            <Tab className={classes.tab}
                                component={Link} to="/"
                                label="Home" />

                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                className={classes.tab}
                                onMouseOver={event => handleClick(event)} //we removed mouse menu are disapper
                                component={Link} to="/services"
                                label="Services" />

                            <Tab className={classes.tab}
                                component={Link} to="/revolution"
                                label="The Revolution" />
                            <Tab className={classes.tab}
                                component={Link} to="/about"
                                label="About Us" />
                            <Tab className={classes.tab}
                                component={Link} to="/contact"
                                label="Contact Us" />
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}
                            component={Link} to="/estimate"
                        >Free Estimate</Button>

                        <Menu id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            classes={{ paper: classes.menu }} //for styling menu 
                            MenuListProps={{ onMouseLeave: handleClose }}//we removed mouse menu are disapper
                            elevation={0}
                        >
                            {/* her onclick handleclose used before but the part of routing not showing the current page
                            so we used the function  IMP :{()=>{handleClose;setValue(1)}} we can use in future
                            Note here setValue is (1)because which is menu is clicked that is setvalue become updated 
                         */}

                            {/*      for this we have created const menu options                       
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/services" classes={{ root: classes.menuItems }} >Services</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/customsoftware" classes={{ root: classes.menuItems }}>Custom Software Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/moblieapps" classes={{ root: classes.menuItems }}>Moblie Software Development</MenuItem>
                            <MenuItem onClick={() => { handleClose(); setValue(1) }} component={Link} to="/websites" classes={{ root: classes.menuItems }}>website Software Development</MenuItem> */}


                            {menuOptions.map((option, i) => (

                                <MenuItem
                                    key={option}

                                    // {/* for routing purpose */} 
                                    component={Link} to={option.link}
                                    // styling
                                    classes={{ root: classes.menuItems }}
                                    // 
                                    onClick={(event) => {
                                        handleMenuItemClick(event, i);
                                        setValue(1);
                                        handleClose()
                                    }
                                    }
                                    selected={i === selectedIndex && value === 1}
                                // used for which items is selected and show the url
                                >
                                    {option.name}
                                    {/* used for map the menuitems */}

                                </MenuItem>
                            ))}


                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}