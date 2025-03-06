import {createSlice} from '@reduxjs/toolkit'

const percentagesSlice = createSlice({
    name: 'percentages',
    initialState: {
        percentages: {very_high: 0, high: 0, target: 0, low: 0, very_low: 0,},
    },
    reducers: {
        fetchPercentages: (state, action) => {
            state.percentages = action.payload
        }
    },
})

export const {fetchPercentages} = percentagesSlice.actions

export default percentagesSlice.reducer