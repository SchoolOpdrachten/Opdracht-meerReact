import React, { useState } from 'react'

// ik wilde gaaf het aantal dagen ophalen van de server maar daar had ik geen tijd meer voor
const DAGEN = [...Array(14).keys()] // fetch('reservering/aantalDagen')

export const Boek = () => {
    const [dag, setDag] = useState(0)
    const [aantal, setAantal] = useState(0)
    const [email, setEmail] = useState('')

    async function submitHandler (e)  {
        e.preventDefault()
        console.log(dag, aantal, email)
        let res = await fetch('reservering', {
            method: 'POST',
            body: JSON.stringify({
                dag: dag,
                aantal: aantal,
                email: email
            })
        })
        console.log(res.status === 200 ? 'succes' : alert('error'))
    }
    async function testHandler(e) {
        e.preventDefault()
        let res = await fetch('reservering')
        console.log( await res.json())
    }

    const Dag = (dag) => {
        return (<>
            <input type='radio' name='dag' value={dag} onChange={e => setDag(e.target.value)} /><label>{dag}</label>
        </>
        )
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
            Kies een dag uit: {DAGEN.map(dag => Dag(dag + 1))}
            <br />
            Aantal mensen: <input type='number' name='aantal' onChange={e => setAantal(e.target.value)} />
            <br />
            Email: <input type='email' name='email' onChange={e => {
                console.log(e.target.value);
                setEmail(e.target.value)
            }} />
            <br />
            <button onClick={e => testHandler(e)}>Doe Boeking</button>
        </form>
    );
}




/* 
voor een of andere reden kan je niks binnen in de input geven

<form action="/doeboeking" method="get">
            Kies een dag uit: <div id="lijst">{
                ['maandag', 'dinsdag'].map( dag => {
                    return (<input type='radio' name='dag' value={dag}>{dag}</input>)
                })
            }</div>
            <br />
            Aantal mensen: <input type="text" name="aantal"></input>
            <br />
            Email: <input type="text" name="email"></input>
            <br />
            <input type="submit">Doe boeking</input>
        </form >
*/