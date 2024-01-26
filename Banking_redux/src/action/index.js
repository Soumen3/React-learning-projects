import axios from "axios"



// action name constants 
// const init = 'account/init'
export const inc = 'account/increment'
export const dec = 'account/decrement'
export const incByAmt = 'account/incrementByAmount'
export const getAccUserFulfilled = 'account/getUser/fulfilled'
export const getAccUserPending = 'account/getUser/pending'
export const getAccUserRejected = 'account/getUser/rejected'

export const incBonus = 'bonus/increment'



// Action Creator
export function getUserAccount(id) {
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

export function getAccoountUserFulfilled(value) {
    return { type: getAccUserFulfilled, payload: value }
}
export function getAccoountUserPending() {
    return { type: getAccUserPending }
}
export function getAccoountUserRejected(error) {
    return { type: getAccUserRejected, error: error }
}

export function increment() {
    return { type: inc }
}

export function decrement() {
    return { type: dec }
}

export function incrementByAmount(amount) {
    return { type: incByAmt, payload: amount }
}

export function incrementBonus() {
    return { type: incBonus }
}
