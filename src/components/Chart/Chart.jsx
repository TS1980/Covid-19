import React, { useState, useEffect } from 'react';
import {fetchDay} from "../../data";
import {Line, Bar} from "react-chartjs-2"; 
import styles from "./Chart.module.css";

const Chart = (props) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetch = async () => {
			setDailyData(await fetchData);
		}
		fetch();
	});

    return(
        <div>
            
        </div>
    );
}

export default Chart;