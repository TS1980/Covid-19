import React, { useState, useEffect } from 'react';
import {fetchDay} from "../../data";
import {Line, Bar} from "react-chartjs-2"; 
import styles from "./Chart.module.css";

const Chart = (props) => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetch = async () => {
			setDailyData(await fetchDay());
		}

    console.log(dailyData);
		fetch();
	}, []);

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
              data: dailyData.map((data) => data.confirmed),
              label: 'Infected',
              borderColor: '#f000ff',
              fill: true
            }, {
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: '#001eff',
              fill: true
            },
          ]
        }}
      />
    ) : null
  );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    );
}

export default Chart;