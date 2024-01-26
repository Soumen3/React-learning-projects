import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setnumberAllowed] = useState(false);
    const [specialCharacters, setspecialCharacters] = useState(false);
    const [Password, setPassword] = useState()

    // useRef Hook
    const PasswordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (specialCharacters) str += "!@#$%^&*(){}[]|?/,.;:_~";

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass)


    }, [length, numberAllowed, specialCharacters]);

    const copyPasswordToClipboard = useCallback(() => {
        PasswordRef.current?.select()
        window.navigator.clipboard.writeText(Password);
    }, [Password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, specialCharacters, passwordGenerator])


    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-6 text-orange-500 bg-gray-700">
                <h1 className='text-4xl text-center text-white mb-5'>Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden, mbb-4">
                    <input
                        type="text"
                        value={Password}
                        className='outline-none w-full py-1 px-3 rounded-lg'
                        placeholder='Password'
                        readOnly
                        ref={PasswordRef} />
                    <button className='outline-none bg-blue-500 text-white px-3 mx-3 py-0.5 shrink-0 rounded-lg'
                        onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input type="range" name="range" min={8} max={50} value={length} onChange={(e) => { setLength(e.target.value) }} className='cursor-pointer' />
                        <label htmlFor="range">Length:{length}</label>
                    </div>
                </div>
                <div className="flex text-sm gap-x-2">
                    <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' name="numbers" onChange={(e) => setnumberAllowed((prev) => !prev)} />
                    <label htmlFor="numbers">Numbers</label>

                    <input type="checkbox" defaultChecked={specialCharacters} id='specialCharacter' name="specialCharacter" onChange={(e) => setspecialCharacters((prev) => !prev)} />
                    <label htmlFor="numbers">Special Character</label>
                </div>
            </div>
        </>
    )
}

export default App
