import { createMuiTheme } from '@material-ui/core/styles';



const arcblue = "#087289";
const arcorange = "#FFBA60"

export default createMuiTheme({
    palette: {
        commom: {
            blue: `${arcblue}`,
            orangle: `${arcorange}`
        },
        primary: {
            main: `${arcblue}`
        }
    }

})