import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input
            type="text" 
            value={props.value}
            onChange={props.change}
            placeholder="Wpisz miasto"
            />
            <button>Wyszukaj miasta</button>
        </form>
    )
}

export default Form 