import React, {useEffect, useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {getActivities, getActualActivities} from "../../api/activities";
import "./tablePage.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const TablePage = () => {

  const [activities, setActivities]=useState<any[] | null>(null)
  const [actualActivities, setActualActivities]=useState<any[] | null>(null)


    useEffect(() => {
      getActivities().then((resp) => setActivities(resp?.data?.activitys));

      const fetchActivities = () => {
        getActualActivities().then((resp) => setActualActivities(resp?.data?.activitys));
      };

      fetchActivities()

      const intervalId = setInterval(fetchActivities, 3000);

      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);

    }, [])

  if (!activities){
    return <div>Loading...</div>
  }

  const data = {
    labels: ["Distracted", "Asleep", "Active", "Looking Away"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          activities.find((item) => item?._id === 'distracted')?.count || 0,
          activities.find((item) => item?._id === 'asleep')?.count || 0,
          activities.find((item) => item?._id === 'active')?.count || 0,
          activities.find((item) => item?._id === 'looking_away')?.count || 0,
        ],
        backgroundColor: [
          "rgba(255, 159, 64, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 2,
        hoverOffset: 4,
        cutout: '50%',
      },
    ],
  };


  return (
    <div className="tableLayout">
      <div className="status"><div className="notification"><div className="circle"></div>: Status</div></div>
      <div className="w-full flex p-[30px]">
        <div className="w-1/2"> <Doughnut data={data} /></div>
        <div className="w-1/2"></div>
      </div>

    </div>
  );
};

export default TablePage;
