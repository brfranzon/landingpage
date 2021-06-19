import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "10vh",
        backgroundColor: "red"
    },

}))


export default function Navbar() {

    const classes = useStyles();

    return <div className={classes.container}
    >
        <Typography variant="h6">
            HELLA IAA
        </Typography>

        <Typography variant="h6">
            HELLA IAA
        </Typography>

        <Typography variant="h6">
            HELLA IAA
        </Typography>
    </div>
}