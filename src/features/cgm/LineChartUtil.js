export const fetchChartData = async (patientID, month, day) => {

    const url = `http://localhost:8000/api/cgm/line_chart/${patientID}/${month}/${day}`
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
