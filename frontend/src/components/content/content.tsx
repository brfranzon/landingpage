import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "90vh"
    },

}))


const Content = () => {

    const classes = useStyles();

    return <div className={classes.container}>
        <Typography variant="h1" color="secondary">
            TEST
        </Typography>

        <Typography variant="h1" color="secondary">
            TEST 3
        </Typography>
    </div>;

};


export default Content;