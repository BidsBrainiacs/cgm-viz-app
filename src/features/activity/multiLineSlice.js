import {createSlice} from '@reduxjs/toolkit'

const multiLineSlice = createSlice({
    name: 'activity',
    initialState: {
        lineChart1: {
            time: [0, 0, 0, 0],
            values: [0, 0, 0, 0],
        },
        lineChart2: {
            time: [0, 0, 0, 0],
            values: [0, 0, 0, 0],
        },
    },
    reducers: {
        fetchLineChart1: (state, action) => {
            state.lineChart1 = action.payload;
        },
        fetchLineChart2: (state, action) => {
            state.lineChart2 = action.payload;
        },
    },
})

export const {fetchLineChart1, fetchLineChart2} = multiLineSlice.actions
export default multiLineSlice.reducer