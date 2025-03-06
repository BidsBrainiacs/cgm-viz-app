import { Table } from 'react-bootstrap';
import {useSelector} from "react-redux";

const PercentageGrid = () => {
    const percentages = useSelector((state) => state.percentages);
    const { very_high, high, target, low, very_low } = percentages.percentages;

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Very High</th>
                <th>High</th>
                <th>Target</th>
                <th>Low</th>
                <th>Very Low</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{very_high}</td>
                <td>{high}</td>
                <td>{target}</td>
                <td>{low}</td>
                <td>{very_low}</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default PercentageGrid;
