import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './reports.css'
function Reports() {
    const percentage = 55
    const revPercentage = 70
    const monthPercentage = 90
  return (
    <div className='primary-cont'>
        <div className="report-card">
            <div className="txt">
            <h1>Today's Target</h1>
                <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
            pathColor: "#FC27B3",
            textColor: "white", 
            trailColor: 'white',
            backgroundColor: '#3e98c7'
        })}/>;
            </div>
            

        </div>
        <div className="report-card">
            <div className="txt">
                <h1>Monthly Target</h1>
                <CircularProgressbar value={revPercentage} text={`${revPercentage}%`} styles={buildStyles({
            pathColor: "#FC27B3",
            textColor: "white", 
            trailColor: 'white',
            backgroundColor: '#3e98c7',
             
        })}/>;
            </div>
        </div>
        <div className="report-card">
            <div className="txt">
                    <h1>Revenue Target</h1>
                    <CircularProgressbar value={monthPercentage} text={`${monthPercentage}%`} styles={buildStyles({
            pathColor: "#FC27B3",
            textColor: "white", 
            trailColor: 'white',
            backgroundColor: '#3e98c7',
            pathTransitionDuration: 0.5,

        })}/>;
            </div>
        </div>
    </div>
  )
}

export default Reports