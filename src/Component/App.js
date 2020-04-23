import React, { useState } from "react";
import Header from './UI/Header'
import Footor from './UI/Footer'
import theme from "./UI/Theme"
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom"

export default function App() {
    const [value, setValue] = useState(0)//tabs
    const [selectedIndex, setSelectedIndex] = React.useState(0); //submenus
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                <Switch>
                    <Route exact path="/" component={() => <div style={{ height: "3000px" }} >Home</div>} />
                    <Route exact path="/services" component={() => <div>Services</div>} />
                    <Route exact path="/customsoftware" component={() => <div>Customsoftware</div>} />
                    <Route exact path="/moblieapps" component={() => <div>Moblieapps</div>} />
                    <Route exact path="/websites" component={() => <div>Websites</div>} />
                    <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
                    <Route exact path="/contact" component={() => <div>Contact us</div>} />
                    <Route exact path="/about" component={() => <div>About us</div>} />
                    <Route exact path="/estimate" component={() => <div>Free Estimate</div>} />

                </Switch>
                <Footor value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            </BrowserRouter>


        </ThemeProvider>
    )
}



