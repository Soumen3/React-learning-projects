import { incBonus, incByAmt,  } from "../action"


export function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 }
        case incByAmt:
            if (action.payload >= 100)
                return { points: state.points + 1 }
            else
                return state
    }
    return state
}