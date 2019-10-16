import React from 'react'


const Result = (props) => {

    const { err, city, sunrise, sunset, temp, oressure, wind, err } = props.weather;

    let content = null;

    if(!err && city) {
       content = (
           <div>{`Wyszukiwanie dla miasta ${city}`}</div>
       ) 
    }

    return (
        <div className="result">
            {err ? `Nie znaleziono w bazie miasta ${city}` : content}
        </div>
    )
}

export default Result;