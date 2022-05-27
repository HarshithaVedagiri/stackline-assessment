import React from "react";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, LineElement, PointElement} from 'chart.js';
import {Bar, Line } from 'react-chartjs-2';
import Data from '../Data.json'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
)

const LineChart =() =>{

const data= {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Retail Sales',
        data: Data[0].sales.map((data) => data.retailSales) ,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132)',
          
        ],
        borderWidth: 1
    },
    {
        label: 'Wholesale Sales',
        data: Data[0].sales.map((data) => data.wholesaleSales) ,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
             'rgba(54, 162, 235)',
        ],
        borderWidth: 1

    }]
    
}
const options= {
  layout: {
    padding: {                
      top: 20                
    }
  },
  scales: {
    maintainAspectRation:false,
      y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Sales Price'
          }
      },
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      }
  },
  legend: {
    labels:{
      fontSize: 26
    }
  }
}

  return(
    <div>
      <Line height="100%"  options={options} data={data}/>
    </div>
  )
}
export default LineChart;