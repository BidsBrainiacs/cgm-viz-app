import './App.css'
import {Card, Col, Container, Row} from "react-bootstrap";
import {useEffect} from "react";
import PercentageGrid from "./components/PercentageGrid.jsx";
// import PercentageBar from "./components/PercentageBar.jsx";
import PatientSelector from "./components/PatientSelector.jsx";
import CgmLineChart from "./components/individual_charts/CgmLineChart.jsx";
import PercentageBar from "./components/PercentageBar.jsx";

import MultiChartSelector from "./components/MultiChartSelector.jsx";
// import Form from "react-bootstrap/Form";
// import FormCheckInput from "react-bootstrap/FormCheckInput";
// import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import MultiChart from "./components/MultiLineChart.jsx";
// import {useDispatch} from "react-redux";
// const stackedBarAPI = "http://localhost:8000/api/cgm/percentage/7392";
//const lineChartAPI = "http://localhost:8000/api/cgm/line_chart/1001/8/4";

function App() {
    // const dispatch = useDispatch();
    // const [percentages, setPercentage] = useState({})
    // const [lineChartData, setLineChartData] = useState({})
    // const fetchPercentages = async (url) => {
    //     const percentagesApi = "http://localhost:8000/api/cgm/percentage/";
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setPercentage(data);
    //         dispatch(fetchPercentagesSuccess(data));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // const fetchLineChart = async (url) => {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setLineChartData(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    useEffect(() => {
        // fetchPercentages(stackedBarAPI);
        //fetchLineChart(lineChartAPI);
    }, []);
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                    <Card.Header>Patient Lookup</Card.Header>
                        <PatientSelector/>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>CGM Percentage Breakdown</Card.Header>
                        <Card.Body>
                            <PercentageGrid/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>CGM Daily Chart</Card.Header>
                        <Card.Body>
                            <CgmLineChart lineChartData/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col mb lg="3">
                    <Card>
                        <Card.Header>Time Range Chart</Card.Header>
                        <Card.Body>
                            <PercentageBar/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <MultiChartSelector/>
            </Row>
            <Row>
                <MultiChart/>
            </Row>
        </Container>
    )
}

export default App
