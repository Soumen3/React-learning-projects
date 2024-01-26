import { useDispatch } from 'react-redux';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, getUserAccount } from '../slices/accountSlice';


function Account() {

    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    const amount = useSelector(state=> state.account.amount)
    
    return (
        <div className="border-solid border-stone-100 border-4 rounded my-3 mx-3">
            <h2 className="text-2xl font-bold leading-7 text-center text-red-400 sm:truncate sm:text-xl sm:tracking-tight">
                Account Component
            </h2>
            <p className="mt-1 text-sm font-bold leading-6 text-center sm:text-lg text-yellow-500">Amount:${amount} </p>

            <div className="buttons text-center">
                <button type="button" onClick={()=>dispatch(increment())} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Increment +</button>
                <button type="button" onClick={()=>dispatch(decrement())} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Decrement -</button>
                <input type="text" value={value}  onChange={(e) => setValue(+e.target.value)} id="eamount" className="max-w-40	bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Increment by" required></input>
                <button type="button" onClick={()=>dispatch(incrementByAmount(value))} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Increment By +{value}</button>
                <button type="button" onClick={()=>dispatch(getUserAccount(1))} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get User Account</button>
            </div>
        </div>
    )
}

export default Account;
