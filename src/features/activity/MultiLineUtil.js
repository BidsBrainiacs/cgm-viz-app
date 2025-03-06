export const fetchActivityData = async (dataType, patientID, month, day) => {
    if (dataType == 'cgm'){
        const url = `http://localhost:8000/api/cgm/line_chart/${patientID}/${month}/${day}`

        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }
    else{
        const url = `http://localhost:8000/api/activity/line_chart/${dataType}/${patientID}/${month}/${day}`

        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }
};
