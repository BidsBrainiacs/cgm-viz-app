import {createSlice} from '@reduxjs/toolkit'

const patientDataSlice = createSlice({
    name: 'patient',
    initialState: {
        patient: {
            id: null,
            month: null,
            day: null,
        }
    },
    reducers: {
        fetchData: (state, action) => {
            state.patient = action.payload
        }
    },
})

export const {fetchData} = patientDataSlice.actions

export default patientDataSlice.reducer