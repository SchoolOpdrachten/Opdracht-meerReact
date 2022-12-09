import React from 'react'

export const Boek = () => {
    return (
        <form action='/Reservering' method='post'>
            Kies een dag uit: {['maandag', 'dinsdag'].map(dag => Dag(dag))}
            <br />
            Aantal mensen: <input type='number' name='aantal'></input>
            <br />
            Email: <input type='email' name='email'></input>
            <br />
            <input type="submit" name='doe boeking'></input>
        </form>
    );
}

const Dag = (dag) => {
    return (<>
        <label>{dag}</label><input type='radio' name={dag} value={dag}></input>
        </>
    )
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