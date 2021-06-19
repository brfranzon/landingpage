import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

}))

const BGVideo = () => {

    const classes = useStyles();

    return <>
        <video muted autoPlay loop className={classes.container}>
            <source src="./assets/4K_26.mp4" />
        </video>
    </>

};


export default BGVideo;