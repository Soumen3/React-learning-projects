import { getAccUserFulfilled, 
    getAccUserPending, 
    getAccUserRejected,
    inc,
    dec,
    incByAmt,
 } from "../action"


// reducer 
export function accountReducer(state = { amount: 0 }, action) {

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
