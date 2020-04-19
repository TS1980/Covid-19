import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import styles from "./Cards.module.css";

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(confirmed);
    if(!confirmed) {return "Loading..."};

    return(
        <div className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <Grid color="main" blueGrey item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
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