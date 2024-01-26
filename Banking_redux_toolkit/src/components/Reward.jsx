import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/reward";

function Reward() {
    
    const dispatch = useDispatch()
    const points = useSelector(state => state.reward.points)

    
    return (
        <div className="border-solid border-stone-100 border-4 rounded my-3 mx-3">
            <h2 className="text-2xl font-bold leading-7 text-center text-red-400 sm:truncate sm:text-xl sm:tracking-tight">
                Reward Component
            </h2>
            <p className="mt-1 text-sm font-bold leading-6 text-center sm:text-lg text-yellow-500">Total point: {points} </p>

            <div className="buttons text-center">
                <button type="button" onClick={()=>dispatch(increment())} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Increment +</button>
                <button type="button" onClick={()=>dispatch(incrementByAmount(10))} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Increment by +10</button>
            </div>
        </div>
    )
}

export default Reward;
