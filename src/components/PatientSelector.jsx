import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useDispatch} from "react-redux";
import {fetchPercentages} from "../features/cgm/percentagesSlice.js";
import * as PercentagesUtil from "../features/cgm/PercentagesUtil.js";
import * as LineChartUtil from "../features/cgm/LineChartUtil.js";
import {fetchChart} from "../features/cgm/lineChartSlice.js";
import {fetchData} from "../features/cgm/patientDataSlice.js";

const PatientSelector = () => {
    const dispatch = useDispatch();
    const [patientID, setPatientID] = useState("1001");
    const [month, setMonth] = useState("8");
    const [day, setDay] = useState("4");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const validatePatientID = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/patients/validate_id/${patientID}`
            );
            return response.data;
        } catch (error) {
            setErrorMessage("Error validating Patient ID.");
            return false;
        }
    };

    const validateDate = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/cgm/validate_date/${patientID}/${month}/${day}`
            );
            return response.data;
        } catch (error) {
            setErrorMessage("Error validating Date.");
            return false;
        }
    };

    const handlePercentagesGridLoad = async (id) => {
        const data = await PercentagesUtil.fetchPercentagesData(id);
        dispatch(fetchPercentages(data))
    };

    const handlePercentagesBarLoad = async (id) => {
        const data = await PercentagesUtil.fetchPercentagesData(id);
        dispatch(fetchPercentages(data))
    };

    const handleCgmLineChartLoad = async (id, month, day) => {
        const data = await LineChartUtil.fetchChartData(id, month, day);
        dispatch(fetchChart(data))
    };

    const handlePatientDataLoad = async (id, month, day) => {
        const data = {id: id, month: month, day: day};
        dispatch(fetchData(data))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (!patientID || !month || !day) {
            setErrorMessage("All fields are required.");
            return;
        }

        const isPatientIDValid = await validatePatientID();
        if (!isPatientIDValid) {
            setErrorMessage("Invalid Patient ID.");
            return;
        }

        const isDateValid = await validateDate();
        if (!isDateValid) {
            setErrorMessage("Invalid Date for the given Patient ID.");
            return;
        }
        await handlePercentagesGridLoad(patientID);
        await handlePercentagesBarLoad(patientID);
        await handleCgmLineChartLoad(patientID, month, day);
        await handlePatientDataLoad(patientID, month, day);
        setSuccessMessage("Form submitted successfully!")

    };

    return (
        <div className="container mt-5">
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <InputGroup>
                    <InputGroup.Text id="inputGroup-sizing-default">Patient ID</InputGroup.Text>
                        <Form.Control
                            type="text"
                            id="patientID"
                            value={patientID}
                            onChange={(e) => setPatientID(e.target.value)}
                            required
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                    <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">Month</InputGroup.Text>
                        <Form.Control
                            type="number"
                            className="form-control"
                            id="month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            min="1"
                            max="12"
                            required
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                    <InputGroup>
                        <InputGroup.Text id="inputGroup-sizing-default">Day</InputGroup.Text>
                        <Form.Control
                            type="number"
                            className="form-control"
                            id="day"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            min="1"
                            max="31"
                            required
                        />
                    </InputGroup>
                </Form.Group>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default PatientSelector;
