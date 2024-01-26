import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import accountReducer from "./slices/accountSlice.js"
import bonusReducer from "./slices/bonusSlice.js"
import rewardReducer from './reducers/reward.js'
import { adminApi } from './api/adminSlice.js'

const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,
        reward: rewardReducer,
        [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
