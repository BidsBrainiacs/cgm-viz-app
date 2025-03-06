import ReactECharts from "echarts-for-react";
import {useSelector} from "react-redux";

const PercentageBar = () => {
    const percentages = useSelector((state) => state.percentages);
    const {very_high, high, target, low, very_low} = percentages.percentages;
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/> {c}%'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            selectedMode: true,
        },
        grid: {
            left: 5,
            right: 100,
            top: 0,
            bottom: 0
        },
        xAxis: {
            type: 'category',
            data: ['Time in Ranges']
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "Very Low",
                type: "bar",
                stack: "total",
                data: [{
                    value: very_low,
                    itemStyle: {color: "#fab600"}
                }]
            },
            {
                name: "Low",
                type: "bar",
                stack: "total",
                data: [{
                value: low,
                itemStyle: {color: "#ffea00"}
                }]
            },
            {
                name: "Target",
                type: "bar",
                stack: "total",
                data: [{
                    value: target,
                    itemStyle: {color: "#55b152"}
                }]
            },
            {
                name: "High",
                type: "bar",
                stack: "total",
                data: [{
                    value: high,
                    itemStyle: {color: "#e5010f"}
                }]
            },
            {
                name: "Very High",
                type: "bar",
                stack: "total",
                data: [{
                    value: very_high,
                    itemStyle: {color: "#a41310"}
                }]

            }
        ]
    };
    return (
        <ReactECharts option={option}/>
    )
};

export default PercentageBar;