'use client';
import { useState } from "react";


export default function Buttons() {

    const class1 = 'bg-white border-2 text-black font-bold py-2 px-4 rounded-lg';
    const class2 = 'hover:border-white hover:bg-black hover:text-white hover:shadow-md';
    const class3 = 'font-semibold border-2 border-black py-2 px-2 hover:bg-white hover:text-black hover:rounded-lg m-12';

    const [ count, setCount ] = useState(0);
    const [ theme, setTheme ] = useState('blue');

    return (
        <div>
            <button className={`${class1} ${class2}`} onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
            <span className={class3}> Cuenta: {count}, Tema: {theme} </span>
            <button className={`${class1} ${class2}`} onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
        </div>
    );
}