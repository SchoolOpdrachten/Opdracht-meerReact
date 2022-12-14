import React, { useState, useEffect } from 'react'
import './BoekStyle.css'

// ik wilde gaaf het aantal dagen ophalen van de server maar daar had ik geen tijd meer voor
const DAGEN = [...Array(14).keys()] // fetch('reservering/aantalDagen')

export const Boek = () => {
    const [result, setResult] = useState('') // voor de resultaten van de boeking

    const [dag, setDag] = useState(0)
    const [aantal, setAantal] = useState(0)
    const [email, setEmail] = useState('')

    useEffect(() => {
        document.getElementById('result').innerHTML = result
    }, [result])

    async function submitHandler (e)  {
        e.preventDefault() // geen reload van de pagina

        if (aantal > 10) {
            setResult('Er is niet meer plek op deze dag. Minder het aantal mensen')
            return
        }
        if (dag === 0 || aantal === 0 || email === '') {
            setResult('Vul alles in')
            return
        }
        let res = await fetch('reservering/nieuwReservering?dag=' + dag + '&aantal=' + aantal + '&email=' + email)
        console.log( await res.json())
        setResult('Boeking is gelukt')
    }

    const Dag = (dag) => {
        return (<div className='dagItem'>
            <input type='radio' name='dag' value={dag} onChange={e => setDag(e.target.value)} /><span> {dag} </span>
        </div>
        )
    }

    return (<>
        <form onSubmit={e => submitHandler(e)}>
            Kies een dag uit: 
            <br />
            <div className='dagenContainer'>{DAGEN.map(dag => Dag(dag + 1))}</div>
            <br />
            Aantal mensen: <input type='number' name='aantal' onChange={e => setAantal(e.target.value)} />
            <br />
            Email: <input type='email' name='email' onChange={e => {
                console.log(e.target.value);
                setEmail(e.target.value)
            }} />
            <br />
            <button type='submit'>Doe Boeking</button>
        </form>
        <p id='result'></p>
        </>
    );
}