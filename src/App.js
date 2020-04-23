import React, {Component} from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Counrty from "./components/Country/Country";
import styles from "./App.module.css";
import {fetchData} from "./data";

class App extends Component {
    state = {
         data: {},
         country: ""
     }

    async componentDidMount() {
        const fetched = await fetchData();
        this.setState({data: fetched});
    }

    handleCountry = async (country) => {
        const data = await fetchData(country);
        this.setState({data, country: country});
    }

    render() {
        const data = this.state.data;
        const country = this.state.country;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <Chart data={data} country={country}/>
                <Counrty handleCountry={this.handleCountry}/>
            </div>
        );
    }
}

export default App;