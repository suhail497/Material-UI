import React from 'react';
import lottie from "react-lottie";
import { makeStyles } from '@material-ui/styles';
import animationData from "../animations/landinganimation/data"
import Lottie from 'react-lottie';


const useStyles = makeStyles(theme => ({



}))


// react Lottie 3 rd party tool for animaion effect
// its from documentation lottie 
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function Landingpage() {
    const classes = useStyles()
    return (

        <Lottie
            Options={defaultOptions}
            height={"100%"}
            width={"100%"}
        />
    )
}