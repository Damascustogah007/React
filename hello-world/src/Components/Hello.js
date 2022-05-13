import React from 'react'

const Hello = (props)=> {
    console.log(props)
    return(
        <div>
            <h1>
                My name is {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

export default Hello