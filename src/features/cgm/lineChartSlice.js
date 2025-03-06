import {createSlice} from '@reduxjs/toolkit'

const lineChartSlice = createSlice({
    name: 'cgmLineChart',
    initialState: {
        cgmLineChart: {
            time: [0, 0, 0, 0],
            values: [0, 0, 0, 0],
        }
    },
    reducers: {
        fetchChart: (state, action) => {
            state.cgmLineChart = action.payload
        }
    },
})

export const {fetchChart} = lineChartSlice.actions

export default lineChartSlice.reducer