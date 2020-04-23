import React, { useState, useEffect } from 'react';
import {fetchDay} from "../../data";
import {Line, Bar} from "react-chartjs-2"; 
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
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

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#f000ff', '#74ee15', '#001eff'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

    return(
      <div className={styles.container}>
        {country ? barChart : lineChart}
      </div>
    );
}

export default Chart;