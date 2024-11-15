'use client';
import { useState } from 'react';

export default function Counter(){
    const [numPulsaciones, setNumPuslsaciones] = useState(0);

    function sumaPulsaciones(){
        setNumPuslsaciones(numPulsaciones + 1);
    }

    return <> 
        <button onClick={sumaPulsaciones}>Pulsame</button>
        <h2>{numPulsaciones}</h2>
    </>
}

