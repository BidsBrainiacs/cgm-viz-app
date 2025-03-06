import { configureStore } from '@reduxjs/toolkit'
import percentagesReducer from "../features/cgm/percentagesSlice";
import cgmLineChartReducer from "../features/cgm/lineChartSlice";
import multiLineSliceReducer from "../features/activity/multiLineSlice";
import patientDataReducer from "../features/cgm/patientDataSlice";


export const store = configureStore({
    reducer: {
        percentages: percentagesReducer,
        cgmLineChart: cgmLineChartReducer,
        multiLineSliceReducer: multiLineSliceReducer,
        patientData: patientDataReducer,
    },
})

