import React, {Component} from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Counrty from "./components/Country/Country";
import styles from "./App.module.css";
import {fetchData} from "./data";

class App extends Component {
    state = {
         data: {}
     }

    async componentDidMount() {
        const fetched = await fetchData();
        this.setState({data: fetched});
    }

    render() {
        const data = this.state.data;
        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <Chart/>
                <Counrty/>
            </div>
        );
    }
}

export default App;