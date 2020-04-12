import { createMuiTheme } from '@material-ui/core/styles';
const arcBlue = "#3366ff"
const arcOrange = "#FFBA60"


export default createMuiTheme({
    palette: {
        common: {
            Blue: `${arcBlue}`,
            Orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
    },

    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",//it converts uppercase to lowercase 
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"

        }
    }

})
