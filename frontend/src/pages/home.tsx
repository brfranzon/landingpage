import NavBar from '../components/nav/nav-bar';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';
import BGVideo from '../components/video/video';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        height: "100vh"
    }
}))

export default function Home() {

    const classes = useStyles();

    return (
        <div className={classes.container} >
            <BGVideo />
            <NavBar />
            <Content />
            <Footer />
        </div>
    )

}