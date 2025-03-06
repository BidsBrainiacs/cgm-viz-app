export const fetchPercentagesData = async (patientID) => {
    const url = `http://localhost:8000/api/cgm/percentage/${patientID}`
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
