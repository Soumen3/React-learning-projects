import { useAddAccountMutation, useGetAccountsQuery, useDeleteAccountMutation, useUpdateAccountMutation } from "../api/adminSlice";
import React, { useState } from "react";



function Admin() {
    const [amount, setAmount] = useState(0);
    const [id, setId] = useState(0);

    const { data, error, isLoading } = useGetAccountsQuery()

    const [addAccount] = useAddAccountMutation();
    const [deleteAccountCall] = useDeleteAccountMutation()
    const [updateAccountCall] = useUpdateAccountMutation()



    return (
        <div className="border-solid border-stone-100 border-4 rounded my-3 mx-3">
            <h2 className="text-2xl font-bold leading-7 text-center text-red-400 sm:truncate sm:text-xl sm:tracking-tight">
                Admin Component
            </h2>
            { isLoading ? <p>Loading...</p>:null }
            {
                !isLoading && data && data.map((account, index) => <p key={index} className="mt-1 text-sm font-bold leading-6 text-center sm:text-lg text-yellow-500">
                    {account.id} : {account.amount}
                    <button type="button" onClick={() => deleteAccountCall(account.id)} className="mx-3 text-black bg-gradient-to-r from-purple-200 to-pink-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Delete Account</button>
                    <button type="button" onClick={() => updateAccountCall({id:account.id,  amount:777})} className="mx-3 text-black bg-gradient-to-r from-purple-200 to-pink-200 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Update Account</button>
                </p>)
            }


            <div className="buttons text-center flex items-center self-center justify-center">
                <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-400">
                    Price
                </label>
                <input type="text" value={amount} onChange={(e) => setAmount(+e.target.value)} id="amount" className="max-w-40	bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Amount" required></input>

                <button type="button" onClick={() => addAccount({amount:amount, id:String(data.length + 1)})} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Account</button>
            </div>
        </div>
    )
}

export default Admin;
