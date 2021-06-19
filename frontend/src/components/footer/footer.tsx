import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        height: "10vh"
    },

}))

const Footer = () => {

    const classes = useStyles();

    return <div className={classes.container}>

        <Typography variant="h3" color="primary">
            test
        </Typography>
    </div>;

};


export default Footer;