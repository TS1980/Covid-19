import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {return "Loading..."};
    let date = new Date(lastUpdate).toDateString();

    return(
        <div className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography className={styles.head} gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start = {0}
                                end = {confirmed.value}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography className={styles.head} gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start = {0}
                                end = {recovered.value}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Number of covered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography className={styles.head} gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start = {0}
                                end = {deaths.value}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">{date}</Typography>
                        <Typography variant="body2">Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;