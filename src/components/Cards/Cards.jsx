import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import styles from "./Cards.module.css";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#26242E"
        },
        secondary: {
            main: '#283593',
        },
      },
});

const Cards = (props) => {
    const dark = theme;

    console.log(props);
    return(
        <div className={styles.container}>
            <Grid theme={dark} container justify="center" spacing={3}>
                <Grid color="main" blueGrey item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of covered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Data</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;