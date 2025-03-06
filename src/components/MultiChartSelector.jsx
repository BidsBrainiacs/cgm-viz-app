import {Col, FormSelect, Row} from "react-bootstrap";
import {useState} from "react";
import * as PercentagesUtil from "../features/cgm/PercentagesUtil.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchLineChart1, fetchLineChart2} from "../features/activity/multiLineSlice.js";
import * as LineChartUtil from "../features/cgm/LineChartUtil.js";
import * as MultiLineUtil from "../features/activity/MultiLineUtil.js";
import PatientSelector from "./PatientSelector.jsx";

const MultiChartSelector = () => {
    const dispatch = useDispatch();
    const patient = useSelector((state) => state.patientData.patient);

    const handleChart1Load = async (chartEvent) => {
        const chart1 = chartEvent.target.value
        const {id, month, day} = patient;
        const data = await MultiLineUtil.fetchActivityData(chart1, id, month, day);
        dispatch(fetchLineChart1(data))

    };

    const handleChart2Load = async (chart2) => {
        const {id, month, day} = patient;
        const data = await MultiLineUtil.fetchActivityData(chart2, id, month, day);
        dispatch(fetchLineChart2(data))

    };

    return (
        <Row>
            <Col>
                <FormSelect
                onChange={(e) => handleChart1Load(e)}
                >
                    <option selected>Open this select menu</option>
                    <option value="cgm">CGM</option>
                    <option value="oxygen_saturation">Oxygen Saturation</option>
                    <option value="physical_activity">Physical Activity Steps</option>
                    <option value="physical_activity_calorie">Physical Activity Calorie</option>
                    <option value="respiratory_rate">Respiratory Rate</option>
                    <option value="stress">Stress Levels</option>
                    <option value="heart_rate">Heart Rate</option>
                </FormSelect>
            </Col>
            <Col>
                <FormSelect
                    onChange={(e) => handleChart2Load(e.target.value)}
                >
                    <option selected>Open this select menu</option>
                    <option value="cgm">CGM</option>
                    <option value="oxygen_saturation">Oxygen Saturation</option>
                    <option value="physical_activity">Physical Activity Steps</option>
                    <option value="physical_activity_calorie">Physical Activity Calorie</option>
                    <option value="respiratory_rate">Respiratory Rate</option>
                    <option value="stress">Stress Levels</option>
                    <option value="heart_rate">Heart Rate</option>
                </FormSelect>
            </Col>
        </Row>
    );
}

export default MultiChartSelector;
