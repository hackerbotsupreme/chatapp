import React from 'react'
import { Line, Doughnut } from "react-chartjs-2"
import {
    CategoryScale,
    Chart as ChartJS,
    Tooltip,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    Filler
} from "chart.js"
import { getlast7days } from '../../lib/features'

ChartJS.register(
    CategoryScale,
    Tooltip,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    Filler
)

const labels = getlast7days()

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            }
        },
    }
}

const LineChart = ({ value = [] }) => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Line Dataset 2',
                data: value, // Add your data here
                fill: true,
                backgroundColor: 'rgba(75,12,192,0.2)',
                borderColor: 'rgba(75,12,192,1)',
            },
        ]
    }

    return (
        <Line data={data} options={lineChartOptions} />
    )
}

const doughnutChartOptions = {
    responsive : true , 
    plugins: {
        legend: {
            display: false,
        }
    },
    cutout : 110 
}

const DoughnutChart = ({labels=[],value = []}) => {
    const data = {
        labels ,
        datasets: [
            {
                data : value  ,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4,
                borderColor: [
                    'rgb(25, 99, 132)',
                    'rgb(55, 9, 32)',
                    'rgb(505, 99, 132)',
                ] , 
                offset : 25 , 
                hoverBackgroundColor : [
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ]
            }
        ]
    }

    return (
        <Doughnut  style={{
            zIndex : 10
        }} data={data}  options={doughnutChartOptions} />
    )
}

export { LineChart, DoughnutChart }