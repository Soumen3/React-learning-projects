import axios from "axios"
import { applyMiddleware, createStore, combineReducers } from "redux"
import logger from "redux-logger"
import { thunk } from "redux-thunk"

// action name constants 
// const init = 'account/init'
const inc = 'account/increment'
const dec = 'account/decrement'
const incByAmt = 'account/incrementByAmount'
const getAccUserFulfilled = 'account/getUset/fulfilled'
const getAccUserPending = 'account/getUset/pending'
const getAccUserRejected = 'account/getUset/rejected'

const incBonus = 'bonus/increment'

// Store 
const store = createStore(
    combineReducers({
        account: accountReducer,
        bonus: bonusReducer
    }), applyMiddleware(logger.default, thunk))

// reducer 
function accountReducer(state = { amount: 1 }, action) {

    switch (action.type) {
        case getAccUserFulfilled:
            return { amount: action.payload, pending:false}
        case getAccUserPending:
            return { ...state, pending: true }
        case getAccUserRejected:
            return { ...state, error:action.error, pending:false }
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
        case incByAmt:
            return { amount: state.amount + action.payload }
    }
    return state
}

function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 }
        case incByAmt:
            if (action.payload >= 100)
                return { points: state.points + 1 }
            else
                return state
        case dec:
            return { points: state.points - 1 }
    }
    return state
}

// global state 

// store.subscribe(()=>{
//     console.log(store.getState());
// })


// Async API call 
// async function getUser(){
//     const {data} = await axios.get('http://localhost:3000/account/1')
//     console.log(data);
//     return data 
// }
// getUser()




// Action Creater
function getUserAccount(id) {
    return async (dispatch, getState) => {
        try{
            dispatch(getAccoountUserPending())
            const { data } = await axios.get(`http://localhost:3000/account/${id}`)
            dispatch(getAccoountUserFulfilled(data.amount))
        }
        catch(error){
            dispatch(getAccoountUserRejected(error.message))
        
        }
    }
}

function getAccoountUserFulfilled(value) {
    return { type: getAccUserFulfilled, payload: value }
}
function getAccoountUserPending() {
    return { type: getAccUserPending }
}
function getAccoountUserRejected(error) {
    return { type: getAccUserRejected, error: error }
}

function increment() {
    return { type: inc }
}

function decrement() {
    return { type: dec }
}

function incrementByAmount(amount) {
    return { type: incByAmt, payload: amount }
}

function incrementBonus() {
    return { type: incBonus }
}

// Dispatch

setTimeout(() => {
    store.dispatch(getUserAccount(2))
}, 2000);
// store.dispatch(getUser(2))

// store.dispatch(incrementByAmount(100))
// store.dispatch(incrementBonus())