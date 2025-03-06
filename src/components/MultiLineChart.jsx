import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";
import lineChartSlice from "../features/cgm/lineChartSlice.js";
import {Card, Row} from "react-bootstrap";

const MultiLineChart = () => {
    const charts = useSelector((state) => state.multiLineSliceReducer);
    var time1 = [0, 0, 0, 0]
    var values1 = [0, 0, 0, 0]
    var time2 = [0, 0, 0, 0]
    var values2 = [0, 0, 0, 0]
    if (charts.lineChart1 != undefined) {
        time1 = charts.lineChart1["time"];
        values1 = charts.lineChart1["values"];
    }
    if (charts.lineChart2 != undefined) {
        time2 = charts.lineChart2["time"];
        values2 = charts.lineChart2["values"];
    }
    const lineChart1 = {
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
            data: time1,
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
                data: values1,
                type: 'line'
            }
        ]
    };
    const lineChart2 = {
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
            data: time2,
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
                data: values2,
                type: 'line'
            }
        ]
    };
    return (
        <Card>
            <Row>
                <ReactECharts option={lineChart1}/>
            </Row>
            <Row>
                <ReactECharts option={lineChart2}/>
            </Row>
        </Card>
    );
}

export default MultiLineChart;