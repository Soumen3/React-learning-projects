import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'
import Reward from './components/Reward'
import Admin from './components/Admin'

function App() {

    const amount = useSelector(state=>state.account.amount)
    const points = useSelector(state=>state.bonus.points)

    return (
        <>
            <h2 className="text-2xl font-bold leading-7 text-center text-slate-300 sm:truncate sm:text-3xl sm:tracking-tight">
                APP
            </h2>

            <h2 className="text-2xl font-bold leading-7 text-orange-300 sm:truncate sm:text-xl sm:tracking-tight">
                Current Amount: {amount}
            </h2>
            <h2 className="text-2xl font-bold leading-7 text-orange-300 sm:truncate sm:text-xl sm:tracking-tight">
                Total Bonus: {points}
            </h2>

            <Account />
            <Bonus></Bonus>
            <Reward/>
            <Admin/>
        </>
    )
}

export default App
