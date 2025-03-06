import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";

const CgmLineChart = () => {
    const cgmLineChart = useSelector((state) => state.cgmLineChart);
    const {time, values} = cgmLineChart.cgmLineChart;
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: (params) => {
                // The params is an array for 'axis' trigger
                const [dataPoint] = params;
                return `
                    <div style="font-weight: 500;">
                        ${dataPoint.axisValue} hrs<br>
                        ${dataPoint.data} mg/dL<br>
                    </div>
            `;
            }
        },
        grid: {
            left: 55,
            right: 0,
            top: 5,
            bottom: 45
        },
        xAxis: {
            type: 'category',
            name: "Time (24hr)",
            data: time,
            nameLocation: 'middle', // Position the label
            nameTextStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                padding: [15, 0, 0, 0], // Adjust padding
            },
        },
        yAxis: {
                type: 'value',
                name: "Blood Glucose Levels (mg/dL)",
                nameLocation: 'middle', // Position the label
                nameTextStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    padding: [0, 0, 25, 0], // Adjust padding
                },
        },
        series: [
            {
                data: values,
                type: 'line'
            }
        ]
    };
    return (
        <ReactECharts option={option}/>
    )
}

export default CgmLineChart;